
import SimpleCard from '../../components/SimpleCard';

function Section2() {
  const services = [
    {
      name: `Data Services`,
      description: `Our long list of data services includes Data Warehousing, Data Preparation, Data Architecture, and more.`,
      link: '/services/data-management'
    },
    {
      name: `Data Analytics`,
      description: `Data discovery, visualization, analytical reports, mobile analytics, embedded as well as predictive analytics.`,
      link: '/services/embedded-analytics'
    },
    {
      name: `Digital Transformation`,
      description: `From sound BI strategy, consulting practical solutions, & technical advice, to Project Management, training & support services.`,
      link: '/services/bi-modernization'
    },
    {
      name: `Visualizations & Design`,
      description: `The user interface, dashboards, UX design, Custom Visualizations, Infographics, and a lot more.`,
      link: '/services/tableau'
    }
  ];
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-y-10 md:border border-zinc-100 md:p-16 rounded-lg md:shadow'>
      {/* <div className='col-span-1 rounded-xl bg-blue-600 text-white py-10 px-6 bg-gradient-to-r from-sky-900 to-cyan-600'>
        <h1 className='text-4xl mb-6'>Our Working Process - How We Work For Our Customers</h1>
        <p className='mb-8'>
          We craft value-added solutions by marrying sound business intelligence with best-in-class data strategy and
          data management.
        </p>
        <Link
          to='/about'
          className='border-4 border-white hover:bg-white text-white hover:text-sky-700 px-3 py-2 text-sm font-medium rounded-3xl'
        >
          Learn More
        </Link>
      </div> */}

      <div className='grid md:grid-cols-2 grid-cols-1 col-span-2 gap-4 '>
        {services.map((service, index) => (
          <SimpleCard
            key={index}
            index={index + 1}
            title={service.name}
            desc={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Section2;
