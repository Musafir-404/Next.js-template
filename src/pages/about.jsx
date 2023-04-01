import { useEffect } from 'react';
export default function About() {
  const items = [
    {
      title: 'What we do',
      description: `We specialize in data analytics, strategy & architecture, predictive modeling, business intelligence, and strategy development. 
      We work with clients across a wide range of industries, from small startups to large corporations, helping them leverage their data to make informed decisions and drive positive results.`
    },
    {
      title: 'Our approach',
      description: `We believe that data is only valuable when used effectively. That's why we take a comprehensive approach to data analytics starting with identifying the right data sources and creating a strong data infrastructure. 
      We then analyze the data to uncover insights and trends that can support your business strategies and develop actionable plans based on these insights.`
    },
    {
      title: 'Our values',
      description: `Our commitment to excellence has earned us a reputation as one of the leading data analytics and strategy consulting firms in the industry. 
      We pride ourselves on our ability to deliver customized solutions that meet the unique needs of each client, and our track record of success speaks for itself.`
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='md:bg-wave-pattern bg-no-repeat bg-cover grid place-items-center px-2 mb:px-0 mt-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-2xl lg:mx-0 bg-sky-700 rounded-lg p-10'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Stimulating success with the power of data
          </h2>

          <p className='mt-5 text-md text-gray-300'>
            Datafield Analytics LLC is a data analytics company that serves businesses across the country with the
            expertise to analyze and simplify their data so that they can make informed data-driven decisions that are
            key to business success. Our organization was founded over ten years ago with the notion of utilizing data
            to drive decision-making and optimize business strategies.
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {items.map((item, index) => (
            <div key={index} className='flex max-w-xl flex-col items-start justify-between'>
              <div className='group '>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  {item.title}
                </h3>
                <p className='mt-5 text-sm leading-6 text-gray-600 line-clamp-3'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
