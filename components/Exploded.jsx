'use client';

import { useEffect, useRef, useState } from 'react';
import { layers } from '@/site.config';
import { ramp, useScroll } from '@/lib/useScroll';
import Sheet from './Sheet';
import './exploded.css';

const CAPTIONS = [
  ['One page.', 'It looks like a single thing. Scroll to take it apart.'],
  ['Turn it on its side.', 'A page is a stack. Each sheet does one job.'],
  ['Six layers.', 'Pick one to see what goes into it.'],
  ['Under the paint.', 'The same page as lines: the structure a browser reads.'],
  ['Back together.', 'You get all six, fitted, as one page that ships.'],
];

export default function Exploded() {
  const section = useRef();
  const view = useRef();
  const [step, setStep] = useState(0);
  const [wire, setWire] = useState(false);
  const [pick, setPick] = useState(null);

  useScroll(section, (p) => {
    const tilt = ramp(0.1, 0.28, p) * (1 - ramp(0.86, 0.97, p));
    const e = ramp(0.28, 0.5, p) * (1 - ramp(0.84, 0.95, p));
    view.current.style.setProperty('--tilt', tilt.toFixed(4));
    view.current.style.setProperty('--e', e.toFixed(4));
    view.current.style.setProperty('--p', p.toFixed(4));
    setWire(p > 0.68 && p < 0.9);
    setStep(p < 0.1 ? 0 : p < 0.3 ? 1 : p < 0.68 ? 2 : p < 0.88 ? 3 : 4);
    if (p < 0.3 || p > 0.68) setPick(null);
  });

  // keep the sheet a fixed share of the window, whatever its size
  useEffect(() => {
    const fit = () => {
      const narrow = window.innerWidth < 860;
      const s = Math.min(window.innerHeight / (narrow ? 1500 : 1020), window.innerWidth / (narrow ? 700 : 1500));
      view.current.style.setProperty('--fit', s.toFixed(4));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  const picked = layers.find((l) => l.id === pick);
  const [title, line] = CAPTIONS[step];
  const exploring = step === 2;

  return (
    <section className="exp" id="top" ref={section} aria-label="What a website is made of">
      <div className="exp-view" ref={view} data-wire={wire} data-pick={pick || undefined}>
        <div className="exp-scene" aria-hidden="true"><Sheet /></div>

        <div className="exp-copy" data-step={step}>
          <h1 key={picked ? picked.id : step}>{picked ? picked.name : title}</h1>
          <p>{picked ? picked.note : line}</p>
          {picked && (
            <ul className="exp-points">
              {picked.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          )}
          <ul className="exp-legend" data-show={exploring}>
            {layers.map((l, i) => (
              <li key={l.id}>
                <button type="button" aria-pressed={pick === l.id} onClick={() => setPick(pick === l.id ? null : l.id)} tabIndex={exploring ? 0 : -1}>
                  <span>{i + 1}</span>{l.name}
                </button>
              </li>
            ))}
          </ul>
          <a className="btn btn-accent exp-cta" data-show={step === 4} href="#contact" tabIndex={step === 4 ? 0 : -1}>Book a build</a>
        </div>

        <p className="exp-count" aria-hidden="true">{String(step + 1).padStart(2, '0')}<span>/05</span></p>
        <div className="exp-rail" aria-hidden="true" />
      </div>
    </section>
  );
}
