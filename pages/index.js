import Head from 'next/head';

import { fetchEntries } from '@utils/contentfulPosts';

import Header from '@components/Header';
import Post from '@components/Post';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className='container'>
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <div className='posts'>
          {posts.map((p) => {
            return (
              <Post
                key={p.publishDate}
                date={p.publishDate}
                image={p.heroImage.fields}
                title={p.title}
              />
            );
          })}
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
