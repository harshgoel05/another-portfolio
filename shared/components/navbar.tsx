import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'react-feather';
import { navlinks } from '@utils/constants';
import { PersonalDetails } from '@utils/types';
import { PersonalDetailsContext } from '@utils/contexts';

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a>
        <li
          className={`${
            router.pathname === href ? 'border-b-2 md:border-none' : ''
          } px-5 py-2 pt-1 md:pt-4`}>
          <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
            {title}
          </p>
          <img
            src="/images/vectors/nav_active.svg"
            alt="nav-active"
            className={router.pathname === href ? 'hidden md:block md:w-100' : 'hidden'}
          />
        </li>
      </a>
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  const { logo }: PersonalDetails = useContext(PersonalDetailsContext);

  const [isScreenScrolled, setisScreenScrolled] = useState(false);

  const addShadowtoNav = () => {
    if (window.scrollY >= 100) {
      setisScreenScrolled(true);
    } else {
      setisScreenScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addShadowtoNav);
    return () => {
      window.removeEventListener('scroll', addShadowtoNav);
    };
  }, []);
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div className={`${isScreenScrolled ? 'shadow-2xl' : ''} mx-auto bg-blue w-full fixed z-30`}>
      <nav className="block md:flex justify-between items-center p-2 pl-5">
        {/* Navbar Logo */}
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <img
                src={logo}
                alt="logo"
                className={`${
                  isScreenScrolled ? 'w-1/5 md:w-3/12' : 'w-16 md:w-2/5'
                } pl-30 my-2 transition-all transform hover:scale-75`}
              />
            </Link>
          </div>
          <div className="flex md:hidden mr-6">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}>
              <Menu size={18} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:block '}>
          {/* Navbar Items */}
          <ul className="md:flex md:flex-row pr-10 border-pink border-2 md:border-none">
            {navlinks.map((item) => {
              return <NavItem title={item.title} href={item.href} key={item.href} />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
