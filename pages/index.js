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
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/0TWZlkcX7wQ'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
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
