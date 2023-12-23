import { FC, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { Fade } from 'react-awesome-reveal';
import { jobs } from '../../../../../data/profile';

const ExperienceTab: FC<any> = ({ text }) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={`${
            selected
              ? ' border-r-2 border-green-300 text-green-450 dark:border-orange-100 dark:text-orange-100'
              : 'text-green-500 hover:bg-green-100 dark:text-blue-100 hover:dark:bg-blue-400 hover:dark:text-blue-200'
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
  url,
  technologies,
}) => {
  return (
    <Tab.Panel className="flex-1 rounded-lg  px-4 dark:text-blue-200">
      <h3 className="text-2xl font-semibold text-green-500 dark:text-blue-100">
        {title} @{' '}
        <a
          className="font-semibold text-green-300 hover:underline dark:text-orange-100"
          href={url}
        >
          {company}
        </a>
      </h3>
      <span className="text-lg text-[#333333] dark:text-blue-100">
        {location}
      </span>
      <p className="my-2 uppercase">{year}</p>
      <ul className="max-w-2xl list-disc">
        {descriptions?.map((description: string, index: number) => (
          <li className="mt-3" key={`{title}-${index}`}>
            {description}
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-3xl dark:text-blue-100">
        <strong>Skills:</strong> {technologies}
      </p>
    </Tab.Panel>
  );
};

const ExperienceTabs = () => {
  return (
    <Tab.Group vertical>
      <Fade>
        <div className="flex flex-col lg:h-[500px] lg:flex-row">
          <Tab.List className="flex flex-col rounded-lg bg-green-200 p-4 text-green-500 dark:bg-transparent dark:text-blue-100">
            {jobs.map((job) => {
              return (
                <ExperienceTab
                  text={job.company}
                  key={`${job.title}-${job.year}`}
                />
              );
            })}

            <button className="mb-2 mt-auto rounded-md p-3 text-right hover:underline">
              <span className="font-semibold">View full CV</span>
              <ArrowUpRightIcon className="ml-2 inline-block h-4 w-4" />
            </button>
          </Tab.List>
          <Tab.Panels className="flex-1 p-4">
            {jobs.map((job) => {
              const {
                title,
                company,
                year,
                descriptions,
                location,
                url,
                technologies,
              } = job;
              return (
                <ExperiencePanel
                  key={`${title}-${company}`}
                  title={title}
                  descriptions={descriptions}
                  company={company}
                  year={year}
                  location={location}
                  url={url}
                  technologies={technologies}
                />
              );
            })}
          </Tab.Panels>
        </div>
      </Fade>
    </Tab.Group>
  );
};

export default ExperienceTabs;
