import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className='w-full flex items-center justify-between lg:flex-row  gap-4'>
      <div className='flex flex-col items-start gap-4 w-full'>
        <h1>
          Research, Analysis <br /> & Findings
        </h1>
        <p>
          Engineeering Culture, our work on User Research for H&M and <br />
          Backstage.
        </p>
        <Button className='w-fit'>Read more about research</Button>
      </div>
      <div className='w-full flex items-center justify-center'>
        <Image
          alt='banner-image'
          width={400}
          height={400}
          src='/images/banner-abstractions.png'
        />
      </div>
    </div>
  );
}
