import Image from 'next/image';
import React from 'react';

export default function Findings() {
  return (
    <div className='my-6'>
      <Image
        alt='findings'
        src='/images/research-findings.png'
        width={1400}
        height={100}
      />
      <div
        className='flex items-center justify-between gap-4'
        style={{
          marginTop: '2rem'
        }}
      >
        <div className='w-full'>
          <Image alt='stars' src='/images/stars.PNG' width={440} height={100} />
        </div>
        <div className='flex flex-col gap-3'>
          <h2
            style={{
              fontSize: '25px',
              fontWeight: 600,
              fontFamily: 'inherit'
            }}
          >
            This thing, it can be that it catches my attention and it
            being automatically updated from other sources. I would like to see
            captured trends and those anomalies and changes. I would love it,
            with some AI into it.​
          </h2>
          <div className='flex items-start justify-between'>
            <div
              className='flex-1 flex flex-col items-baseline'
              style={{
                justifyContent: 'flex-end'
              }}
            >
              <h4>CoE Engineering</h4>
              <h4>Senior Software Engineer</h4>
            </div>
            <Image
              alt='quote-img'
              src='/images/quote-abstractions.png'
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
