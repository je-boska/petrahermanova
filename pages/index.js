import { fetchShows } from '../utils/queries';
import Layout from '../components/Layout';
import dayjs from 'dayjs';
import cx from 'classnames';

export default function Shows({ shows }) {
  return (
    <Layout title='Petra Hermanova | Live'>
      <ul className='px-4 md:px-20 py-40 md:flex text-white'>
        <div>
          {shows
            .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
            .map(({ title, dateTime }, idx) => (
              <li
                key={idx}
                className={cx(
                  'text-sm sm:text-[0.925rem] font-extralight mb-2 md:mb-0'
                )}
              >
                <div className='flex flex-col'>
                  <span
                    className={cx('mr-2', {
                      'line-through': dayjs().isAfter(dateTime),
                    })}
                  >
                    {dayjs(dateTime).format('DD MM YYYY')}
                  </span>
                  <h3 className='md:hidden'>{title}</h3>
                </div>
              </li>
            ))}
        </div>
        <div className='hidden md:block'>
          {shows
            .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
            .map(({ title }, idx) => (
              <li
                key={idx}
                className={cx('text-sm sm:text-[0.925rem] font-extralight')}
              >
                <h3>{title}</h3>
              </li>
            ))}
        </div>
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
