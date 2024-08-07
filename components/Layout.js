import Head from 'next/head';

import Footer from '../components/Footer';

export default function Layout({
  title,
  children,
  bgImage = true,
  noIndex = false,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Debut album In Death’s Eyes out on October 13th -- Petra Hermanova is a composer, singer and performer.'
        />
        <meta property='og:title' content='Petra Hermanova' />
        <meta property='og:site_name' content='Petra Hermanova' />
        <meta
          property='og:description'
          content='Debut album In Death’s Eyes out on October 13th -- Petra Hermanova is a composer, singer and performer.'
        />
        <meta property='og:url' content='https://petrahermanova.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image:url'
          content='https://petrahermanova.com/petra_hermanova_og-image.jpg'
        />
        <meta
          property='og:image:secure_url'
          content='https://petrahermanova.com/petra_hermanova_og-image.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />
        <meta property='og:image:type' content='image/jpg' />
        <meta property='og:image:alt' content='Petra Hermanova' />
        {bgImage ? (
          <link rel='preload' href='/bine-web.jpg' as='image' />
        ) : null}
        {noIndex ? <meta name='robots' content='noindex' /> : null}
      </Head>

      <main className={bgImage ? 'bg-image' : null}>
        {children}
        <a href='/'>
          <img
            className='fixed top-8 right-8 w-20 md:w-32'
            src='/sigil.png'
            alt=''
          />
        </a>
      </main>
      <Footer />
    </>
  );
}
