'use client';
import Image from 'next/image';
import { playfair_display, montserrat, pacifico, poppings } from './fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ThemeSwitch } from './_components/atoms/ThemeSwitch/ThemeSwitch';
import { Navbar } from './_components/molecules/Navbar/Navbar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(000, 000, 00, 1)',
    },
  };
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <main className="flex flex-col items-center justify-betweenbg-[#F7F2FF] dark:bg-[#8D6B94]">
        <Navbar />
        <div className="justify-center items-center text-center lg:min-h-[calc(100vh-200px)] px-9 lg:px-24">
          <div className="py-24 transition-colors dark:text-white text-[#025a4e] relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <h1>
              <span
                style={{
                  fontSize: 'clamp(4.2rem, .5692rem + 8.238vw, 15rem)',
                }}
                className={clsx(
                  pacifico.className,
                  'font-bold block leading-none lg:leading-normal'
                )}
              >
                Hi! I&apos;m <span className="underline">Rosa.</span>
              </span>
              <span
                className={clsx(
                  'block text-3xl lg:text-4xl mt-9 lg:mt-9',
                  montserrat.className
                )}
              >
                Caffeine-Fueled Front-End Developer <br /> & Computer Science
                Student 🚀
              </span>
            </h1>
          </div>
        </div>
        <div className="py-9 lg:py-24 selector text-center" style={{}}>
          <h2>
            <span
              style={{
                fontSize: '70px',
              }}
              className={clsx(
                pacifico.className,
                'font-bold block text-[#001E16] pb-8 mt-12'
              )}
            >
              about me!
            </span>
          </h2>
          <div className="lg:px-24  px-9 grid-cols-1 lg:grid-cols-3 grid justify-center items-center text-center gap-9 justify-items-center">
            <div className="justify-center col-span-1 transition-colors dark:text-white text-[#025a4e] relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
              <span className={clsx(poppings.className, 'font-normal text-lg')}>
                hey fellow humans of the internet! I&apos;m just a gal on a
                mission to conquer the digital world, armed with nothing but a
                noisy keyboard and a trusty cup of coffee 👩‍💻☕ <br />
                <br />
                By day, I&apos;m a part-time computer science student and a
                front-end developer, crafting code that brings websites to life.
                By night, you&apos;ll often find me rocking out at music
                concerts, soaking up the energy of live performances and having
                the time of my life.
              </span>
            </div>

            <div className="order-first lg:order-none max-w-sm lg:max-w-none w-full relative pt-[40px] flex justify-center mb-[50px]">
              <img
                className="max-w-sm lg:max-w-none w-full h-auto"
                src="rosarosa.png"
              />
              <div className="absolute top-0 right-0">
                <span className="mb-2 ">coffee addict</span>
                <motion.svg
                  width="64"
                  height="45"
                  viewBox="0 0 64 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={'relative'}
                  style={{
                    overflow: 'visible',
                    stroke: '#C79FBE',
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                  }}
                >
                  <motion.path
                    /* fill="#C79FBE" */
                    d="M62.71 0.808224C53.207 20.6672 31.42 33.6072 9.90698 37.5762C10.746 37.2412 11.568 36.8842 12.354 36.4882C13.498 35.9122 14.162 35.7912 14.484 34.4452C14.599 33.9632 14.332 33.5572 13.885 33.3892L13.546 33.2622C12.653 32.9262 12.002 34.4402 12.89 34.8172C10.845 33.9492 3.83797 37.5602 1.14797 38.6972C1.12297 38.6992 1.09696 38.7022 1.07196 38.7032C0.863955 38.7172 0.674975 38.8192 0.522975 38.9632C-0.212025 39.3322 -0.156033 40.3172 0.633967 40.6292C3.54697 41.7762 6.45897 42.9242 9.37197 44.0722C10.305 44.4402 10.992 42.8342 10.061 42.4392C8.23497 41.6642 6.40896 40.8932 4.58196 40.1202C28.151 37.3132 53.51 23.4802 63.378 1.19821C63.576 0.751208 62.928 0.355224 62.71 0.808224Z"
                    variants={icon}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatType: 'loop',
                      repeatDelay: 2,
                    }}
                  />
                </motion.svg>
              </div>
              <div className="absolute bottom-[0px] left-0">
                <span className="-mb-1 flex -ml-5">gamer</span>
                <motion.svg
                  width="83"
                  height="41"
                  viewBox="0 0 83 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    overflow: 'visible',
                    stroke: '#C79FBE',
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                  }}
                >
                  <motion.path
                    /* fill="#C79FBE" */
                    d="M0.173691 18.1778C0.223691 17.9838 0.5567 18.0169 0.5327 18.2269C-0.0263004 23.1059 8.07169 28.0908 11.5187 30.3818C15.0487 32.7288 18.8397 34.6998 22.8447 36.1018C30.1147 38.6458 38.0357 39.2709 45.5337 37.3559C62.4177 33.0459 68.8137 18.1549 73.7057 3.04285C71.2317 1.64585 62.5437 8.57485 60.0567 9.91885C59.1137 10.4279 58.3197 9.06085 59.2187 8.48585C63.8187 5.54585 68.6077 2.88285 73.3127 0.114851C73.6917 -0.108149 74.3457 -0.00914988 74.5377 0.43585C74.9217 1.32685 75.3047 2.21885 75.6887 3.10985C78.2257 7.81885 80.3157 12.6608 81.9857 17.7498C82.2957 18.6948 80.7557 19.3768 80.3517 18.4388C79.2477 15.8738 78.1437 13.3088 77.0397 10.7438C76.7767 10.1328 76.3817 8.83785 75.9187 7.47685C75.5727 6.75985 75.2027 6.05085 74.8357 5.34085C72.2917 13.1508 69.4597 21.1039 64.2477 27.5469C58.5487 34.5929 50.2767 38.8018 41.3317 39.9168C32.4117 41.0288 23.4357 38.9289 15.5847 34.6549C10.6267 31.9569 -1.59631 25.0658 0.173691 18.1778Z"
                    variants={icon}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatType: 'loop',
                      repeatDelay: 2,
                    }}
                  />
                </motion.svg>
              </div>
              <div className="absolute -bottom-[50px] -right-[0]">
                <motion.svg
                  width="30"
                  height="71"
                  viewBox="0 0 30 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    overflow: 'visible',
                    stroke: '#C79FBE',
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                  }}
                >
                  <motion.path
                    /* fill="#C79FBE" */
                    d="M27.2186 69.7207C31.7424 48.1749 22.3063 24.6573 7.63524 8.43013C8.09788 9.20609 8.53365 9.98916 8.91712 10.7814C9.47548 11.9341 9.92922 12.4337 9.36683 13.6983C9.16519 14.1509 8.70641 14.3111 8.24934 14.1728L7.90292 14.0676C6.98958 13.7917 7.39284 12.1937 8.32713 12.4341C6.17564 11.8804 2.80615 4.75413 1.36109 2.21629C1.34246 2.1995 1.32362 2.1813 1.30438 2.16531C1.14772 2.02777 1.05965 1.8319 1.02647 1.62517C0.667084 0.885419 1.31021 0.137278 2.12718 0.369677C5.13752 1.22935 8.14767 2.08763 11.1586 2.94651C12.1232 3.22135 11.6926 4.91421 10.7132 4.66203C8.79217 4.16762 6.87354 3.67004 4.9529 3.17344C21.9629 19.7275 33.6927 46.1253 27.986 69.817C27.8716 70.2923 27.1163 70.2129 27.2186 69.7207Z"
                    variants={icon}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatType: 'loop',
                      repeatDelay: 2,
                    }}
                  />
                </motion.svg>
                <span className="">huh?</span>
              </div>
              <div className="absolute bottom-[250px] left-0">
                <span className="flex mb-2 -ml-5">geek</span>
                <motion.svg
                  className={'-scale-x-100'}
                  width="64"
                  height="45"
                  viewBox="0 0 64 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    overflow: 'visible',
                    stroke: '#C79FBE',
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                  }}
                >
                  <motion.path
                    /* fill="#C79FBE" */
                    d="M62.71 0.808224C53.207 20.6672 31.42 33.6072 9.90698 37.5762C10.746 37.2412 11.568 36.8842 12.354 36.4882C13.498 35.9122 14.162 35.7912 14.484 34.4452C14.599 33.9632 14.332 33.5572 13.885 33.3892L13.546 33.2622C12.653 32.9262 12.002 34.4402 12.89 34.8172C10.845 33.9492 3.83797 37.5602 1.14797 38.6972C1.12297 38.6992 1.09696 38.7022 1.07196 38.7032C0.863955 38.7172 0.674975 38.8192 0.522975 38.9632C-0.212025 39.3322 -0.156033 40.3172 0.633967 40.6292C3.54697 41.7762 6.45897 42.9242 9.37197 44.0722C10.305 44.4402 10.992 42.8342 10.061 42.4392C8.23497 41.6642 6.40896 40.8932 4.58196 40.1202C28.151 37.3132 53.51 23.4802 63.378 1.19821C63.576 0.751208 62.928 0.355224 62.71 0.808224Z"
                    variants={icon}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatType: 'loop',
                      repeatDelay: 2,
                    }}
                  />
                </motion.svg>
              </div>
            </div>
            <div className="justify-center col-span-1 transition-colors dark:text-white text-[#025a4e] relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
              <span className={clsx(poppings.className, 'font-normal text-lg')}>
                <strong>So, why me?</strong> besides my impressive talent for
                turning caffeine into code and my ability to binge-watch TV
                shows without blinking, I&apos;m also a dedicated and
                hardworking individual who believes in giving my best to
                everything I do. Each day is a learning adventure, and I embrace
                the opportunity to grow and evolve, both personally and
                professionally. 🌱
                <br />
                <br />
                Whether I&apos;m in the library studying for my computer science
                degree, or creating digital magic as a front-end developer, one
                thing&apos;s for sure: I bring a whole lotta dedication to
                everything I do. 🌟
              </span>
            </div>
          </div>
        </div>
        <div className="text-center px-24 py-14">
          <h2>
            <span
              style={{
                fontSize: '70px',
              }}
              className={clsx(
                pacifico.className,
                'font-bold block text-[#001E16] pb-8'
              )}
            >
              projects
            </span>
          </h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="text-center px-24 py-14">
          <h2>
            <span
              style={{
                fontSize: '70px',
              }}
              className={clsx(
                pacifico.className,
                'font-bold block text-[#001E16] pb-8'
              )}
            >
              🌻virtual garden🌼
            </span>
          </h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="text-center px-24 py-14">
          <h2>
            <span
              style={{
                fontSize: '70px',
              }}
              className={clsx(
                pacifico.className,
                'font-bold block text-[#001E16] pb-8'
              )}
            >
              contact me
            </span>
          </h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </main>
    </div>
  );
}
