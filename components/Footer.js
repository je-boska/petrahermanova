export default function Footer() {
  return (
    <div className='fixed uppercase bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0 text-white text-center flex gap-3'>
      <a href='/shows'>shows</a>
      <a href='/contact'>contact</a>
      <a
        href='https://petrahermanova.bandcamp.com/'
        target='_blank'
        rel='noopener nofollow noreferrer'
      >
        <p className='mb-2'>music</p>
      </a>
    </div>
  );
}
