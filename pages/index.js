import Head from 'next/head';

import { fetchEntries } from '@utils/contentfulPosts';

export default function Home({ posts }) {
  return (
    <div className='container'>
      <Head>
        <title>Petra Hermanova</title>
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
          <div className='absolute bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0 text-white text-center flex gap-3'>
            <a
              href='https://petrahermanova.bandcamp.com/'
              target='_blank'
              rel='noreferrer'
            >
              <p className='mb-2'>bandcamp</p>
            </a>
            <a
              href='https://www.instagram.com/petrahermanova/'
              target='_blank'
              rel='noreferrer'
            >
              <p className='mb-2'>instagram</p>
            </a>
          </div>
          <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-3/4 md:1/2 lg:w-1/3'>
            <img
              src='/handwritten.png'
              alt='Petra Hermanova, written by hand'
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
