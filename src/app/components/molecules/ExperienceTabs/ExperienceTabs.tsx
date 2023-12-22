import { Tab } from '@headlessui/react';
import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import { FC, Fragment } from 'react';
import { jobs } from '../../../../../data/profile';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const ExperienceTab: FC<any> = ({ text }) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={`${
            selected
              ? ' border-r-2 border-orange-100 text-orange-100 '
              : 'text-blue-100 hover:bg-blue-400 hover:text-blue-200'
          } mb-2 p-3 pr-6 text-right font-semibold uppercase leading-4 tracking-wide focus:outline-none `}
        >
          {text}
        </button>
      )}
    </Tab>
  );
};

const ExperiencePanel: FC<any> = ({
  title,
  company,
  descriptions,
  year,
  location,
  technologies,
}) => {
  return (
    <Tab.Panel className="rounded-lg px-4 dark:text-blue-200 ">
      <h3 className="text-2xl font-semibold dark:text-blue-100">
        {title} @{' '}
        <span className="font-semibold text-orange-100">{company}</span>
      </h3>
      <span className="text-lg dark:text-blue-100">{location}</span>
      <p className="my-2 uppercase">{year}</p>
      <ul className="max-w-2xl list-disc">
        {descriptions?.map((description: string) => (
          <li className="mt-3">{description}</li>
        ))}
      </ul>
    </Tab.Panel>
  );
};

const ExperienceTabs = () => {
  return (
    <Tab.Group vertical>
      <div className="flex">
        <Tab.List className="text-white flex flex-col p-4">
          <ExperienceTab text="stylib" />
          <ExperienceTab text="qreuz" />
          <ExperienceTab text="freelancer" />
          <ExperienceTab text="it support technician" />
          <button className="mb-2 mt-auto rounded-md p-3 text-right hover:underline">
            <span className="font-semibold">View full CV</span>
            <ArrowUpRightIcon className="ml-2 inline-block h-4 w-4" />
          </button>
        </Tab.List>
        <Tab.Panels className="flex-1 p-4">
          {jobs.map((job) => {
            const { title, company, year, descriptions, location } = job;
            return (
              <ExperiencePanel
                title={title}
                descriptions={descriptions}
                company={company}
                year={year}
                location={location}
              />
            );
          })}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default ExperienceTabs;
