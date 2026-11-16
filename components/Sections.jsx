import { projects, site, steps } from '@/site.config';
import BookingForm from './BookingForm';
import './sections.css';

const two = (n) => String(n).padStart(2, '0');

// Everything after the page has been put back together: the work, how a build goes, and how to start one.
export default function Sections() {
  return (
    <>
      <section className="block work" id="work">
        <header className="block-head">
          <h2>Pages we have built this way.</h2>
          <p>Each one starts from a single idea. These are concept builds: open any of them and scroll.</p>
        </header>
        <ul className="work-grid">
          {projects.map((p, i) => {
            const body = (
              <>
                <img src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" width="1024" height="640" />
                <div className="work-text">
                  <h3>{p.name}</h3>
                  <p>{p.line}</p>
                  <span>{p.kind}</span>
                </div>
              </>
            );
            return (
              <li key={p.id} className={i === 0 ? 'work-wide' : undefined}>
                {p.url ? <a href={p.url} target="_blank" rel="noreferrer">{body}</a> : <div>{body}</div>}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="block process" id="process">
        <header className="block-head">
          <h2>From first call to live, in days.</h2>
        </header>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.name}>
              <span>{two(i + 1)}</span>
              <h3>{s.name}</h3>
              <p>{s.line}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="block contact" id="contact">
        <div className="contact-copy">
          <h2>Tell us what you are launching.</h2>
          <p>{site.price ? `Landing pages ${site.price}.` : 'One fixed price, quoted on the first call.'} You get all six layers, fitted, and the code is yours.</p>
          <p className="contact-links">
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            {site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">{site.instagramHandle}</a>}
          </p>
        </div>
        <BookingForm />
      </section>

      <footer className="foot">
        <span>{site.name}</span>
        <span>Websites, designed and shipped.</span>
        <a href="#top">Back to the top</a>
      </footer>
    </>
  );
}
