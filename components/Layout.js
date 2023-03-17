import Head from 'next/head';

import Footer from '@components/Footer';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='relative w-screen h-screen'>
          <video
            className='w-full h-full object-cover'
            src='/pet_videobit.mp4'
            autoPlay
            muted
            loop
          />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
