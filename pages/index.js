import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {
  iconGithub,
  iconLinkedIn,
  iconTwitter,
  iconFacebook,
  iconInstagram,
} from '../components/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agustín Rujana</title>
      </Head>
      <header className=''></header>
      <main className=''>
        <div className='max-w-5xl mx-auto pt-4 pb-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg'>
            <div className='px-4 py-5 sm:px-6 flex items-center justify-between'>
              <div className='flex items-center'>
                <Image
                  className='rounded-lg mr-4 shadow-lg'
                  src='/images/AgustinRujana.jpg'
                  alt=''
                  width={64}
                  height={64}
                />
                <h3 className='text-lg leading-none font-medium text-blue-900 dark:text-white dark:text-white'>
                  Agustín Rujana
                </h3>
              </div>
              <div className=''>
                <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                  <div className='space-x-6 md:order-2 flex items-center'>
                    {social.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a className='text-blue-400 hover:text-blue-700 dark:text-white dark:hover:text-gray-300'>
                          <span className='sr-only'>{item.name}</span>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </a>
                      </Link>
                    ))}
                  </div>
                </dd>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mt-5'>
            <div className='px-4 pb-5 sm:p-0'>
              <dl className='divide-y divide-gray-200 dark:divide-black'>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-blue-400'>E-mail</dt>
                  <dd className='mt-1 text-sm text-blue-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    agustin.rujana@loesensa.com
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-blue-400'>Profession</dt>
                  <dd className='mt-1 text-sm text-blue-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    Front-End Web Developer
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-blue-400 py-1'>Experience</dt>
                  <dd className='mt-1 text-sm text-blue-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    <span className='inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-400 dark:bg-black text-white mr-3 dark:text-white mb-1'>
                      Freelance
                    </span>
                    <span className='inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-400 dark:bg-black text-white mr-3 dark:text-white mb-1'>
                      MERN Development
                    </span>
                    <span className='inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-400 dark:bg-black text-white mr-3 dark:text-white mb-1'>
                      Digital Design
                    </span>
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-blue-400'>Preferred Stack</dt>
                  <dd className='mt-1 text-sm text-blue-900 dark:text-white sm:mt-0 sm:col-span-2 grid grid-cols-4'>
                    {techStack.map((e) => (
                      <div key={e.name} className='flex flex-col overflow-hidden'>
                        <div className='flex-1 py-1 mr-3'>
                          <Image
                            className='h-10'
                            src={e.logo}
                            alt={e.name}
                            width={e.width}
                            height={e.height}
                          />
                        </div>
                      </div>
                    ))}
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-blue-400'>Learning</dt>
                  <dd className='mt-1 text-sm text-blue-900 dark:text-white sm:mt-0 sm:col-span-2 grid grid-cols-4'>
                    {learning.map((e) => (
                      <div key={e.name} className='flex flex-col overflow-hidden'>
                        <div className='flex-1 py-1 mr-3'>
                          <Image
                            className='h-10'
                            src={e.logo}
                            alt={e.name}
                            width={e.width}
                            height={e.height}
                          />
                        </div>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

const techStack = [
  {
    name: 'Javascript',
    logo: '/images/svg/javascript.svg',
    height: 48,
    width: 48,
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'NodeJS',
    logo: '/images/svg/nodejs.svg',
    height: 48,
    width: 75,
    docs: 'https://nodejs.org/dist/latest-v14.x/docs/api/',
  },
  {
    name: 'MongoDB',
    logo: '/images/svg/mongodb.svg',
    height: 48,
    width: 150,
    docs: 'https://docs.mongodb.com/drivers/node/current/',
  },
  {
    name: 'React',
    logo: '/images/svg/react.svg',
    height: 48,
    width: 55,
    docs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    name: 'NextJS',
    logo: '/images/svg/nextjs.svg',
    height: 48,
    width: 55,
    docs: 'https://nextjs.org/docs',
  },
];

const learning = [
  {
    name: 'expressJS',
    logo: '/images/svg/expressjs.svg',
    height: 48,
    width: 100,
    docs: 'https://expressjs.com/en/4x/api.html',
  },
];

const social = [
  {
    name: 'GitHub',
    href: 'https://github.com/matiaskochlowski',
    icon: iconGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matias-kochlowski-62034679',
    icon: iconLinkedIn,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/matiaskochlowski',
    icon: iconInstagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/matikochlowski',
    icon: iconTwitter,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/matiaskochlowski',
    icon: iconFacebook,
  },
];
