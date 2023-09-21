import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import Layout from '../components/Layout';

export default function Ide() {
  const [quantity, setQuantity] = useState(0);
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
    <Layout title='Petra Hermanova - In Death’s Eyes'>
      <div className='text-white grid justify-center items-center h-screen'>
        {!query.success ? (
          <div className='grid'>
            <input
              className='text-black w-12'
              type='number'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
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
        ) : null}

        {query.success === 'true' ? (
          <p>Thank you for ordering In Death’s Eyes</p>
        ) : null}

        {query.success === 'false' ? (
          <>
            <p>Something went wrong with your order</p>
            <button
              onClick={() => {
                window.location.href = '/ide';
              }}
            >
              Try again
            </button>
          </>
        ) : null}
      </div>
    </Layout>
  );
}
