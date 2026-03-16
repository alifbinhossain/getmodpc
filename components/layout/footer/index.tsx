import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

import { Container } from '../container';
import { APPS_LINKS, QUICK_LINKS, SOCIAL_LINKS } from './footer-data';

// Paperclip / link icon for group titles
function LinkIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      aria-hidden='true'
    >
      <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
    </svg>
  );
}

// Info icon for Quick Links title
function InfoIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      aria-hidden='true'
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M12 16v-4M12 8h.01' />
    </svg>
  );
}

// ─── SiteFooter ───────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer
      className='text-white bg-center bg-no-repeat pt-16 pb-16 '
      aria-label='Site footer'
      style={{
        backgroundImage: "url('/images/footer-bg.png')",
      }}
    >
      <Container size={'xl'}>
        {/* ── 1. Top heading ─────────────────────────────────────────── */}
        <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-10 sm:mb-16'>
          Get started today
        </h2>

        {/* ── 2. Full-width logo ─────────────────────────────────────── */}
        <Link
          href='/'
          aria-label='GETMODPC home'
          className='block relative mb-8'
        >
          <Image
            src='/images/logo.webp'
            alt='GETMODPC'
            width={1440}
            height={329}
            className='w-full h-auto'
            priority
          />
        </Link>

        <Separator className='bg-white/15' />

        {/* ── 3. Links section ───────────────────────────────────────── */}
        <div className='flex flex-col gap-8 py-10 sm:flex-row sm:justify-between sm:items-start'>
          {/* Left group — Apps & Games */}
          <nav aria-labelledby='footer-apps-heading'>
            <div className='flex items-center gap-2 mb-3'>
              <LinkIcon />
              <h3
                id='footer-apps-heading'
                className='text-sm font-semibold text-white'
              >
                Apps &amp; Games
              </h3>
            </div>
            <ul className='flex flex-col gap-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2'>
              {APPS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right group — Quick Links */}
          <nav aria-labelledby='footer-quick-heading'>
            <div className='flex items-center gap-2 mb-3'>
              <InfoIcon />
              <h3
                id='footer-quick-heading'
                className='text-sm font-semibold text-white'
              >
                Quick Links
              </h3>
            </div>
            <ul className='flex flex-col gap-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2'>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── 4. Social + copyright ──────────────────────────────────── */}
        <Separator className='bg-white/15' />

        <div className='flex flex-col items-center gap-4 pt-8'>
          {/* Social icons row */}
          <div
            className='flex flex-wrap justify-center items-center gap-3 sm:gap-5'
            role='list'
            aria-label='Social media links'
          >
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                role='listitem'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40'
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className='text-xs text-white/50'>
            GETMODPC &copy; 2010 – {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
