import type { Metadata } from "next";
import Link from "next/link";
import { Value } from "@/components/Value";
import { pending, site } from "@/content/site";
import { displayPhone, loadIdentity } from "@/lib/identity";

export const metadata: Metadata = { title: `Mentions légales — ${site.name}` };

// Source: gomuscu/motis/docs/juridique/mentions-legales.md (reference version).
// Common with MOTIS: publisher identity, SIREN, address, contact, IP, applicable law, mediation.
// Specific to WKG: hosting, no third-party data sources, no "Professionnels présents dans MOTIS".
// Common part: the publisher identity is READ from MOTIS (lib/identity.ts), never copied here (2026-11-26).
// Only VAT and the consumer mediator remain pending, as on MOTIS.
export const revalidate = 86400;

export default async function LegalNotice() {
  let id = await loadIdentity();
  return (
    <main className="section legal">
      <p>
        <Link href="/">← {site.name}</Link>
      </p>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Le site {site.name} est édité par <strong>{id.name}</strong>, {id.legalForm.toLowerCase()}, sous
        le nom commercial <strong>{id.tradeName}</strong>.
      </p>
      <ul>
        <li>Adresse : {id.address}</li>
        <li>Numéro SIREN : {id.siren}</li>
        <li>Numéro SIRET (établissement principal) : {id.siret}</li>
        <li>Code APE / NAF : {id.ape}</li>
        <li>Immatriculation : {id.registration}</li>
        <li>
          TVA : <Value value={id.vat ?? pending("numéro intracommunautaire, ou « TVA non applicable, article 293 B du CGI »")} />
        </li>
        <li>Téléphone : {displayPhone(id.phone)}</li>
        <li>
          Courriel : <a href={`mailto:${id.email.wkg}`}>{id.email.wkg}</a>
        </li>
      </ul>
      <p>Responsable de la publication : {id.name}.</p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc. — vercel.com
        <br />
        Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments composant ce site — structure, textes, interfaces, identité
        visuelle et code source — est protégé par le droit de la propriété intellectuelle et
        demeure la propriété exclusive de l&apos;éditeur, à l&apos;exception des éléments
        appartenant à des tiers et identifiés comme tels.
      </p>
      <p>
        Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, par
        quelque procédé que ce soit et sur quelque support que ce soit, sans l&apos;autorisation
        écrite préalable de l&apos;éditeur, est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le site lui-même ne dépose aucun cookie et ne collecte aucune donnée personnelle. Le
        calendrier de réservation de la section Contact est fourni par un service externe,
        Cal.com, et chargé depuis ses serveurs lorsque cette section s&apos;affiche : Cal.com
        reçoit alors les données techniques de connexion, puis, en cas de réservation, le nom,
        l&apos;adresse e-mail et la description du besoin. Voir sa{" "}
        <a href="https://cal.com/privacy" rel="noopener">politique de confidentialité</a>.
      </p>
      <p>
        Une réclamation peut être adressée à la Commission nationale de l&apos;informatique et des
        libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — cnil.fr
      </p>

      <h2>Médiation de la consommation</h2>
      <p>
        Conformément à l&apos;article L612-1 du Code de la consommation, le consommateur peut
        recourir gratuitement au service de médiation suivant en cas de litige :{" "}
        <Value value={id.mediator ?? pending("nom, adresse et site du médiateur retenu (commun avec MOTIS)")} />
      </p>

      <h2>Droit applicable</h2>
      <p>Les présentes mentions légales sont soumises au droit français.</p>
    </main>
  );
}
