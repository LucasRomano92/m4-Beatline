import React from 'react'
import NavItem from './nav-item';
import { GiHamburgerMenu } from "react-icons/gi";
import { LuKeyboardMusic } from 'react-icons/lu';
import { NavLinks } from '@/constants/navLinks';
import { routes } from '@/routes';

const Navbar = () => {
  return (
  <>
   

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <a href={routes.home}
     className="flex items-center space-x-3 rtl:space-x-reverse">
      <LuKeyboardMusic size={30} className='h-12 text-primary-300' />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Beatline</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <GiHamburgerMenu />
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {NavLinks.map((link) => (
        <NavItem key={link.href} href={link.href} label={link.label} />
      ))}
      </ul>
    </div>
  </div>
</nav>

  </>

  );
};

export default Navbar;