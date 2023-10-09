import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Ide() {
  const [quantity, setQuantity] = useState(1);
  const { query } = useRouter();

  const queryOptions = useMemo(() => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ id: 'ide_vinyl', name: 'In Death’s Eyes - Vinyl', quantity }],
      }),
    };
  }, [quantity]);

  return (
    <Layout title='Petra Hermanova - In Death’s Eyes' bgImage={false}>
      <div className='text-white grid justify-center items-center px-4 py-40'>
        {!query.success ? (
          <div className='grid gap-4 max-w-lg'>
            <Image
              className='w-full'
              src='/IDE_artwork.jpeg'
              height={1100}
              width={1100}
              alt='Petra Hermanova - In Death’s Eyes - Vinyl Artwork'
            />
            <h2>Petra Hermanova - In Death’s Eyes</h2>
            <p>
              2xLPs on heavy 180g black vinyl in a full colour matt laminated
              gatefold sleeve with lyrics inside. Designed by{' '}
              <a
                className='underline'
                href='https://odious.haus/'
                target='_blank'
                rel='noopener nofollow noreferrer'
              >
                Odious Rot
              </a>
              , with artwork by{' '}
              <a
                className='underline'
                href='https://enesguc.com/'
                target='_blank'
                rel='noopener nofollow noreferrer'
              >
                Enes Güç
              </a>{' '}
              and photo on inner sleeves by{' '}
              <a
                className='underline'
                href='http://evelynbencicova.com/'
                target='_blank'
                rel='noopener nofollow noreferrer'
              >
                Evelyn Bencicova
              </a>
              .
            </p>
            <p>EUR 35,70 incl. VAT + shipping</p>
            <div className='flex justify-between items-center'>
              <div>
                <span className='mr-2'>Quantity:</span>
                <input
                  className='text-black w-14 text-right p-2 mr-4'
                  type='number'
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <button
                className='border-white border-2 p-2 my-2 hover:bg-[rgba(255,255,255,0.2)]'
                onClick={() => {
                  fetch('/api/stripe', queryOptions)
                    .then((res) => {
                      if (res.ok) return res.json();
                      return res.json().then((json) => Promise.reject(json));
                    })
                    .then((res) => (window.location.href = res.url))
                    .catch((e) => console.error(e.error));
                }}
              >
                Place order
              </button>
            </div>
            <p className='italic'>* Shipping will start from November 5th</p>
            <a href='/return-policy' className='underline'>
              Return policy
            </a>
          </div>
        ) : null}

        {query.success === '1' ? (
          <p>Thank you for ordering In Death’s Eyes</p>
        ) : null}

        {query.success === '0' ? (
          <div className='grid justify-center'>
            <p className='pb-4'>Something went wrong with your order</p>
            <button
              className='border-white mx-auto border-2 p-2 hover:bg-[rgba(255,255,255,0.2)]'
              onClick={() => {
                window.location.href = '/ide';
              }}
            >
              Try again
            </button>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
