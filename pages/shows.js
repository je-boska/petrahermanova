import { fetchShows } from '@utils/queries';
import Footer from '@components/Footer';
import Layout from '@components/Layout';

export default function Shows({ shows }) {
  return (
    <Layout>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-3/4 md:1/2 lg:w-1/3'>
        {shows.map(({ title }, idx) => (
          <div key={idx}>{title}</div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetchShows();

  const shows = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      shows,
    },
  };
}
