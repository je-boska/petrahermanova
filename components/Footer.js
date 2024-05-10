export default function Footer() {
  return (
    <footer className='fixed bottom-0 h-12 md:h-16 w-full bg-black md:bg-transparent flex items-center justify-center md:justify-start'>
      <div className='fixed uppercase text-white text-center px-4 flex gap-3'>
        <a href='/'>live</a>
        <a href='/shop'>shop</a>
        <a href='/contact'>info</a>
      </div>
    </footer>
  );
}
