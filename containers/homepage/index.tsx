import Headers from '@/components/Headers';
import React from 'react';
import Hero from './Hero';
import Research from './Research';
import Findings from './Findings';
import Experience from './Experience';
import Opportunity from './Opportunity';
import Advancements from './Advancements';

export default function HomepageIndex() {
  return (
    <>
      <Headers />
      <Hero />
      <Research />
      <Findings />
      <Experience />
      <Opportunity />
      <Advancements />
    </>
  );
}
