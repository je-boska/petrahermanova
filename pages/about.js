import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchAbout } from '../utils/queries';
import Layout from './layout';

export default function About({ about }) {
  return (
    <Layout title='Petra Hermanova | About'>
      <div
        className='rich-text h-[90vh] overflow-y-auto text-gray-300 pt-56 px-4 md:px-20 pb-40 max-w-4xl'
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)',
        }}
      >
        <div>{documentToReactComponents(about.content)}</div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await fetchAbout();

  return {
    props: {
      about: about.fields,
    },
    revalidate: 60 * 60,
  };
}
