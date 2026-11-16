import './sheet.css';

// The page that gets taken apart: the ship.aesthetics home page, built as six real sheets
// stacked in 3D. `--e` (0..1) on a parent sets how far apart they are.
export default function Sheet() {
  return (
    <div className="sheet">
      <div className="ply ply-base" style={{ '--i': 0 }} />
      <div className="ply ply-grid" data-l="grid" style={{ '--i': 1 }}>
        {[...Array(12)].map((_, i) => <i key={i} />)}
        <b className="tag">1 Grid</b>
      </div>
      <div className="ply ply-images" data-l="images" style={{ '--i': 2 }}>
        <img src="/work/yard.jpg" alt="" className="im-a" />
        <img src="/work/parcel.jpg" alt="" className="im-b" />
        <img src="/work/boat.jpg" alt="" className="im-c" />
        <b className="tag">2 Images</b>
      </div>
      <div className="ply ply-type" data-l="type" style={{ '--i': 3 }}>
        <span className="t-logo">ship.aesthetics</span>
        <span className="t-nav">Work&nbsp;&nbsp; Process&nbsp;&nbsp; Contact</span>
        <span className="t-h">Websites that stop the scroll.</span>
        <span className="t-p">Launch pages, product sites and scroll stories for startups.</span>
        <span className="t-s">A working concept in 12 hours</span>
        <b className="tag">3 Type</b>
      </div>
      <div className="ply ply-ui" data-l="ui" style={{ '--i': 4 }}>
        <span className="u-a">Book a build</span>
        <span className="u-b">See the work</span>
        <span className="u-c" />
        <b className="tag">4 Buttons</b>
      </div>
      <div className="ply ply-motion" data-l="motion" style={{ '--i': 5 }}>
        <svg viewBox="0 0 620 800" aria-hidden="true">
          <path d="M60 520 C 200 520, 220 300, 400 300" />
          <path d="M400 300 l-14 -6 m14 6 l-12 10" />
          <path d="M60 640 C 180 560, 300 720, 560 600" strokeDasharray="6 8" />
          <circle cx="60" cy="520" r="7" /><circle cx="400" cy="300" r="7" />
          <rect x="330" y="96" width="254" height="150" rx="10" strokeDasharray="6 8" />
          <path d="M457 96 v-40 m-10 12 l10 -12 l10 12" />
        </svg>
        <b className="tag">5 Motion</b>
      </div>
      <div className="ply ply-code" data-l="code" style={{ '--i': 6 }}>
        <pre>{`<main class="page">
  <h1>Websites that stop
      the scroll.</h1>
  <a class="cta" href="#contact">
    Book a build
  </a>
</main>

.page  { display: grid;
         grid-template-columns:
           repeat(12, 1fr); }
.cta   { background: var(--accent); }
h1     { animation: rise .9s both; }`}</pre>
        <b className="tag">6 Code</b>
      </div>
    </div>
  );
}
