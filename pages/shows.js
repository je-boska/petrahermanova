import { fetchShows } from '@utils/queries';
import Layout from '@components/Layout';
import dayjs from 'dayjs';
import cx from 'classnames';

export default function Shows({ shows }) {
  return (
    <Layout>
      <ul className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full'>
        {shows
          .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
          .map(({ title, dateTime }, idx) => (
            <li key={idx}>
              <h3
                className={cx({
                  'line-through': dayjs().isAfter(dateTime),
                })}
              >
                {dayjs(dateTime).format('DD MM YYYY')} - {title}
              </h3>
            </li>
          ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetchShows();

  const shows = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      shows,
    },
    revalidate: 60,
  };
}
