import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title='Petra Hermanova'>
      <div className='absolute top-1/2 -translate-y-1/2 w-full text-center text-white'>
        <h1 className='pb-2 px-4 uppercase font-bold'>
          In Death’s Eyes is out on Friday the 13th of October
        </h1>
        <a href='/shop'>
          <button className='border-white border-2 p-2 my-2 hover:bg-[rgba(255,255,255,0.2)]'>
            Pre-order
          </button>
        </a>
      </div>
    </Layout>
  );
}
