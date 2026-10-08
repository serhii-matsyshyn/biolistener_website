import React from 'react';
import {cn} from '@site/src/lib/cn';

export type BadgeTone = 'accent' | 'neutral';

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}

/** Small status chip, e.g. "Research stage". */
export function Badge({tone = 'neutral', className, children}: BadgeProps): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider',
        tone === 'accent' ? 'border-accent/30 bg-accent-soft text-accent' : 'border-line bg-surface-2 text-muted',
        className,
      )}>
      <span
        className={cn('h-1.5 w-1.5 rounded-full', tone === 'accent' ? 'bg-accent' : 'bg-faint')}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
