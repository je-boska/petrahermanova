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
          <p className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
            <a href='https://www.bandcamp.com/petrahermanova'>bandcamp</a>
          </p>
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
