import React from 'react';
import Link from '@docusaurus/Link';
import {ArrowRight, ArrowUpRight, Clock} from 'lucide-react';
import {cn} from '@site/src/lib/cn';

export type ButtonVariant = 'primary' | 'secondary';

const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-[15px] font-semibold leading-tight transition-colors duration-150';

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-accent-solid bg-accent-solid !text-white hover:border-[#9a1e09] hover:bg-[#9a1e09] hover:no-underline',
  secondary: 'border-line bg-surface !text-ink hover:border-accent hover:!text-accent hover:no-underline',
};

const isExternal = (href: string) => /^(https?:)?\/\//.test(href);

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

/** A link styled as a button. Internal, anchor, mailto and external URLs all work. */
export function ButtonLink({href, variant = 'primary', className, children}: ButtonLinkProps): React.ReactElement {
  const external = isExternal(href);
  return (
    <Link to={href} className={cn(base, variants[variant], className)}>
      {children}
      {external ? (
        <ArrowUpRight size={16} aria-hidden="true" />
      ) : href.startsWith('mailto:') ? null : (
        <ArrowRight size={16} aria-hidden="true" />
      )}
    </Link>
  );
}

/**
 * Looks like a button but is not one: used for things that are not available
 * yet ("GitHub: will be published soon"). It has no URL and is not focusable.
 */
export function PendingButton({className, children}: {className?: string; children: React.ReactNode}): React.ReactElement {
  return (
    <span
      aria-disabled="true"
      className={cn(
        base,
        'cursor-not-allowed select-none border-dashed border-faint bg-surface-2 text-muted',
        className,
      )}>
      <Clock size={16} aria-hidden="true" />
      {children}
    </span>
  );
}
