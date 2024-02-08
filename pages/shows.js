import { fetchShows } from '../utils/queries';
import Layout from '../components/Layout';
import dayjs from 'dayjs';
import cx from 'classnames';

export default function Shows({ shows }) {
  return (
    <Layout title='Petra Hermanova | Live'>
      <ul className='px-4 md:px-20 py-40 lg:flex text-white'>
        <div>
          {shows
            .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
            .map(({ title, dateTime }, idx) => (
              <li key={idx} className={cx('text-[0.925rem] font-extralight')}>
                <div className='flex flex-col sm:flex-row'>
                  <span
                    className={cx('mr-2', {
                      'line-through': dayjs().isAfter(dateTime),
                    })}
                  >
                    {dayjs(dateTime).format('DD MM YYYY')}
                    <h3 className='lg:hidden'>{title}</h3>
                  </span>
                </div>
              </li>
            ))}
        </div>
        <div className='hidden lg:block'>
          {shows
            .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
            .map(({ title, dateTime }, idx) => (
              <li key={idx} className={cx('text-[0.925rem] font-extralight')}>
                <div className='flex flex-col sm:flex-row'>
                  <span
                    className={cx('mr-2', {
                      'line-through': dayjs().isAfter(dateTime),
                    })}
                  >
                    <h3>{title}</h3>
                  </span>
                </div>
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
