import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import { fetchTOS } from '../utils/queries';

export default function Imprint({ tos }) {
  return (
    <Layout bgImage={false} title='Imprint and Terms of Service'>
      <div className='text-gray-300 pt-40 md:pt-8 px-4 max-w-4xl'>
        <div className='pb-8'>
          <h1 className='font-bold uppercase pb-4'>Imprint</h1>
          <div className='pb-4'>
            <p>Petra Hermanova</p>
            <p>Potsdamer Strasse 116</p>
            <p>10785 Berlin</p>
            <p>Germany</p>
          </div>
          <p>info@petrahermanova.com</p>
        </div>
        <div className='rich-text pb-20'>
          {documentToReactComponents(tos.content)}
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
