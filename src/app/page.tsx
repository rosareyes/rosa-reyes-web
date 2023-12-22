/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { pacifico, poppings, inter, ntr } from './fonts';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import clsx from 'clsx';
import { motion, useCycle, useScroll, useTransform } from 'framer-motion';
import { ThemeSwitch } from './components/atoms/ThemeSwitch/ThemeSwitch';
import { Navbar } from './components/molecules/Navbar/Navbar';
import { useRouter } from 'next/navigation';
import ExperienceCard from './components/molecules/Cards/Experience';
import { useEffect, useRef } from 'react';
import Subtitle from './components/atoms/ThemeSwitch/Subtitle/Subtitle';
import ExperienceTabs from './components/molecules/ExperienceTabs/ExperienceTabs';
import { ProfileImage } from './components/atoms/ProfileImage/ProfileImage';

export default function Home() {
  const router = useRouter();
  console.log(router);

  const containerRef = useRef(null);

  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden bg-[#F7F2FF] dark:bg-blue-500">
      <Navbar />
      <img
        className="absolute left-0 top-0 z-0 h-auto w-full opacity-40 dark:hidden"
        src="/hero-light-bg.png"
        alt="bg"
      />
      <img
        className="absolute left-0 top-0 z-0 hidden h-auto w-full opacity-60 dark:block"
        src="/hero-dark-bg.png"
        alt="bg"
      />

      <div className="flex items-center justify-center text-center lg:min-h-[calc(100vh-200px)] lg:px-24">
        <div className="relative flex flex-col place-items-center py-24 text-[#025a4e] transition-colors">
          <h1 className="m-0">
            <span
              style={{
                fontSize: 'clamp(4.2rem, .5692rem + 8.238vw, 15rem)',
              }}
              className={clsx(
                inter.className,
                'block font-bold leading-none dark:text-blue-100 lg:leading-normal',
              )}
            >
              Hi, it&apos;s{' '}
              <span className="underline underline-offset-8 dark:decoration-orange-100">
                Rosa
              </span>
              .
            </span>
          </h1>
          <h2
            className={clsx(
              'block text-lg dark:text-blue-200 lg:text-3xl',
              ntr.className,
            )}
          >
            I&apos;m a computer science student & software engineer based in
            Madrid.
          </h2>
          <div className="mt-4 flex flex-row gap-4 text-center">
            <a href="https://www.linkedin.com/in/rosaareyesc/" target="_blank">
              <FaLinkedinIn className="h-6 w-6 dark:text-blue-200  dark:hover:text-orange-100" />
            </a>
            <a href="https://github.com/rosareyes" target="_blank">
              <FaGithub className="h-6 w-6 dark:text-blue-200 dark:hover:text-orange-100" />{' '}
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01bcf3b51bb38b47a8"
              target="_blank"
            >
              <SiUpwork className="h-6 w-6 dark:text-blue-200 dark:hover:text-orange-100" />{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="selector w-full py-9 text-center dark:bg-gradient-to-b  dark:from-blue-500 dark:via-blue-500 dark:to-blue-500 lg:py-24">
        <div className="mt-12 grid w-full grid-cols-1 justify-center justify-items-center gap-1 px-[15%] py-14 text-center lg:grid-cols-2">
          <div className="col-span-1 flex w-full flex-col text-left text-[#025a4e] transition-colors">
            <Subtitle subtitle="about me" />
            <span
              className={clsx(
                inter.className,
                'max-w-xl text-lg font-normal dark:text-blue-200',
              )}
            >
              I&apos;m a passionate software enthusiast in Madrid, on a mission
              to shape the digital landscape. My tools? A{' '}
              <span className="italic">really</span> loud keyboard and my trusty
              cup of coffee 👩‍💻☕
              <br /> <br />
              By day, I&apos;m a part-time{' '}
              <span className="text-blue-100">
                Computer Science and Engineering student
              </span>{' '}
              at <a className="text-blue-100 underline">UC3M</a> and
              <span className="text-blue-100"> Frontend Engineer </span>at{' '}
              <a className="text-blue-100 underline">Stylib</a>, crafting code
              that brings interfaces to life. By night, you&apos;ll often find
              me rocking out at music concerts.
            </span>
          </div>
          <ProfileImage containerRef={containerRef} />
        </div>
      </div>
      <div className="flex w-full px-[15%] pb-12 pt-8" id="experience">
        <div className="flex  flex-col">
          <Subtitle subtitle="experience" />
          <ExperienceTabs />
        </div>
      </div>
      <div className="flex w-full px-[15%] py-12" id="projects">
        <div className="flex  flex-col">
          <Subtitle subtitle="projects" />

          <div className="-mx-2 flex flex-wrap pb-4 md:-mx-4">
            <div className="flex w-full px-2 pb-4 md:w-1/3 md:px-4 md:pb-0">
              <ExperienceCard
                title="Rosa Reyes Web"
                stack={
                  <p>
                    HTML · CSS · Material UI · Javascript · ReactJS · NodeJS
                  </p>
                }
              />
            </div>
            <div className="flex w-full px-2 pb-4 md:w-1/3 md:px-4 md:pb-0">
              <ExperienceCard
                title="Brooklyn Burger Web"
                stack={
                  <p>
                    HTML · CSS · Material UI · Javascript · ReactJS · NodeJS
                  </p>
                }
              />
            </div>
            <div className="flex w-full px-2 md:w-1/3 md:px-4">
              <ExperienceCard
                title="Best Event Landing Page"
                stack={
                  <p>
                    HTML · CSS · Material UI · Javascript · ReactJS · NodeJS
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-[15%] py-12" id="garden">
        <div className="flex  flex-col">
          <Subtitle subtitle="🌻virtual garden🌼" />
        </div>
      </div>
      <div className="px-24 py-14 text-center">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </main>
  );
}
