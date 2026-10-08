import React from 'react';
import Link from '@docusaurus/Link';
import {ArrowUpRight, Clock} from 'lucide-react';
import {Badge} from '@site/src/components/ui/Badge';
import {Card} from '@site/src/components/ui/Card';
import {IconTile} from '@site/src/components/ui/Icon';
import {Section} from '@site/src/components/ui/Section';
import type {CardLinkData, EcosystemData} from '@site/src/data/home.types';

function CardLink({link}: {link: CardLinkData}): React.ReactElement {
  if (link.kind === 'soon') {
    // Not available yet: plain text, no URL, not focusable.
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-faint">
        <Clock size={15} aria-hidden="true" />
        {link.label}
      </span>
    );
  }
  return (
    <Link
      to={link.href}
      className="inline-flex items-center gap-1 text-sm font-semibold !text-accent hover:underline">
      {link.label}
      <ArrowUpRight size={15} aria-hidden="true" />
    </Link>
  );
}

export default function Ecosystem({data}: {data: EcosystemData}): React.ReactElement {
  return (
    <Section heading={data.heading}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card) => (
          <Card as="li" soft key={card.title} className="flex flex-col p-5">
            <div className="flex items-center gap-3">
              <IconTile name={card.icon} />
              <h3 className="min-w-0 text-base font-bold leading-snug text-ink">{card.title}</h3>
            </div>
            {card.text && <p className="mt-3 text-[15px] leading-relaxed text-muted">{card.text}</p>}
            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-5">
              <CardLink link={card.link} />
              {card.status && <Badge tone={card.status.tone}>{card.status.label}</Badge>}
            </div>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
