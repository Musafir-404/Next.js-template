
import { classNames } from '../../utils/common.utils';

import { PopupContactForm } from '../../components/Forms/Contact';
function Section1() {
  return (
    <div className='bg-wave-pattern bg-no-repeat bg-cover md:h-screen px-4 py-16 sm:p-0 '>
      <div className='mx-auto max-w-2xl py-30 sm:py-48 lg:py-50'>
        <div className='text-left sm:text-center animate-fade-in'>
          <h1
            className={classNames(
              `text-4xl font-bold text-gray-900 sm:text-6xl animate-fade-in`
            )}
          >
            Todays Data. Tomorrows <span className='text-sky-700'>Decision</span>.
          </h1>
          <p className='mt-10 text-lg leading-8 text-gray-600 '>
            Data is the lifeblood of your business, but knowing what to do with it and unlocking its true potential may
            not be so simple. That's why we're here: to decipher the incomprehensible bits of data, so you can leverage
            its power to make better business decisions.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <PopupContactForm name='Get Started' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
