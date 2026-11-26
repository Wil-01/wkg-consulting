// Publisher identity, read from MOTIS (motis.fit/identite-legale.json) — same sole trader, same SIREN, ONE source
// (gomuscu/motis/apps/web/src/lib/legal-identity.ts). No local copy: a copy is a second place to forget.
// Refreshed daily; if the source cannot be read, the page fails instead of showing a stale or invented value.
export type Identity = {
  name: string;
  tradeName: string;
  legalForm: string;
  siren: string;
  siret: string;
  ape: string;
  registration: string;
  address: string;
  phone: string;
  email: { motis: string; wkg: string };
  vat: string | null;
  vatNumber: string | null;
  mediator: string | null;
};

export const IDENTITY_URL = "https://www.motis.fit/identite-legale.json";

export async function loadIdentity(): Promise<Identity> {
  const res = await fetch(IDENTITY_URL, { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`Publisher identity unavailable (${res.status}) at ${IDENTITY_URL}`);
  const id = (await res.json()) as Identity;
  if (!id?.siren || !id?.address || !id?.name) throw new Error("Publisher identity incomplete");
  return id;
}

/** French reading of an E.164 number: "07 59 55 90 53". */
export function displayPhone(e164: string): string {
  return e164.replace(/^\+33/, "0").replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}
