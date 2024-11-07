import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function Research() {
  return (
    <div
      className='flex flex-col'
      style={{
        gap: '30px'
      }}
    >
      <Image
        alt='research image'
        src='/images/research.png'
        width={1400}
        height={100}
      />
      <div className='flex item-center justify-center gap-2'>
        <Button variant='default'>Research</Button>
        <Button variant='default'>Design</Button>
        <Button variant='default'>Development</Button>
      </div>
      <div className='flex flex-col'>
        <h3
          className='text-2xl text-center'
          style={{
            fontSize: '22px'
          }}
        >
          Our work on building deeper knowledge about our end users.{' '}
        </h3>
        <Button
          variant='link'
          style={{
            fontStyle: 'underline'
          }}
        >
          Explore Miro File
        </Button>
      </div>
      <div
        className='flex items-end justify-between'
        style={{
          gap: '30px'
        }}
      >
        <div className='flex flex-col gap-4 flex-1'>
          <Image
            alt='quote-img'
            src='/images/quote-abstractions.png'
            width={120}
            height={120}
          />
          <h2
            style={{
              fontSize: '25px',
              fontWeight: 600,
              fontFamily: 'inherit'
            }}
          >
            “Today, there is no single point where you go and get the stuff and
            the information that you are looking for.”
          </h2>
        </div>
        <div
          className='flex-1 flex flex-col items-baseline'
          style={{
            justifyContent: 'flex-end'
          }}
        >
          <h4>CoE Engineering</h4>
          <h4>Senior Software Engineer</h4>
        </div>
      </div>
    </div>
  );
}
