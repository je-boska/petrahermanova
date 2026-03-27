export default function Nav() {
  return (
    <footer className='fixed bottom-0 md:top-0 h-12 md:h-16 w-full flex items-center justify-center md:justify-start'>
      <div className='fixed uppercase text-white text-center px-20 flex gap-3'>
        <a href='/'>live</a>
        <a href='/shop'>shop</a>
        <a href='/contact'>info</a>
      </div>
    </footer>
  );
}
