import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { allCountries, isInEU } from '../utils/countries';

export async function getStaticProps() {
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
    type: 'region',
  });

  const countryNames = allCountries.map((code) => ({
    code,
    name: regionNamesInEnglish.of(code),
  }));

  countryNames.sort((a, b) => (a.name > b.name ? 1 : -1));

  return {
    props: {
      countryNames,
    },
  };
}

export default function Shop({ countryNames }) {
  const [quantity, setQuantity] = useState(1);
  const [country, setCountry] = useState('');
  const [error, setError] = useState(null);
  const { query } = useRouter();

  const queryOptions = useMemo(() => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        country,
        items: [
          {
            id: isInEU(country) ? 'ide_vinyl' : 'ide_vinyl_no_vat',
            name: 'In Death’s Eyes - Vinyl',
            quantity,
          },
        ],
      }),
    };
  }, [quantity, country]);

  return (
    <Layout title='Petra Hermanova - In Death’s Eyes' bgImage={false}>
      <div className='text-white grid justify-center items-center px-4 py-40 md:py-20'>
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
            <div>
              <div className='mb-2 flex justify-between'>
                <span className='mr-2'>Quantity:</span>
                <input
                  className='text-black w-14 text-right p-2'
                  type='number'
                  value={quantity}
                  min={1}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <div className='flex justify-between'>
                <span className='mr-2'>Country:</span>
                <select
                  className='text-black text-right px-2 py-3 w-40'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value=''></option>
                  {countryNames.map(
                    (country: { code: string; name: string }) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <p>
              {isInEU(country) ? 'EUR 35,70 incl. VAT' : 'EUR 30'} + shipping
            </p>
            <button
              className='border-white border-2 p-2 my-2 hover:bg-[rgba(255,255,255,0.2)]'
              onClick={() => {
                if (!country) {
                  setError('Please select a country');
                  return;
                }
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
            {error ? <p className=''>{error}</p> : null}
            <span>
              <a href='/return-policy' className='underline'>
                Return policy
              </a>
            </span>
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
                window.location.href = '/shop';
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
