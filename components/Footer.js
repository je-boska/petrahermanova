export default function Footer() {
  return (
    <div className='absolute bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:-translate-x-0 text-white text-center flex gap-3'>
      <a href='/shows'>shows</a>
      <a
        href='https://petrahermanova.bandcamp.com/'
        target='_blank'
        rel='noreferrer'
      >
        <p className='mb-2'>bandcamp</p>
      </a>
      <a
        href='https://www.instagram.com/petrahermanova/'
        target='_blank'
        rel='noreferrer'
      >
        <p className='mb-2'>instagram</p>
      </a>
    </div>
  );
}
