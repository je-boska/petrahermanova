import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title='Petra Hermanova | Contact'>
      <ul className='absolute top-1/2 -translate-y-1/2 w-full text-center text-white'>
        <div className='flex justify-center gap-2 pb-2'>
          <li className='underline'>
            <a
              href='https://www.instagram.com/petrahermanova/'
              target='_blank'
              rel='noopener nofollow noreferrer'
            >
              Instagram
            </a>
          </li>
          <span> / </span>
          <li className='underline'>
            <a
              href='https://petrahermanova.bandcamp.com/'
              target='_blank'
              rel='noopener nofollow noreferrer'
            >
              Bandcamp
            </a>
          </li>
          <span> / </span>
          <li className='underline'>
            <a
              href='https://www.youtube.com/@petrahermanova'
              target='_blank'
              rel='noopener nofollow noreferrer'
            >
              YouTube
            </a>
          </li>
        </div>
        <li className='pb-8 select-none'>info@petrahermanova.com</li>
        <li className='pb-2'>
          <a href='/imprint'>Imprint and Terms of Service</a>
        </li>
        <li>
          <a href='/privacy'>Privacy Policy</a>
        </li>
      </ul>
    </Layout>
  );
}
