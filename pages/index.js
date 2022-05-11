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
          />
          <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center'>
            <a
              href='https://unguarded.bandcamp.com/track/liquid-of-the-eye'
              target='_blank'
              rel='noreferrer'
            >
              <p className='mb-2'>Liquid of the Eye // bandcamp</p>
            </a>
            <a
              href='https://highheal.bandcamp.com/track/06-summer-interlude-petra-hermanova'
              target='_blank'
              rel='noreferrer'
            >
              <p>Lacrimosa // bandcamp</p>
            </a>
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
