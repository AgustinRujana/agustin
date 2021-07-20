import Head from 'next/head';

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
            <h2 className='text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl'>
                <img
                  className='w-1/2 mx-auto'
                  src='/images/svg/error404.svg'
                  alt=''
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
