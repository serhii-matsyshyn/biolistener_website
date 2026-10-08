import React from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {cn} from '@site/src/lib/cn';

export interface SectionHeadingData {
  /** Anchor id of the section, e.g. "ecosystem" gives /#ecosystem. */
  id: string;
  /** Small label above the title. */
  eyebrow?: string;
  title: string;
  /** Paragraph under the title. */
  lead?: string;
}

interface SectionProps {
  heading: SectionHeadingData;
  className?: string;
  children: React.ReactNode;
}

export function Container({className, children}: {className?: string; children: React.ReactNode}): React.ReactElement {
  return <div className={cn('mx-auto w-full max-w-page px-4 sm:px-8', className)}>{children}</div>;
}

/** Registers the id with Docusaurus so that links to /#id pass the broken-anchor check. */
export function useAnchor(id: string): void {
  useBrokenLinks().collectAnchor(id);
}

/** Standard homepage section: anchor id, consistent heading and spacing. */
export function Section({heading, className, children}: SectionProps): React.ReactElement {
  useAnchor(heading.id);
  return (
    <section
      id={heading.id}
      aria-labelledby={`${heading.id}-title`}
      className={cn('relative z-[1] scroll-mt-20 py-14 sm:py-20', className)}>
      <Container>
        <header className="mb-10 max-w-3xl sm:mb-12">
          {heading.eyebrow && (
            <p className="mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
              {heading.eyebrow}
            </p>
          )}
          <h2
            id={`${heading.id}-title`}
            className="text-balance text-[26px] font-bold leading-tight tracking-tight text-ink sm:text-[34px]">
            {heading.title}
          </h2>
          {heading.lead && <p className="mt-4 max-w-[40rem] text-[17px] leading-relaxed text-muted">{heading.lead}</p>}
        </header>
        {children}
      </Container>
    </section>
  );
}
