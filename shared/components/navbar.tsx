import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = (): JSX.Element => {
  return (
    <div className="container mx-auto ">
      <nav className="flex justify-between items-center p-2 pl-5">
        <div>
          <Image
            src="/images/logo-light.svg"
            alt="me"
            width="70"
            height="75"
            className="object-right pl-30"
          />
        </div>
        <ul className="flex flex-row pr-10 text-white">
          <li className="pr-5">
            <Link href="/explore"> Explore </Link>
          </li>
          <li className="pr-5">
            <Link href="/projects"> Projects </Link>
          </li>
          <li className="pr-5">
            <Link href="/work"> Work </Link>
          </li>
          <li>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
