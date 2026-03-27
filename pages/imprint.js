import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchTOS } from '../utils/queries';
import Layout from './layout';

export default function Imprint({ tos }) {
  return (
    <Layout bgImage={false} title='Imprint and Terms of Service' noIndex>
      <div className='text-gray-300 pt-40 px-4 md:px-20 max-w-4xl'>
        <div className='rich-text pb-8'>
          {documentToReactComponents(tos.content)}
        </div>
        <div className='pb-20'>
          <h1 className='font-bold uppercase pb-4'>Imprint</h1>
          <div className='pb-4 select-none'>
            <p>Petra Hermanova</p>
            <p>Potsdamer Strasse 116</p>
            <p>10785 Berlin</p>
            <p>Germany</p>
          </div>
          <p>info@petrahermanova.com</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const tos = await fetchTOS();

  return {
    props: {
      tos: tos.fields,
    },
    revalidate: 60 * 60,
  };
}
