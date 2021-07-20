import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Error 404 - Rujana</title>
      </Head>
      <header className='bg-white'></header>
      <main className='bg-white overflow-hidden h-screen'>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='w-1/2 mx-auto text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl'>
                <Image
                  className=''
                  src='/images/svg/error404.svg'
                  alt=''
                  width={1500}
                  height={1500}
                />
            </h2>
            <div className='mt-8 flex justify-center'>
              <div className='inline-flex'>
                  <a
                    href='/'
                    className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-blue-100 hover:bg-blue-200'
                  >
                    Return to Home
                  </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
