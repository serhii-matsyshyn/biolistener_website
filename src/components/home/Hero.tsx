import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ButtonLink} from '@site/src/components/ui/Button';
import {Card} from '@site/src/components/ui/Card';
import {Container} from '@site/src/components/ui/Section';
import type {HeroData} from '@site/src/data/home.types';

/** Prints `accent` (an exact substring of `text`) in the accent colour. */
function Headline({text, accent}: {text: string; accent?: string}): React.ReactElement {
  const at = accent ? text.indexOf(accent) : -1;
  if (!accent || at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="text-accent-solid">{accent}</span>
      {text.slice(at + accent.length)}
    </>
  );
}

export default function Hero({data}: {data: HeroData}): React.ReactElement {
  const logo = useBaseUrl(data.logo.src);
  const logoDark = useBaseUrl(data.logoDark?.src ?? data.logo.src);
  const photo = useBaseUrl(data.photo.src);
  return (
    <section className="relative z-[1] pb-12 pt-8 sm:pb-16 sm:pt-10" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="min-w-0">
            {/* Logo */}
            <img
              src={logo}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height}
              className={data.logoDark ? 'mb-5 w-full max-w-[280px] dark:hidden' : 'mb-5 w-full max-w-[280px]'}
            />
            {data.logoDark && (
              <img
                src={logoDark}
                alt={data.logoDark.alt}
                width={data.logoDark.width}
                height={data.logoDark.height}
                className="mb-7 hidden w-full max-w-[280px] dark:block"
              />
            )}
            <div className="bl-quiet">
              <h1
                id="hero-title"
                className="text-balance text-[32px] font-bold leading-[1.14] tracking-tight text-ink sm:text-[40px] lg:text-[40px] xl:text-[46px]">
                <Headline text={data.headline} accent={data.headlineAccent} />
              </h1>
              {/* A "\n" in the sub-line starts a new line. */}
              <p className="mt-4 max-w-[44rem] whitespace-pre-line text-[17px] leading-relaxed text-muted">{data.subline}</p>
            </div>
            {/* Phones: the photo comes straight after the sub-line, outside the calm
                patch, so the moving traces stay visible around and behind the board. */}
            <img src={photo} alt={data.photo.alt} width={data.photo.width} height={data.photo.height} className="bl-photo-cutout mt-6 w-full lg:hidden" />
            <div className="bl-quiet">
              {/* The signal types, big. Stays inside the calm patch. */}
              <ul className="mt-6 grid max-w-[620px] grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {data.signals.map((signal) => (
                  <li key={signal.abbr} className="min-w-0 border-t-2 border-accent-solid pt-2.5">
                    <span className="block font-mono text-[32px] font-bold leading-none tracking-tight text-ink sm:text-[36px]">
                      {signal.abbr}
                    </span>
                    <span className="mt-1.5 block whitespace-nowrap text-[14px] leading-snug text-muted">{signal.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {data.actions.map((action) => (
                <ButtonLink key={action.label} href={action.href} variant={action.variant}>
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </div>
          {/* One big photo, no frame: a cut-out with a soft shadow. */}
          <div className="hidden min-w-0 lg:block">
            <img
              src={photo}
              alt={data.photo.alt}
              width={data.photo.width}
              height={data.photo.height}
              className="bl-photo-cutout w-full"
            />
          </div>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-3 lg:mt-8 lg:grid-cols-4">
          {data.stats.map((stat) => (
            <Card key={stat.value + stat.label} className="flex flex-col-reverse justify-end px-4 py-3.5">
              <dt className="mt-1 text-[13px] leading-snug text-muted">{stat.label}</dt>
              <dd className="font-mono text-[22px] font-bold leading-tight tabular-nums text-ink sm:text-2xl">
                {stat.value}
              </dd>
            </Card>
          ))}
        </dl>
      </Container>
    </section>
  );
}
