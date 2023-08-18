import Layout from '@components/Layout';

export default function Home() {
  return (
    <Layout title='Petra Hermanova'>
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-3/4 md:1/2 lg:w-1/3'>
        <img src='/handwritten.png' alt='Petra Hermanova, written by hand' />
      </div>
    </Layout>
  );
}
