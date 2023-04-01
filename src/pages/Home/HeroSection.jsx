import dataFieldImg from '../../../public/assets/datafield-1.svg';
import jiraLogo from '../../../public/assets/jira.svg';
import awsLogo from '../../../public/assets/aws.svg';
import azureLogo from '../../../public/assets/azure.svg';
import sqlLogo from '../../../public/assets/sql.svg';
import powerbiLogo from '../../../public/assets/powerbi.svg';
import tableau from '../../../public/assets/tableau.svg';
import alteryx from '../../../public/assets/alteryx.svg';
import js from '../../../public/assets/javascript-icon.svg';
import python from '../../../public/assets/python-icon.svg';
import snowflake from '../../../public/assets/snowflake-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
function HeroSection() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-0 md:gap-32 bg-sky-700 rounded-lg p-10'>
        <div>
          <h1 className='font-bold text-5xl mb-16 text-white'>Simplify the way you analyze your business</h1>
          <p className='my-10 text-lg leading-8 text-gray-300'>
            Data is the lifeblood of your business, but knowing what to do with it and unlocking its true potential may
            not be so simple. That's why we're here: to decipher the incomprehensible bits of data, so you can leverage
            its power to make better business decisions.
          </p>
          <Link
            href='/about'
            className='border-4 border-white hover:bg-white text-white hover:text-sky-700 px-3 py-2 text-sm font-medium my-6 rounded-3xl'
          >
            More About Us
          </Link>
        </div>
       <Image src={dataFieldImg} alt='image' className='w-full' />
      </div>
      <div>
        <h1 className='text-center font-bold text-4xl mb-20 text-gray-700'>Our Technology Expertise</h1>
        <div className='flex flex-wrap items-center justify-center gap-20 animate-in-view-top'>
          <Image src={azureLogo} alt='image' />
          <Image src={sqlLogo} alt='image' />
          <Image src={jiraLogo} alt='image' />
          <Image src={powerbiLogo} alt='image' />
          <Image src={snowflake} alt='image' />
          <Image src={tableau} alt='image' />
        </div>
        <div className='flex flex-wrap items-center justify-center gap-20 m-10 animate-in-view-bottom'>
          <Image src={js} alt='image' />
          <Image src={alteryx} alt='image' />
          <Image src={awsLogo} alt='image' />
          <Image src={python} alt='image' />
        </div>
      </div>
    </>
  );
}
export default HeroSection;
