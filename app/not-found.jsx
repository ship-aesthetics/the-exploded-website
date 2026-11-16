import Link from 'next/link';

export const metadata = { title: 'Not found | ship.aesthetics' };

export default function NotFound() {
  return (
    <main className="lost">
      <h1>A layer is missing.</h1>
      <p>There is no page at this address.</p>
      <Link className="btn btn-accent" href="/">Back to the page</Link>
    </main>
  );
}
