'use client';

import Link from 'next/link';

import { App } from '@/lib/types';
import { cn } from '@/lib/utils';

import AppCardInfo from './app-card-info';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AppCardProps {
  app: App;
  className?: string;
  showVersion?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AppCard({ app, className }: AppCardProps): React.JSX.Element {
  return (
    <Link
      href={`/app/${app.id}`}
      className={cn('glass-card-effect-wrapper', className)}
    >
      <button className='glass-card'>
        <AppCardInfo app={app} />
      </button>
      <div className='glass-card-shadow'></div>
    </Link>
  );
}
