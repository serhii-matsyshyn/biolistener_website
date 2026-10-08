import React from 'react';
import {Mail} from 'lucide-react';
import {ButtonLink} from '@site/src/components/ui/Button';
import {Container, useAnchor} from '@site/src/components/ui/Section';
import type {ContactData} from '@site/src/data/home.types';

export default function Contact({data}: {data: ContactData}): React.ReactElement {
  useAnchor(data.id);
  return (
    <section id={data.id} aria-labelledby={`${data.id}-title`} className="relative z-[1] scroll-mt-20 pb-12 pt-2 sm:pb-16 sm:pt-4">
      <Container>
        <div className="border-t border-line pt-10 text-center sm:pt-12">
          <h2 id={`${data.id}-title`} className="text-balance text-[26px] font-bold leading-tight tracking-tight text-ink sm:text-[34px]">
            {data.title}
          </h2>
          {data.text && <p className="mx-auto mt-4 max-w-[38rem] text-[17px] leading-relaxed text-muted">{data.text}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${data.email}`}>
              <Mail size={17} aria-hidden="true" />
              {data.email}
            </ButtonLink>
            {data.actions?.map((action) => (
              <ButtonLink key={action.label} href={action.href} variant={action.variant ?? 'secondary'}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
