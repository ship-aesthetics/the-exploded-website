import Exploded from '@/components/Exploded';
import Sections from '@/components/Sections';
import { site } from '@/site.config';

export default function Page() {
  return (
    <>
      <header className="nav">
        <a className="nav-logo" href="#top">{site.name}</a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Book a build</a>
        </nav>
      </header>
      <main>
        <Exploded />
        <Sections />
      </main>
    </>
  );
}
