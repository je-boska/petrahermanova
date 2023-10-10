import Layout from '../components/Layout';

export default function Returns() {
  return (
    <Layout bgImage={false} title='Return Policy'>
      <div className='text-gray-300 pt-40 md:pt-8 px-4 max-w-4xl'>
        <h1 className='uppercase font-bold pb-2'>Return Policy</h1>
        <p className='pb-2'>
          You may return any product purchased by us within 14 days of receipt.
          Should you wish to do so, the product must be unopened and unused. We
          do not provide any warranty on the products sold by us, other than
          them being as advertised and not subject to manufactoring errors upon
          sale.
        </p>
        <p>
          To return any product purchased through our website, please contact
          info@petrahermanova.com.
        </p>
      </div>
    </Layout>
  );
}
