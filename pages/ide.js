import Layout from './layout';

export default function IDE() {
  return (
    <Layout title='Petra Hermanova | Download - In Death’s Eyes'>
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center px-4 py-40 md:py-20'>
        <form action='https://www.bandcamp.com/yum?' method='get'>
          <input
            className='p-2  mr-2'
            type='text'
            name='code'
            placeholder='XXXX-XXXX'
          />
          <button
            type='submit'
            className='bg-dark p-2 my-2 hover:bg-[rgba(0,0,0,0.6)] text-offwhite transition-all duration-300'
          >
            Submit Code
          </button>
        </form>
      </div>
    </Layout>
  );
}
