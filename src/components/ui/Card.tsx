import React from 'react';
import {cn} from '@site/src/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'li' | 'article' | 'figure';
  /** Borderless surface with a faint shadow. */
  soft?: boolean;
}

/**
 * Nearly opaque surface with a thin border. Deliberately no backdrop blur:
 * blur over the moving signal background is expensive.
 */
export function Card({as = 'div', soft = false, className, ...rest}: CardProps): React.ReactElement {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={cn('rounded-xl bg-surface', soft ? 'shadow-[0_1px_3px_rgba(0,0,0,0.07)]' : 'border border-line', className)}
      {...rest}
    />
  );
}
