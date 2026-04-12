// Invented content for a concept redesign — not a real address, not real hours.

export const visit = {
  name: 'The Taproom',
  addressLines: ['410 Kingsley Street', 'Asbury Park, NJ 07712'],
  coords: { lat: 40.2206, lng: -74.0121 },
  phone: '(732) 555 — 0144',
  email: 'taproom@ap-brewery.concept',
  hours: [
    { d: 'Mon', t: 'Closed' },
    { d: 'Tue', t: '4:00 — 10:00 PM' },
    { d: 'Wed', t: '4:00 — 10:00 PM' },
    { d: 'Thu', t: '4:00 — 11:00 PM' },
    { d: 'Fri', t: '3:00 PM — 12:00 AM' },
    { d: 'Sat', t: '12:00 PM — 12:00 AM' },
    { d: 'Sun', t: '12:00 — 9:00 PM' },
  ],
}

export const events = [
  {
    id: 'e-01',
    date: { d: '19', m: 'APR' },
    title: 'Cask Night — Boardwalk Static on Firkin',
    tag: 'Taproom',
    copy: 'A single 10.8-gallon cask, pulled by hand, poured until it is gone. No keepsakes, no reservations.',
  },
  {
    id: 'e-02',
    date: { d: '03', m: 'MAY' },
    title: 'Vinyl &amp; Vienna — Spring Listening Session',
    tag: 'Collab',
    copy: 'Local shop spins side-one/side-one of records you owned in high school. Lager pairs itself.',
  },
  {
    id: 'e-03',
    date: { d: '22', m: 'MAY' },
    title: 'Brewer&rsquo;s Walk — Kingsley to the Kegging Line',
    tag: 'Tour',
    copy: 'Ninety minutes with the head brewer, three taproom exclusives, and a can to take home. Limit 14.',
  },
]

export const nav = [
  { label: 'Beer', href: '#lineup' },
  { label: 'Visit', href: '#visit' },
  { label: 'Story', href: '#story' },
  { label: 'Events', href: '#events' },
]
