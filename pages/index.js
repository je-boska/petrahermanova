import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title='Petra Hermanova'>
      <div className='absolute top-1/2 -translate-y-1/2 w-full text-center text-white'>
        <a href='/ide'>
          <h1>Pre-order In Death’s Eyes</h1>
        </a>
      </div>
    </Layout>
  );
}
