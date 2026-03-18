// footer-data.ts  (renamed from .tsx — no JSX in this file)
//
// FIX: JSX removed from data file entirely.
// Previously SOCIAL_LINKS contained inline <svg> JSX elements. This forced:
//   1. The file to use .tsx extension
//   2. React to be in scope
//   3. The data module to be treated as a component module by bundlers
//
// Icons are now expressed as pure path/attribute data. The rendering of <svg>
// belongs in a component (social-icons.tsx), not in a data constant.
// This also makes the data file trivially testable without a React environment.

// ─── Types ────────────────────────────────────────────────────────────────────

export interface IFooterLink {
  readonly label: string;
  readonly href: string;
}

export interface ISocialLink {
  readonly label: string;
  readonly href: string;
  /** Lucide icon name or a custom identifier resolved in the icon component. */
  readonly icon: SocialIconId;
  readonly color: string;
}

export type SocialIconId = 'facebook' | 'youtube' | 'telegram' | 'whatsapp';

// ─── Navigation data ──────────────────────────────────────────────────────────

export const APPS_LINKS: ReadonlyArray<IFooterLink> = [
  { label: 'Android', href: '/android' },
  { label: 'Windows', href: '/windows' },
  { label: 'Apple', href: '/apple' },
] as const;

export const QUICK_LINKS: ReadonlyArray<IFooterLink> = [
  { label: 'About Us', href: '/about' },
  { label: 'Advertiser', href: '/advertiser' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
] as const;

export const SOCIAL_LINKS: ReadonlyArray<ISocialLink> = [
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: 'youtube',
    color: '#ff0000',
  },
  {
    label: 'Telegram',
    href: 'https://t.me',
    icon: 'telegram',
    color: '#00a1dc',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: 'facebook',
    color: '#0080fe',
  },
  {
    label: 'Whatsapp',
    href: 'https://whatsapp.com',
    icon: 'whatsapp',
    color: '#32d952',
  },
] as const;
