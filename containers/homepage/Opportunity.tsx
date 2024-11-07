import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
const OpportunitySection = ({
  title,
  image,
  data,
  style
}: {
  title: string;
  image: string;
  data: { title: string; description: string }[];
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className='flex flex-col items-start '
      style={{
        gap: '20px',
        ...style
      }}
    >
      <Image alt='img' src={image} width={400} height={100} />
      <h4
        style={{
          fontSize: '20px',
          textAlign: 'center'
        }}
      >
        {title}
      </h4>
      <Button
        variant='default'
        style={{
          width: 'fit-content',
          margin: 'auto'
        }}
      >
        Read More
      </Button>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            maxWidth: '500px',
            display: 'flex',
            gap: '5px',
            alignItems: 'flex-start'
          }}
        >
          <span
            style={{
              width: '16px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              background: '#FFCC00',
              color: '#fff',
              borderRadius: '100%',
              fontSize: '12px',
              marginTop: '5px'
            }}
          >
            0
          </span>
          <h4
            style={{
              fontSize: '16px',
              wordWrap: 'break-word'
            }}
          >
            {' '}
            <strong>{item.title}</strong> {item.description}
          </h4>
        </div>
      ))}
    </div>
  );
};
export default function Opportunity() {
  return (
    <div>
      <h2
        style={{
          fontWeight: 'normal',
          fontSize: '36px'
        }}
      >
        Going forward,
        <br /> we identified new opportunities and ideas.
      </h2>
      <div className='flex items-baseline justify-between gap-4'>
        <OpportunitySection
          title='Opportunities within Backstage'
          image='/images/findings-1.png'
          data={[
            {
              title: 'KNOWLEDGE BASE',
              description: 'Communication and Learning in a Knowledge Base.'
            },
            {
              title: 'AI',
              description:
                'New technology to build capabilities, for teams to foster better, and faster ideas, concepts and solutions for all products'
            },
            {
              title: 'Search',
              description:
                'Engineers want to make the search really good and easy for Engineers and Others to find relevant information.'
            },
            {
              title: 'Coding',
              description:
                'Coding and development. Create capabilities with a platform that gives talents what they need for consistent, high productivity work across all phases.'
            },
            {
              title: 'Coding',
              description:
                'Coding and development. Create capabilities with a platform that gives talents what they need for consistent, high productivity work across all phases.'
            },
            {
              title: 'Monitoring',
              description:
                'Future proofing of projects, with the use of metrics and incentives that consider lifecycle impacts, future opportunities and risks. '
            }
          ]}
        />
        <OpportunitySection
          style={{
            marginTop: '20px'
          }}
          title='Opportunities within the organisation'
          image='/images/findings-2.png'
          data={[
            {
              title: 'Innovation',
              description:
                'Promoting of innovation, building on Backstage, with templates, websites and other useful technology will fuel innovation.'
            },
            {
              title: 'Unified',
              description:
                'The opportunity to help developers to onboard, and get the ONE experience within H&M Group. It will help bridge the gap, getting Tech closer to the Business.'
            },
            {
              title: 'Ecosystem',
              description:
                'An ecosystem where developers can partner up, collaborate across multiple projects to maximize the end-to-end value.'
            },
            {
              title: 'Product',
              description:
                'Teams able to share insights on their products, for them to feel there is a place for their products in the Organisation.'
            },
            {
              title: 'Security',
              description:
                'Acesses, one place to order services, tools and improve IT-procurement. Gain access, enable spaces, project specific platforms.'
            },
            {
              title: 'Standardized ways',
              description:
                'A unified way of documenting, accessible for all, when needed to save and share information.'
            }
          ]}
        />
      </div>
    </div>
  );
}
