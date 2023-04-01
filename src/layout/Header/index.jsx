import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Popup from '../../components/Popup';
import { PopupContactForm } from '../../components/Forms/Contact';

import { classNames } from '../../utils/common.utils';

export default function Header() {

  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false }
  ]);

  function handleCurrentNavItem(navItem) {
    setNavigation(
      navigation.map((item) => {
        if (item.name === navItem.name) {
          return { ...item, current: true };
        } else {
          return { ...item, current: false };
        }
      })
    );
  }

  useEffect(() => {
    // if (location?.pathname === '/about') {
    //   handleCurrentNavItem(navigation[1]);
    // } else if (location?.pathname === '/') {
    //   handleCurrentNavItem(navigation[0]);
    // } else {
    //   //remove current class from all nav items
    //   setNavigation(
    //     navigation.map((item) => {
    //       return { ...item, current: false };
    //     })
    //   );
    // }
  }, []);

  return (
    <Disclosure as='nav' className='sticky top-0 bg-white'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 md:px-0'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-between sm:items-stretch'>
                <img className='block w-auto h-8' src={'/assets/logo.png'} alt='Data Field Consulting' />

                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4 '>
                    {navigation.map((item, index) => (
                      <>
                        {index === 1 && <Popup />}
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => handleCurrentNavItem(item)}
                          className={classNames(
                            item.current ? 'text-sky-700 font-bold' : 'hover:bg-sky-800 hover:text-white font-medium',
                            'rounded-md px-3 py-2 text-sm '
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
                {/* <button className='border-4 border-sky-700 hover:bg-sky-700 text-black hover:text-white px-3 py-2 text-sm font-medium hidden sm:block rounded-3xl'>
                  Contact Us
                </button> */}
                <div className='hidden sm:block'>
                  <PopupContactForm name='Contact Us' />
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item, index) => (
                <>
                  {index === 1 && <Popup />}
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    onClick={() => handleCurrentNavItem(item)}
                    className={classNames(
                      item.current ? 'bg-sky-700 text-white' : 'hover:bg-sky-800 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </>
              ))}
              <PopupContactForm name='Contact Us' />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
