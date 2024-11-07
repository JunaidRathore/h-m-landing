const data = [
  {
    title: 'Growth',
    description:
      'Those whose foremost core need is growth are always striving to be better and learn more. Engineers whose foremost core need is growth are always striving to be better and learn more.'
  },
  {
    title: 'Certainty',
    description:
      'A high need for certainty is how some of us feel psychologically safe. Engineers need to feel safe to speak their minds. Whether they have concerns, ideas, questions or make mistakes, they trust themselves and the situation enough to say their piece.'
  },
  {
    title: 'Identity',
    description:
      'This is an awareness or a sense of self in relation to others and the rest of the world. Their experiences are valuable, those that create their sense of self.'
  },
  {
    title: 'Safety and Security',
    description:
      'Those needs that are associated with the need to feel safe and secure in life and the environment. Engineers prioritize their need for safety and security.'
  },
  {
    title: 'Contribution',
    description:
      "The secret to living is giving, those that experience contribution as one of their top 6 human needs. Developers want to put in time in Backstage, but they haven't because they don't feel it's the highest priority right now."
  }
];
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function Experience() {
  return (
    <div
      className='w-full'
      style={{
        background: 'rgba(203, 159, 210, 0.1)',
        padding: '36px'
      }}
    >
      <h2
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          textAlign: 'left',
          lineHeight: 'normal'
        }}
      >
        We Explored Developers Experience’s <br />
        <span
          style={{
            fontWeight: 'normal'
          }}
        >
          and identified 5 core values.
        </span>
      </h2>
      <div
        className='my-5'
        style={{
          maxWidth: '500px',
          margin: '36px 0'
        }}
      >
        <h4
          style={{
            fontSize: '16px'
          }}
        >
          <strong
            style={{
              fontSize: '18px'
            }}
            className='flex items-center gap-2'
          >
            {' '}
            <ArrowRight /> Core needs and value
          </strong>
          By talking with our Engineers we where able to identify common values
          and needs.
          <br />
          <Button
            variant='link'
            className='!underline pl-0'
            style={{
              paddingLeft: '0 !important'
            }}
          >
            Learn More
          </Button>
        </h4>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}
      >
        {data.map((item, index) => (
          <div key={index} style={{ maxWidth: '500px' }}>
            <h4 style={{ fontSize: '16px', wordWrap: 'break-word' }}>
              <strong>{item.title}</strong> {item.description}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
