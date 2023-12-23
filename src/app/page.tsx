'use client';
import { useRef } from 'react';
import { inter, ntr } from './fonts';
import React from 'react';
import clsx from 'clsx';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

import { Navbar } from './components/molecules/Navbar/Navbar';
import { useRouter } from 'next/navigation';
import ProjectCard from './components/molecules/Cards/Project';
import Subtitle from './components/atoms/Subtitle';
import ExperienceTabs from './components/molecules/ExperienceTabs';
import { ProfileImage } from './components/atoms/ProfileImage/ProfileImage';
import { projects } from '../../data/profile';

export default function Home() {
  const router = useRouter();

  const containerRef = useRef(null);

  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden bg-[#f7f2ff] dark:bg-blue-500">
      <Navbar />
      <img
        className="absolute left-0 top-0 z-0 hidden h-auto w-full opacity-40 md:block dark:md:hidden"
        src="/hero-light-bg.png"
        alt="bg"
      />
      <img
        className="absolute left-0 top-0 z-0 hidden h-auto w-full opacity-60 md:block dark:md:block"
        src="/hero-dark-bg.png"
        alt="bg"
      />

      <div
        className="flex items-center justify-center px-4 text-center lg:min-h-[calc(100vh-100px)] lg:px-24 2xl:min-h-[calc(100vh-200px)]"
        id={'home'}
      >
        <div className="relative flex flex-col place-items-center py-20 text-green-450 transition-colors lg:py-24">
          <h1 className="m-0 mb-4 2xl:mb-6">
            <span
              className={clsx(
                inter.className,
                'block text-6xl font-bold dark:text-blue-100 md:text-8xl md:leading-none lg:leading-normal 2xl:text-9xl',
              )}
            >
              Hi,
              <br className="block lg:hidden" /> it&apos;s{' '}
              <span className="underline underline-offset-8 dark:decoration-orange-100">
                Rosa
              </span>
              .
            </span>
          </h1>
          <h2
            className={clsx(
              'block text-xl dark:text-blue-200 lg:text-3xl',
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
      <div className="selector w-full pb-6 pt-9 text-center dark:bg-gradient-to-b  dark:from-blue-500 dark:via-blue-500 dark:to-blue-500 2xl:py-24">
        <div
          className="grid w-full grid-cols-1 justify-center justify-items-center gap-1 px-[10%] py-10 text-center lg:mt-12 lg:grid-cols-2 lg:py-14 2xl:px-[15%]"
          id={'about'}
        >
          <div className="col-span-1 flex w-full flex-col text-left text-green-450 transition-colors">
            <Subtitle subtitle="about me" />

            <span
              className={clsx(
                inter.className,
                'text-md max-w-xl font-normal dark:text-blue-200 lg:text-lg',
              )}
            >
              I&apos;m a passionate software enthusiast in Madrid, on a mission
              to shape the digital landscape. My tools? A{' '}
              <span className="italic">really</span> loud keyboard and my trusty
              cup of coffee 👩‍💻☕
              <br /> <br />
              By day, I&apos;m a part-time{' '}
              <span className="text-green-500 dark:text-blue-100">
                Computer Science and Engineering student
              </span>{' '}
              at{' '}
              <a className="text-green-500 underline dark:text-blue-100">
                UC3M
              </a>{' '}
              and
              <span className="text-green-500 dark:text-blue-100">
                {' '}
                Frontend Engineer{' '}
              </span>
              at{' '}
              <a className="text-green-500 underline dark:text-blue-100">
                Stylib
              </a>
              , crafting code that brings interfaces to life. By night,
              you&apos;ll often find me rocking out at music concerts.
            </span>
          </div>
          <ProfileImage containerRef={containerRef} />
        </div>
      </div>
      <div
        className="flex w-full px-[10%] py-8 lg:py-14 2xl:px-[15%]"
        id="experience"
      >
        <div className="flex  flex-col">
          <Subtitle subtitle="experience" />

          <ExperienceTabs />
        </div>
      </div>

      <div
        className="flex w-full justify-center px-[10%] py-8 2xl:px-[15%] 2xl:py-12"
        id="projects"
      >
        <div className="flex  flex-col text-center">
          <Subtitle subtitle="projects" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {projects.map((project) => {
              const { title, description, stack, url, github } = project;

              return (
                <div className="col-span-1" key={title}>
                  <ProjectCard
                    title={title}
                    description={description}
                    stack={stack}
                    github={github}
                    url={url}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center">
            <a
              href="https://github.com/rosareyes"
              target="_blank"
              className={clsx(
                ntr.className,
                'my-8 flex rounded-md bg-green-450 px-3 py-2 text-lg font-semibold uppercase text-dimWhite shadow-md hover:bg-slate-500 hover:text-dimWhite dark:bg-orange-100 dark:hover:bg-orange-50 dark:hover:text-dimWhite',
              )}
            >
              View more
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex w-full justify-center px-[10%] py-12 2xl:px-[15%]"
        id="garden"
      >
        <div className="flex flex-col">
          <Subtitle subtitle="🌻virtual garden🌼" />
          <div className="flex items-center justify-center">
            <div
              className={clsx(
                ntr.className,
                'my-4 flex  bg-orange-100 px-3 py-2 text-lg uppercase shadow-md dark:text-dimWhite',
              )}
            >
              WORK IN PROGRESS
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 py-2 text-right text-blue-200">
        built by Rosa Reyes
      </footer>
    </main>
  );
}
