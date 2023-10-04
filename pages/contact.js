import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title='Petra Hermanova | Contact'>
      <ul className='absolute top-1/2 -translate-y-1/2 w-full text-center text-white'>
        <li>
          <a
            href='https://www.instagram.com/petrahermanova/'
            target='_blank'
            rel='noopener nofollow noreferrer'
          >
            Instagram
          </a>
        </li>
        <li>Email</li>
      </ul>
    </Layout>
  );
}
