export default function Nav() {
  return (
    <nav className='fixed bottom-0 md:top-0 h-12 md:h-16 w-full flex items-center justify-center md:justify-start z-10'>
      <ul className='fixed uppercase text-white text-center px-20 flex gap-3'>
        <li>
          <a href='/'>live</a>
        </li>
        <li>
          <a href='/shop'>shop</a>
        </li>
        <li>
          <a href='/about'>about</a>
        </li>
        <li>
          <a href='/contact'>contact</a>
        </li>
      </ul>
    </nav>
  );
}
