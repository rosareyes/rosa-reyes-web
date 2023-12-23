'use client';
import clsx from 'clsx';

import { useState } from 'react';
import { montserrat } from '@/app/fonts';
import ThemeSwitch from '../../atoms/ThemeSwitch';

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
    id: 'garden',
    title: 'Virtual Garden',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const Navbar = () => {
  const [active, setActive] = useState('Home');

  return (
    <nav className="navbar z-10 hidden flex-wrap items-end justify-center bg-transparent px-6 lg:fixed lg:right-0 lg:top-1/2 lg:flex lg:-translate-y-2/4 lg:translate-x-0">
      <ul
        className={clsx(
          montserrat.className,
          'flex flex-1 list-none items-end justify-end text-xl font-medium lg:flex-col',
        )}
      >
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={clsx(
              `cursor-pointer text-[16px] text-[#003D2C] dark:text-slate-200`,
              { 'font-bold': active === nav.title },
            )}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="mt-2">
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
};
