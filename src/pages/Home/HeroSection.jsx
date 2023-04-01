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
          Your Business challenges are unique to you. Your Solution should be as well. 
          Let&apos;s partner with you to yield successful outcomes with the right tools and solutions. 
          For over 10 years, clients have turned to us, a professional IT & Data Consulting Agency
          &nbsp;that&apos;s ready to deliver tailored solutions on time.
          </p>
          <Link
            href='/about'
            className='border-4 border-white hover:bg-white text-white hover:text-sky-700 px-3 py-2 text-sm font-medium my-6 rounded-3xl'
          >
            More About Us
          </Link>
        </div>
        <Image src={dataFieldImg} alt='image' className='w-full' width='345' height='320'/>
      </div>
      <div>
        <h1 className='text-center font-bold text-4xl mb-20 text-gray-700'>Our Technology Expertise</h1>
        <div className='flex flex-wrap items-center justify-center gap-20 animate-in-view-top'>
          <Image src={azureLogo} alt='azurelogo' width='116' height='34' />
          <Image src={sqlLogo} alt='sqllogo' width='98' height='116'/>
          <Image src={jiraLogo} alt='jiralogo' width='116' height='34'/>
          <Image src={powerbiLogo} alt='powerbilogo' width='120' height='60'/>
          <Image src={snowflake} alt='snowflake' width='120' height='60'/>
          <Image src={tableau} alt='tableau' width='150' height='90'/>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-20 m-10 animate-in-view-bottom'>
          <Image src={js} alt='js.logo' width='101' height='101'/>
          <Image src={alteryx} alt='alteryx' width='108' height='33'/>
          <Image src={awsLogo} alt='awslogo' width='150' height='150'/>
          <Image src={python} alt='python' width='101' height='100'/>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
