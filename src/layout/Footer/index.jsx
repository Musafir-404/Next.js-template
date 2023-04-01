import twitter from '../../../public/assets/twitter.svg';
import facebook from '../../../public/assets/facebook.svg';
import linkedin from '../../../public/assets/linkedin.svg';
import arrow from '../../../public/assets/arrow.svg';
import logo from '../../../public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  const company = ['Feed', 'Help'];
  const solutions = ['Startups', 'Investors', 'Hubs', 'Policy Makers', 'Research'];
  const information = ['Privacy Policy', 'Terms & Conditions'];

  const footerItems = [
    //{ name: 'Company', item: company },
    //{ name: 'Solutions', item: solutions },
    { name: 'Information', item: information }
  ];
  return (
    <div className='py-10 group '>
      <div className='mx-auto max-w-7xl px-2 md:px-0 py-12 '>
        <hr className='w-full h-1 bg-gray-200 mb-10 group-hover:bg-sky-700'></hr>
        <div className='grid md:grid-cols-2 md:gap-3 gap-8'>
          {footerItems.map((content, index) => (
            <div key={index} className='flex flex-col md:gap-1'>
              <h2 className='text-base font-bold mb-1 text-gray-600'>{content.name}</h2>
              {content?.item?.map((item, index) => (
                <div className='text-base' key={index}>
                  <Link
                    href={
                      //remove space and & from the string
                      //`/${item.replace(/\s/g, '').replace('&', '')}`
                      `/`
                    }
                    className='hover:text-sky-700 hover:font-bold cursor-pointer
                   text-gray-500'
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          ))}
          {/*  */}
          <div className='bg-sky-700 rounded-lg'>
            <div className='flex flex-col p-8'>
              <h3 className='font-bold text-white'>Subscribe</h3>
              <div className='my-4 flex'>
                <input
                  type='email'
                  placeholder='Email address'
                  className='focus:outline-none focus:text-gray-900 p-2 w-full'
                />
                <button className='bg-sky-900 py-2 px-2 '>
                  <Image src={arrow} alt='image' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5 justify-between items-center mt-16'>
          <Image className='block w-auto h-8' src={logo} alt='Datafield' />

          <span className='text-gray-500 text-sm'>© 2021 Datafield. All rights reserved.</span>
          <div className='flex gap-5 justify-end'>
            <a href='#'>
              <Image src={linkedin} alt='image' />
            </a>
            <a href='#'>
            <Image src={facebook} alt='image' />
            </a>
            <a href='#'>
            <Image src={twitter} alt='image' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
