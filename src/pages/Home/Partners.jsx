import dolloite from '../../../public/assets/dolloite.svg';
import discover from '../../../public/assets/discover.svg';
import exxon from '../../../public/assets/exxon.svg';
import kpmg from '../../../public/assets/kpmg.svg';
import target from '../../../public/assets/target.svg';
import mainpoint from '../../../public/assets/maine-pointe.png';
import Image from 'next/image';

export default function Partners() {
  const partnerLogos = [dolloite, discover, exxon, kpmg, target, mainpoint];
  return (
    <div className='p-5 animate-in-view-top'>
      <h1 className='text-center font-bold text-4xl mb-16 text-gray-700'>PARTNERS & TRUSTED CLIENTS</h1>
      <p className='my-10 text-lg leading-8 text-gray-500 text-center'>
        No matter the industry or how large your market footprint is, if you have a technology related problem we would
        love to hear from you. <br></br>
        We have operated with a vide variety of industries and fields.
      </p>
      <div className='flex flex-wrap justify-center items-center w md:gap-x-20 gap-x-5'>
        {partnerLogos.map((logo, index) => (
          <Image key={index} src={logo} alt='image' />
        ))}
      </div>
    </div>
  );
}
