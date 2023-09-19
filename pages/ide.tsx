import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

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
    <div className='text-white'>
      <button
        onClick={() => {
          fetch('/api/stripe', queryOptions)
            .then((res) => {
              if (res.ok) return res.json();
              return res.json().then((json) => Promise.reject(json));
            })
            .then((res) => (window.location = res.url))
            .catch((e) => console.error(e.error));
        }}
      >
        Order
      </button>
      <input
        className='text-black'
        type='number'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <h1>
        {query.success === 'true'
          ? 'Success!'
          : query.success === 'false'
          ? 'Failure :('
          : ''}
      </h1>
    </div>
  );
}
