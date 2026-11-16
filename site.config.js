// Everything specific to the business lives here. Leave a value as null to hide that part of the site.
export const site = {
  name: 'ship.aesthetics',
  // Full address once deployed, e.g. 'https://shipaesthetics.com'. Used for link previews and the sitemap.
  url: null,
  email: 'priyansh10work@gmail.com',
  instagram: 'https://instagram.com/ship.aesthetics',
  instagramHandle: '@ship.aesthetics',
  // A form endpoint that accepts a JSON POST (Formspree, Basin, your own API). With null the form opens the visitor's email app.
  formEndpoint: null,
  // e.g. 'from $900'. With null the page says the price is quoted on the call.
  price: null,
};

// The six sheets a page is made of, bottom to top.
export const layers = [
  { id: 'grid', name: 'Grid', note: 'Twelve columns. Everything on the page lines up to them.', points: ['Holds from a phone to a 4K screen', 'Spacing on one scale, so nothing looks nudged', 'Checked at every width, not just three'] },
  { id: 'images', name: 'Images', note: 'Rendered or shot for the page. No stock photos.', points: ['3D renders and product shots made for you', 'Cut and compressed so the page loads fast', 'Described in text for people who cannot see them'] },
  { id: 'type', name: 'Type', note: 'One display face, one text face, one scale.', points: ['Headlines sized to the screen, never clipped', 'Body text you can read for a full page', 'Your copy edited, not pasted in'] },
  { id: 'ui', name: 'Buttons', note: 'Every control has a hover, a focus and a pressed state.', points: ['Works from the keyboard', 'Big enough to hit with a thumb', 'Says what it does: "Book a build", not "Submit"'] },
  { id: 'motion', name: 'Motion', note: 'Scroll and hover timing, tuned by hand.', points: ['Moves when it explains something', 'Smooth on a mid-range phone', 'Switched off for visitors who ask for less motion'] },
  { id: 'code', name: 'Code', note: 'Next.js, written by hand, handed over to you.', points: ['Yours to keep and change', 'Deployed on your domain', 'No page builder, no lock-in'] },
];

export const projects = [
  { id: 'yard', name: 'The Shipping Yard', kind: 'Concept', line: 'A 3D container yard you walk through, one project per container.', image: '/work/yard.jpg', url: null },
  { id: 'blank', name: 'From Blank to Shipped', kind: 'Concept', line: 'A page that starts with no styles and builds itself as you scroll.', image: '/work/blank.jpg', url: null },
  { id: 'twelve', name: 'Twelve Hours', kind: 'Concept', line: 'A clock you can drag through a twelve-hour build.', image: '/work/twelve.jpg', url: null },
  { id: 'parcel', name: 'The Parcel', kind: 'Concept', line: 'A website that arrives in a box with your name on the label.', image: '/work/parcel.jpg', url: null },
  { id: 'boat', name: 'The Paper Boat', kind: 'Concept', line: 'Write an idea on paper and watch it fold into a boat and sail.', image: '/work/boat.jpg', url: null },
];

export const steps = [
  { name: 'Brief', line: 'A 30-minute call about your product and your launch date.' },
  { name: 'Concept', line: 'A working page you can click through, within 12 hours of the call.' },
  { name: 'Build', line: 'Coded by hand, animated, tested on real phones.' },
  { name: 'Ship', line: 'Live on your domain. Every line of code is yours.' },
];
