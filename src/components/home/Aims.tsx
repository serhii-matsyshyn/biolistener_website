import React from 'react';
import {Section} from '@site/src/components/ui/Section';
import type {AimsData} from '@site/src/data/home.types';

/** Short text block: what BioListener is building, why, what exists, what is next. */
export default function Aims({data}: {data: AimsData}): React.ReactElement {
  return (
    <Section heading={data.heading}>
      <div className="border-t border-line">
        <dl className="grid md:grid-cols-2 md:gap-x-12">
          {data.points.map((point, index) => (
            <div
              key={point.label}
              className={
                index === 0
                  ? 'py-6'
                  : index === 1
                    ? 'border-t border-line py-6 md:border-t-0'
                    : 'border-t border-line py-6'
              }>
              <dt className="font-mono text-[18px] font-bold leading-snug text-ink">{point.label}</dt>
              <dd className="mt-2.5 max-w-[34rem] text-[16px] leading-relaxed text-muted">{point.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
