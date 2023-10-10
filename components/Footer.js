export default function Footer() {
  return (
    <footer className='fixed bottom-0 h-10 md:h-16 w-full bg-black md:bg-transparent flex justify-center md:justify-start'>
      <div className='fixed uppercase text-white text-center flex p-4 gap-3'>
        <a href='/shows'>live</a>
        <a href='/shop'>shop</a>
        <a href='/contact'>info</a>
      </div>
    </footer>
  );
}
