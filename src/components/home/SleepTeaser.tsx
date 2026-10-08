import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Clock} from 'lucide-react';
import {Badge} from '@site/src/components/ui/Badge';
import {ButtonLink} from '@site/src/components/ui/Button';
import {Icon} from '@site/src/components/ui/Icon';
import {Container, useAnchor} from '@site/src/components/ui/Section';
import type {SleepTeaserData} from '@site/src/data/home.types';

/** Highlighted band that links to the /sleep page. */
export default function SleepTeaser({data}: {data: SleepTeaserData}): React.ReactElement {
  useAnchor(data.id);
  const image = useBaseUrl(data.image?.src ?? '/');
  return (
    <section id={data.id} aria-labelledby={`${data.id}-title`} className="relative z-[1] scroll-mt-20 py-10 sm:py-14">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-10 md:grid-cols-[1fr_auto]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-solid text-white">
                <Icon name="moon" />
              </span>
              {data.status && <Badge tone={data.status.tone}>{data.status.label}</Badge>}
            </div>
            <h2 id={`${data.id}-title`} className="mt-5 text-[26px] font-bold leading-tight tracking-tight text-ink sm:text-[34px]">
              {data.title}
            </h2>
            {data.text && <p className="mt-4 max-w-[38rem] text-[17px] leading-relaxed text-muted">{data.text}</p>}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink href={data.link.href}>{data.link.label}</ButtonLink>
              {data.soonLabel && (
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
                  <Clock size={15} aria-hidden="true" />
                  {data.soonLabel}
                </span>
              )}
            </div>
          </div>
          {data.image && (
            <img
              src={image}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              loading="lazy"
              className="bl-photo-plain w-full max-w-sm md:w-[22rem]"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
