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
        <div className='w-screen h-screen'>
          <iframe
            className='w-full h-full'
            src='https://www.youtube.com/embed/0TWZlkcX7wQ'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            autoplay='1'
            controls='0'
          ></iframe>
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
