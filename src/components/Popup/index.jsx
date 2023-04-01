import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { classNames } from '../../utils/common.utils';
import Image from 'next/image';

const solutions = [
  {
    name: 'Tableau Services',
    description: 'Create quick and simple data visualizations',
    href: '/services/tableau',
    icon: IconOne
  },
  {
    name: 'BI Modernization',
    description: 'Transform from being more technology-centric to more user-centric',
    href: '/services/bi-modernization',
    icon: IconTwo
  },
  {
    name: 'Embedded Analytics',
    description: 'Keep track of your growth',
    href: '/services/embedded-analytics',
    icon: IconThree
  },
  {
    name: 'Data Management',
    description: 'Analyze your data and make better decisions.',
    href: '/services/data-management',
    icon: IconFour
  },
  {
    name: 'Staffing Augmentation',
    description: 'Build apps and dashboards for managing your employees.',
    href: '/services/staffing-augmentation',
    icon: IconFive
  }
];

export default function Popup() {
  const [isHere, setIsHere] = useState(false);

  useEffect(() => {
    // if (location?.pathname !== '/' && location?.pathname !== '/about') {
    //   setIsHere(true);
    // } else {
    //   setIsHere(false);
    // }
  }, []);
  return (
    <div className='w-full max-w-sm px-0 py-0 md:px-3'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md hover:bg-sky-700 px-3 py-2 text-base font-medium hover:text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span
                className={classNames(`text-sm hover:text-white ${isHere ? 'text-sky-700 font-bold' : 'font-medium'}`)}
              >
                Services
              </span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5  transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                  <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                      >
                        <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
                          <item.icon aria-hidden='true' />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-900'>{item.name}</p>
                          <p className='text-sm text-gray-500'>{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* <div className='bg-gray-50 p-4'>
                    <a
                      href='##'
                      className='flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <span className='flex items-center'>
                        <span className='text-sm font-medium text-gray-900'>Documentation</span>
                      </span>
                      <span className='block text-sm text-gray-500'>Start integrating products and tools</span>
                    </a>
                  </div> */}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#0369a1' />
      <path d='M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z' stroke='#ffffff' strokeWidth='2' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z'
        stroke='#ffffff'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z'
        stroke='#ffffff'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#0369a1' />
      <path
        d='M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27'
        stroke='#ffffff'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.804 30H29.1963L24.0001 21L18.804 30Z'
        stroke='#d4d4d8'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#0369a1' />
      <rect x='13' y='32' width='2' height='4' fill='#e4e4e7' />
      <rect x='17' y='28' width='2' height='8' fill='#e4e4e7' />
      <rect x='21' y='24' width='2' height='12' fill='#e4e4e7' />
      <rect x='25' y='20' width='2' height='16' fill='#e4e4e7' />
      <rect x='29' y='16' width='2' height='20' fill='#fff' />
      <rect x='33' y='12' width='2' height='24' fill='#fff' />
    </svg>
  );
}

function IconFour() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#0369a1' />
      <path d='M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z' stroke='#ffffff' strokeWidth='2' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.804 30H29.1963L24.0001 19L18.834 30Z'
        stroke='#d4d4d8'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconFive() {
  return (
    <div
      style={{
        backgroundColor: '#0369a1'
      }}
      className='flex items-center justify-center rounded-md p-1'
    >
      <Image src={'/staffing-icon.png'} alt='staffing icon' width={48} height={48} />
    </div>
  );
}
