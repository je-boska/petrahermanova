import Layout from './layout';

export default function Contact() {
  return (
    <Layout title='Petra Hermanova | Contact'>
      <ul className='text-white pt-56 px-4 md:px-20'>
        <div className='flex gap-2 pb-2'>
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
      </ul>
    </Layout>
  );
}
