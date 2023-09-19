import { fetchShows } from '../utils/queries';
import Layout from '../components/Layout';
import dayjs from 'dayjs';
import cx from 'classnames';

export default function Shows({ shows }) {
  return (
    <Layout title='Petra Hermanova | Shows'>
      <ul className='absolute top-1/2 -translate-y-1/2 text-white w-full'>
        {shows
          .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
          .map(({ title, dateTime }, idx) => (
            <li
              key={idx}
              className={cx('text-sm sm:text-base font-extralight')}
            >
              <div className='flex justify-center flex-col sm:flex-row text-center'>
                <span
                  className={cx('mr-2', {
                    'line-through': dayjs().isAfter(dateTime),
                  })}
                >
                  {dayjs(dateTime).format('DD MM YYYY')}
                </span>
                <h3>{title}</h3>
              </div>
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
    revalidate: 60 * 60,
  };
}
