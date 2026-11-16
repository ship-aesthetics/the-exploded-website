'use client';

import { useState } from 'react';
import { site } from '@/site.config';
import './form.css';

// Sends to site.formEndpoint when one is set. Otherwise it opens the visitor's own email app
// with the message filled in, and says so, rather than pretending something was sent.
export default function BookingForm() {
  const [state, setState] = useState('idle'); // idle | sending | sent | error | mail

  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (site.formEndpoint) {
      setState('sending');
      try {
        const res = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        setState(res.ok ? 'sent' : 'error');
      } catch {
        setState('error');
      }
      return;
    }
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nWhat I'm launching:\n${data.launch}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Build enquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`;
    setState('mail');
  };

  if (state === 'sent') return <p className="form-done" role="status">Got it. You will hear back within a day.</p>;

  return (
    <form className="form" onSubmit={submit}>
      <label>Name<input name="name" type="text" autoComplete="name" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>What are you launching?<textarea name="launch" rows={4} required /></label>
      <button className="btn btn-accent" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending' : 'Book a build'}</button>
      <p className="form-note" role="status">
        {state === 'error' && `That did not send. Write to ${site.email} instead.`}
        {state === 'mail' && 'Your email app should have opened with the message ready to send.'}
        {state === 'idle' && (site.formEndpoint ? 'A reply within a day.' : 'Opens your email app with the message filled in.')}
      </p>
    </form>
  );
}
