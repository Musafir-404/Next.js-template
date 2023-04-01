// import { ReactComponent as Dolloite } from '../../assets/dolloite.svg';
// import { ReactComponent as Discover } from '../../assets/discover.svg';
// import { ReactComponent as Exxon } from '../../assets/exxon.svg';
// import { ReactComponent as Kpmg } from '../../assets/kpmg.svg';
// import { ReactComponent as Target } from '../../assets/target.svg';

export default function Partners() {
  const partnerLogos = [<img src={'/assets/maine-pointe.png'} width={'150'} alt='x' />];
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
          <div key={index}>{logo}</div>
        ))}
      </div>
    </div>
  );
}
