const gallery = [
  {
    image: '/images/gallery-1.png',
    link: 'Read the Personas in Platform Engineering',
    desc: 'Personas We worked on the personas development process with asking develoepers to identify with Helena Lambda, Rohith Lundgren adn Roxana Cubernetes.'
  },
  {
    image: '/images/gallery-2.png',
    link: 'Go to the empathy map in Miro',
    desc: 'Empathy map We worked on the empathy map so that we can empathise with our users and build a deeper understanding of end users'
  },
  {
    image: '/images/gallery-2.png',
    link: 'Read the powerpoint',
    desc: 'Analysis. Key Pain points, Moments of Delights and Service inefficencies. What we found are the most important insights from our research.'
  },
  {
    image: '/images/gallery-1.png',
    link: 'Read the Personas in Platform Engineering',
    desc: 'Personas We worked on the personas development process with asking develoepers to identify with Helena Lambda, Rohith Lundgren adn Roxana Cubernetes.'
  },
  {
    image: '/images/gallery-2.png',
    link: 'Go to the empathy map in Miro',
    desc: 'Empathy map We worked on the empathy map so that we can empathise with our users and build a deeper understanding of end users'
  },
  {
    image: '/images/gallery-2.png',
    link: 'Read the powerpoint',
    desc: 'Analysis. Key Pain points, Moments of Delights and Service inefficencies. What we found are the most important insights from our research.'
  }
];
import Image from 'next/image';
import Link from 'next/link';
const Advancement = ({
  image,
  desc,
  link
}: {
  image: string;
  desc: string;
  link: string;
}) => {
  return (
    <div
      className='flex flex-col items-start gap-2'
      style={{
        minWidth: '300px'
      }}
    >
      <div className='flex flex-col gap-2'>
        <Image src={image} width={300} height={100} alt={desc} />
        <span
          style={{
            fontSize: '14px',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            textOverflow: 'ellipsis'
          }}
        >
          {desc}
        </span>
      </div>
      <Link
        href='/'
        style={{
          paddingLeft: '0 !important',
          fontSize: '12px',
          textDecoration: 'underline'
        }}
      >
        {link}
      </Link>
    </div>
  );
};
export default function Advancements() {
  return (
    <div
      className='w-full'
      style={{
        background: '#F3FFE2',
        padding: '36px'
      }}
    >
      <h2
        style={{
          fontSize: '26px',
          textAlign: 'left',
          lineHeight: 'normal'
        }}
      >
        We also did work on our UX deliverables
        <br /> building capabilities for further advancements.
      </h2>
      <div
        className='flex gap-4 items-center overflow-auto'
        style={{
          overflowX: 'auto',
          margin: '36px 0'
        }}
      >
        {gallery.map((item, index) => (
          <Advancement
            key={index}
            image={item.image}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
