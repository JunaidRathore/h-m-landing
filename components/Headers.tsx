import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

export default function Headers() {
  return (
    <div className='flex items-center justify-between gap-4 py-2 w-full'>
      <Image src='/images/logo.jpeg' alt='logo' width={80} height={60} />
      <div className='flex items-center gap-4'>
        <Button variant='outline'>EC Team </Button>
        <Button>Go to Blackspace </Button>
      </div>
    </div>
  );
}
