import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title='Petra Hermanova | Contact'>
      <ul className='absolute top-1/2 -translate-y-1/2 w-full text-center text-white'>
        <li className='pb-2'>
          <a
            href='https://www.instagram.com/petrahermanova/'
            target='_blank'
            rel='noopener nofollow noreferrer'
          >
            Instagram
          </a>
        </li>
        <li className='pb-2'>info@petrahermanova.com</li>
        <li>
          <a href='/imprint'>Imprint and Terms of Service</a>
        </li>
      </ul>
    </Layout>
  );
}
