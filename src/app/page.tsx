import Link from "next/link";
import { BookingLink } from "@/components/BookingLink";
import { Value } from "@/components/Value";
import {
  booking,
  caseStudies,
  method,
  services,
  site,
  tools,
} from "@/content/site";

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <header className="section__head">
      <span className="section__index">§{index}</span>
      <h2>{title}</h2>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <nav className="topbar">
        <span className="topbar__brand">{site.name}</span>
        <ul>
          <li><a href="#prestations">Prestations</a></li>
          <li><a href="#realisations">Réalisations</a></li>
          <li><a href="#methode">Méthode</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section className="hero">
          <p className="hero__meta">
            {site.owner} · {site.role}
          </p>
          <h1>{site.thesis}</h1>
          <p className="hero__tagline">{site.tagline}</p>
          <BookingLink />
        </section>

        <section id="prestations" className="section">
          <SectionHead index="1" title="Prestations" />
          <ol className="grid">
            {services.map((s) => (
              <li key={s.title} className="card">
                <h3>{s.title}</h3>
                <p className="card__label">Problème</p>
                <p className="card__problem">{s.problem}</p>
                <p className="card__label">Réponse</p>
                <p>{s.answer}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="realisations" className="section">
          <SectionHead index="2" title="Réalisations" />
          <p className="section__lede">
            Chaque cas prouve une chose que les autres ne prouvent pas, et indique son état réel.
          </p>
          {caseStudies.map((c, i) => (
            <article key={c.id} id={c.id} className="case">
              <header className="case__head">
                <span className="section__index">2.{i + 1}</span>
                <h3>{c.title}</h3>
                <span className="status">
                  État : <Value value={c.status} />
                </span>
              </header>
              <p className="case__proves">
                <span className="card__label">Ce que ce cas prouve</span> {c.proves}
              </p>
              <p className="card__label">Problème</p>
              <p className="case__problem">
                <Value value={c.problem} />
              </p>
              {c.body.map((b, j) => (
                <p key={j}>
                  <Value value={b} />
                </p>
              ))}
              {c.decisions && (
                <table className="decisions">
                  <thead>
                    <tr>
                      <th scope="col">Décision</th>
                      <th scope="col">Raison</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.decisions.map((d) => (
                      <tr key={d.decision}>
                        <td>{d.decision}</td>
                        <td>
                          <Value value={d.reason} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {c.measures && (
                <table className="decisions measures">
                  <thead>
                    <tr>
                      <th scope="col">Mesure</th>
                      <th scope="col">Périmètre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.measures.map((m) => (
                      <tr key={m.figure}>
                        <td className="measures__figure">{m.figure}</td>
                        <td>
                          {m.scope}
                          <span className="measures__source">Source : {m.source}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {c.stack && (
                <ul className="tags" aria-label="Architecture">
                  {c.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              {c.note && <p className="case__note">{c.note}</p>}
            </article>
          ))}
        </section>

        <section id="methode" className="section">
          <SectionHead index="3" title="Méthode" />
          <ol className="grid">
            {method.map((m, i) => (
              <li key={m.title} className="card">
                <p className="card__label">Principe {i + 1}</p>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <p className="card__label">La panne qui l&apos;a imposé</p>
                <p className="card__failure">{m.failure}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="outils" className="section">
          <SectionHead index="4" title="Outils" />
          <ul className="tags">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section section--contact">
          <SectionHead index="5" title="Contact" />
          <p>{booking.intro}</p>
          <p className="candor">{booking.candor}</p>
          <BookingLink />
        </section>
      </main>

      <footer className="footer">
        <span>
          {site.name} · {site.owner}
        </span>
        <Link href="/mentions-legales">Mentions légales</Link>
      </footer>
    </>
  );
}
