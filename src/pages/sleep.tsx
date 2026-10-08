import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Contact from '@site/src/components/home/Contact';
import SignalBackground from '@site/src/components/home/SignalBackground';
import {Badge} from '@site/src/components/ui/Badge';
import {ButtonLink, PendingButton} from '@site/src/components/ui/Button';
import {Card} from '@site/src/components/ui/Card';
import {IconTile} from '@site/src/components/ui/Icon';
import {Container, Section} from '@site/src/components/ui/Section';
import {home} from '@site/src/data/home';
import {sleep} from '@site/src/data/sleep';

// Short landing page for BioListener Sleep. All text comes from
// src/data/sleep.ts.
export default function SleepPage(): React.ReactElement {
  const {hero, how, highlights, note} = sleep;
  const image = useBaseUrl(hero.image.src);
  return (
    <Layout title={sleep.meta.title} description={sleep.meta.description}>
      <div className="bl-page relative overflow-x-clip">
        <SignalBackground />
        <section className="relative z-[1] py-14 sm:py-20" aria-labelledby="sleep-title">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
              <div className="bl-quiet min-w-0">
                <Badge tone="accent">{hero.status}</Badge>
                <h1 id="sleep-title" className="mt-6 text-balance text-[34px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[52px]">
                  {hero.title}
                </h1>
                <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-muted">{hero.subline}</p>
                {/* Stage and scope, directly under the claim it qualifies. */}
                <p className="mt-5 max-w-xl border-l-4 border-accent pl-4 text-[14.5px] leading-relaxed text-muted">{note}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/sleep#contact">{hero.contactAction}</ButtonLink>
                  <PendingButton>{hero.pendingAction}</PendingButton>
                </div>
              </div>
              <img
                src={image}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                className="bl-photo-plain w-full min-w-0"
              />
            </div>
          </Container>
        </section>

        <Section heading={{id: how.id, eyebrow: how.eyebrow, title: how.title, lead: how.lead}}>
          {/* One numbered row joined by a thin line: it reads as a loop, not four boxes. */}
          <ol className="grid gap-x-8 gap-y-8 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {how.steps.map((step, index) => (
              <li key={step.title} className="relative pt-6">
                <span className="absolute -top-px left-0 h-0.5 w-12 bg-accent" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[15px] font-bold text-accent">{index + 1}</span>
                  <h3 className="text-[17px] font-bold leading-snug text-ink">{step.title}</h3>
                </div>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section heading={{id: highlights.id, eyebrow: highlights.eyebrow, title: highlights.title}}>
          <ul className="grid gap-4 md:grid-cols-3">
            {highlights.items.map((item) => (
              <Card as="li" soft key={item.title} className="p-5">
                <div className="flex items-center gap-3">
                  <IconTile name={item.icon} />
                  <h3 className="min-w-0 text-base font-bold leading-snug text-ink">{item.title}</h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </Card>
            ))}
          </ul>
        </Section>

        <Contact data={home.contact} />
      </div>
    </Layout>
  );
}
