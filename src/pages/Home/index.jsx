import Section1 from './Section1';
import Section2 from './Section2';
import Industries from './Industries';
import HeroSection from './HeroSection';
import Partners from './Partners';

import { useEffect } from 'react';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Section1 />
      <div className='mx-auto max-w-7xl flex flex-col gap-32 md:gap-44 px-2 sm:px-0'>
        <HeroSection />
        <Section2 />
        {/* <Industries /> */}
        <Partners />
      </div>
    </>
  );
}

export default Home;
