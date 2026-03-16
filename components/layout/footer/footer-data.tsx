// ─── Data ────────────────────────────────────────────────────────────────────

export const APPS_LINKS = [
  { label: 'Android', href: '/android' },
  { label: 'Windows', href: '/windows' },
  { label: 'Apple', href: '/apple' },
] as const;

export const QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Advertiser', href: '/advertiser' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
] as const;

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-5 w-5'
        aria-hidden='true'
      >
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-5 w-5'
        aria-hidden='true'
      >
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-5 w-5'
        aria-hidden='true'
      >
        <path d='M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-5 w-5'
        aria-hidden='true'
      >
        <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
        <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-5 w-5'
        aria-hidden='true'
      >
        <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.947l-2.968-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.896.612z' />
      </svg>
    ),
  },
] as const;
