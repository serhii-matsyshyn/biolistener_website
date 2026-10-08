import React from 'react';
import Layout from '@theme/Layout';
import Aims from '@site/src/components/home/Aims';
import Contact from '@site/src/components/home/Contact';
import Ecosystem from '@site/src/components/home/Ecosystem';
import Hero from '@site/src/components/home/Hero';
import SignalBackground from '@site/src/components/home/SignalBackground';
import SleepTeaser from '@site/src/components/home/SleepTeaser';
import {home} from '@site/src/data/home';

// Homepage: hero, aims, ecosystem, Sleep, contact. All text comes from src/data/home.ts.
export default function Home(): React.ReactElement {
  return (
    <Layout title={home.meta.title} description={home.meta.description}>
      <div className="bl-page relative overflow-x-clip">
        <SignalBackground />
        <Hero data={home.hero} />
        <Aims data={home.aims} />
        <Ecosystem data={home.ecosystem} />
        <SleepTeaser data={home.sleepTeaser} />
        <Contact data={home.contact} />
      </div>
    </Layout>
  );
}
