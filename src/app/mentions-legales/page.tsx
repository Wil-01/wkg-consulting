import type { Metadata } from "next";
import Link from "next/link";
import { Value } from "@/components/Value";
import { pending, site } from "@/content/site";

export const metadata: Metadata = { title: `Mentions légales — ${site.name}` };

// Source: gomuscu/motis/docs/juridique/mentions-legales.md (reference version).
// Common with MOTIS: publisher identity, SIREN, address, contact, IP, applicable law, mediation.
// Specific to WKG: hosting, no third-party data sources, no "Professionnels présents dans MOTIS".
// Any change to the common part must be mirrored on MOTIS — flag it, don't do it alone.
export default function LegalNotice() {
  return (
    <main className="section legal">
      <p>
        <Link href="/">← {site.name}</Link>
      </p>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Le site {site.name} est édité par <strong>Williams KOUTON GODONOU</strong>, entrepreneur
        individuel.
      </p>
      <ul>
        <li>
          Adresse : <Value value={pending("adresse professionnelle — en attente de l'immatriculation")} />
        </li>
        <li>
          Numéro SIREN : <Value value={pending("en attente de l'immatriculation")} />
        </li>
        <li>
          Numéro SIRET : <Value value={pending("en attente de l'immatriculation")} />
        </li>
        <li>
          Code APE / NAF : <Value value={pending("en attente de l'immatriculation")} />
        </li>
        <li>
          TVA : <Value value={pending("numéro intracommunautaire, ou « TVA non applicable, article 293 B du CGI »")} />
        </li>
        <li>Téléphone : 07 59 55 90 53</li>
        <li>
          Courriel : <Value value={pending("adresse de contact WKG")} />
        </li>
      </ul>
      <p>Responsable de la publication : Williams KOUTON GODONOU.</p>

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
        Ce site ne dépose aucun cookie et ne collecte aucune donnée personnelle. La prise de
        rendez-vous se fait sur un service externe, Cal.com, qui traite le nom, l&apos;adresse
        e-mail et la description du besoin saisis lors de la réservation. Voir sa{" "}
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
        <Value value={pending("nom, adresse et site du médiateur retenu (commun avec MOTIS)")} />
      </p>

      <h2>Droit applicable</h2>
      <p>Les présentes mentions légales sont soumises au droit français.</p>
    </main>
  );
}
