import { classNames } from '../../utils/common.utils';
import Image from 'next/image'
function Card({ title, desc, icon, link, isAnimateTop }) {
  return (
    <div
      className={classNames(
        'border rounded-xl p-7 cursor-pointer group',
        !isAnimateTop ? 'animate-in-view-top' : 'animate-in-view-bottom'
      )}
    >
      <h2 className='text-3xl font-bold mb-2.5'>{title}</h2>
      <p className='text-sm text-gray-500 mb-8'>{desc}</p>
      {/* line here */}
      <hr className='w-full h-1 bg-gray-200 mb-7 group-hover:bg-sky-700'></hr>
      <div className='flex justify-between items-center'>
        {/* icon here */}
        <Image src={icon} alt="image"/>
        {/* <PopupContactForm name='Get Started' /> */}
      </div>
    </div>
  );
}

export default Card;
