import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout bgImage={false}>
      <div className='rich-text text-gray-300 py-40 md:pt-8 px-4 max-w-4xl'>
        <h1 className='uppercase font-bold pb-4'>Privacy Policy</h1>
        <p>Last updated October 09, 2023</p>
        <h2 className='font-bold'>Data Collection and Storage</h2>
        <p>
          We collect only the following data from the user, through our payment
          vendor Stripe, and only upon completion of a purchase:
        </p>
        <ul className='list-disc list-inside pb-4'>
          <li>Email address</li>
          <li>Name</li>
          <li>Shipping address</li>
          <li>Billing address (if different from shipping address)</li>
          <li>Record of purchase, including product name(s) and price(s)</li>
        </ul>
        <p>
          The data is kept in our accounts with our payment vendor Stripe for 1
          year, at which point it is deleted. Whether or not Stripe collects and
          keeps any of your data, and for how long, is out of our control.
          Please refer to{' '}
          <a
            href='https://www.stripe.com/privacy'
            target='_blank'
            rel='noopener nofollow noreferrer'
          >
            Stripe's Privacy Policy
          </a>{' '}
          for more detailed information about this.
        </p>

        <h2 className='font-bold'>Access to Personal Data</h2>
        <p>
          You can request access to view and have removed any of your personal
          data stored with us at any time, as far as it is in our control to do
          so. To view your personal data stored with us, contact
          info@petrahermanova.com.
        </p>
        <p>
          We are only able to provide and modify the data stored by us in our
          Stripe account. We are not able to provide or modify data collected by
          Stripe as a result of any transactions.
        </p>

        <h2 className='font-bold'>Cookies and Trackers</h2>
        <p>
          This website does not use any cookies or trackers, to the best of our
          knowledge. If our third-party payment service Stripe use any cookies
          when responding to API calls from our website in order to initiate a
          transaction with them, that is out of our control and we refer to{' '}
          <a
            href='https://www.stripe.com/privacy'
            target='_blank'
            rel='noopener nofollow noreferrer'
          >
            Stripe's Privacy Policy
          </a>{' '}
          to learn more about this
        </p>
      </div>
    </Layout>
  );
}
