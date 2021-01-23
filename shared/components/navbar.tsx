import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'react-feather';

const Navbar = (): JSX.Element => {
  // const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const router = useRouter();
  return (
    <div className="container mx-auto bg-blue w-full fixed">
      <nav className="block md:flex justify-between items-center p-2 pl-5">
        {/* Navbar Logo */}
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <img
                src="/images/logo-light.svg"
                alt="e"
                className="pl-30 my-2 cursor-pointer  w-1/5 md:w-2/5"
              />
            </Link>
          </div>
          <div className="flex md:hidden mr-6">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              onClick={() => setShowMobileNav(!showMobileNav)}>
              <Menu size={16} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? 'block' : 'hidden md:block'}>
          {/* Navbar Items */}
          <ul className="md:flex md:flex-row pr-10 text-white font-bold ">
            <li
              className={`${
                router.pathname === '/explore' ? 'border-b-2' : ''
              } px-5 pb-1 cursor-pointer`}>
              <Link href="/explore">
                <p className="cursor-pointer transition duration-500 ease-in-out">Explore</p>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === '/work' ? ' border-b-2' : ''
              } px-5 pb-1 cursor-pointer`}>
              <Link href="/work">
                <p className="cursor-pointer transition duration-500 ease-in-out">Work</p>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === '/projects' ? ' border-b-2' : ''
              } px-5 pb-1 cursor-pointer`}>
              <Link href="/projects">
                <p className="cursor-pointer transition duration-500 ease-in-out">Projects</p>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === '/contact' ? ' border-b-2' : ''
              } px-5 pb-1 cursor-pointer`}>
              <Link href="/contact">
                <p className="cursor-pointer transition duration-500 ease-in-out">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
