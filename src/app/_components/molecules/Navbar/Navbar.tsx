'use client';
import clsx from 'clsx';
import { ThemeSwitch } from '../../atoms/ThemeSwitch';
import { useState } from 'react';
import { montserrat } from '@/app/fonts';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About Me',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'clients',
    title: 'Virtual Garden',
  },
  {
    id: 'clients',
    title: 'Contact',
  },
];

export const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar z-10 flex w-full flex-wrap items-center justify-between bg-transparent py-6">
      {/* Desktop Navigation */}
      <ul
        className={clsx(
          montserrat.className,
          'flex w-full  flex-1 list-none items-center justify-end text-xl font-semibold',
        )}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={clsx(
              `cursor-pointer text-[16px] text-[#003D2C] dark:text-dimWhite ${
                index === navLinks.length ? 'mr-0' : 'mr-10'
              }`,
              { 'font-bold': active === nav.title },
            )}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="mr-10">
          <ThemeSwitch />
        </li>
      </ul>

      {/* Mobile Navigation */}
      {/* <div className="flex flex-1 items-center justify-end sm:hidden"> */}

      <div className=" hidden flex-1 items-center justify-end">
        <img
          /*  src={toggle ? close : menu} */
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-start justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[16px] font-medium ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
