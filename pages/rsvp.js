import Head from 'next/head';
import React from 'react';

export default function RSVP() {
  return (
    <>
      <Head>
        <title>
          RSVP | Petra Hermanova: In Death’s Eyes Cinema Listening Session
        </title>
      </Head>
      <main>
        <iframe
          className='w-full h-screen rsvp'
          src='https://docs.google.com/forms/d/e/1FAIpQLSdutPGCeNbugZEU6QD7tHp8Iu_renGUCeKB6sllVgcrmbZlAQ/viewform?embedded=true'
        >
          Loading…
        </iframe>
      </main>
    </>
  );
}
