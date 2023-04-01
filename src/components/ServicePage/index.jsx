import { useEffect } from 'react';
import Image from 'next/image';

function ServicePage({ title, desc, img, tagline, cards }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-0 flex flex-col items-center justify-center mt-16'>
      <h1 className='font-bold text-5xl'>{title}</h1>
      <p className='my-10 text-lg leading-8 text-gray-500'>{desc}</p>
      <Image src={img} alt={title} className='my-10' />
      <h2 className='my-20 text-xl leading-8 text-gray-500 text-center max-w-4xl'>{tagline}</h2>
      <div className={`grid md:grid-cols-4 grid-cols-1 gap-4`}>
        {cards?.map((card, index) => (
          <div
            key={index}
            className='flex flex-col justify-between rounded-xl bg-blue-600 text-white py-10 px-6 bg-gradient-to-r from-sky-900 to-cyan-600'
          >
            <h3 className='text-2xl mb-6'>{card?.title}</h3>
            <p className='mb-8'>{card?.desc}</p>
            <button className='border-4 border-white hover:bg-white text-white hover:text-sky-700 px-3 py-2 text-sm font-medium my-6 rounded-3xl'>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
