import React from 'react';

import { cn } from '@/lib/utils';

const GlassButton: React.FC<{
  className?: string;

  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className='button-wrap'>
      <button
        className={cn(
          'button',
          'font-medium! text-sm!  relative z-10 ',
          className
        )}
      >
        <span
          className={cn(
            'span',
            'flex! items-center! justify-between! gap-x-1! px-4! py-2.5!'
          )}
        >
          {children}
        </span>
      </button>
      <div className='button-shadow'></div>
    </div>
  );
};

export default GlassButton;
