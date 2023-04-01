// import { ReactComponent as DataFieldImg } from '../../assets/datafield-1.svg';
// import { ReactComponent as JiraLogo } from '../../assets/jira.svg';
// import { ReactComponent as AwsLogo } from '../../assets/aws.svg';
// import { ReactComponent as AzureLogo } from '../../assets/azure.svg';
// import { ReactComponent as SqlLogo } from '../../assets/sql.svg';
// import { ReactComponent as PowerbiLogo } from '../../assets/powerbi.svg';
// import { ReactComponent as Tableau } from '../../assets/tableau.svg';
// import { ReactComponent as Alteryx } from '../../assets/alteryx.svg';
// import { ReactComponent as Js } from '../../assets/javascript-icon.svg';
// import { ReactComponent as Python } from '../../assets/python-icon.svg';
// import { ReactComponent as Snowflake } from '../../assets/snowflake-icon.svg';
import Link from "next/link";
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
        {/* <DataFieldImg className='w-full' /> */}
      </div>
      <div>
        <h1 className='text-center font-bold text-4xl mb-20 text-gray-700'>Our Technology Expertise</h1>
        <div className='flex flex-wrap items-center justify-center gap-20 animate-in-view-top'>
          {/* <AzureLogo />
          <SqlLogo />
          <JiraLogo />
          <PowerbiLogo />
          <Snowflake />
          <Tableau /> */}
        </div>
        <div className='flex flex-wrap items-center justify-center gap-20 m-10 animate-in-view-bottom'>
          {/* <Js />
          <Alteryx />
          <AwsLogo />
          <Python /> */}
        </div>
      </div>
    </>
  );
}
export default HeroSection;
