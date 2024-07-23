import type { NextApiRequest, NextApiResponse } from 'next';
import { Item, ResponseData } from '../../types/shared';
import Stripe from 'stripe';
import { countries } from '../../constants';

const stripe = new Stripe(
  process.env.ENVIRONMENT === 'production'
    ? process.env.STRIPE_SECRET_KEY
    : process.env.STRIPE_SECRET_TEST_KEY,
  {
    apiVersion: '2023-08-16',
    typescript: true,
  }
);

const products = new Map();
products.set('ide_vinyl', {
  name: 'Petra Hermanova - In Death’s Eyes - Double Vinyl incl. VAT',
  priceInCents: 3570,
});
products.set('ide_vinyl_no_vat', {
  name: 'Petra Hermanova - In Death’s Eyes - Double Vinyl',
  priceInCents: 3000,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      if (!countries.includes(req.body.country)) {
        return;
      }

      const isInEU = req.body.country !== 'GB' && req.body.country !== 'US';

      const session = await stripe.checkout.sessions.create({
        payment_method_types: [
          'card',
          'link',
          'bancontact',
          'eps',
          'giropay',
          'ideal',
        ],
        mode: 'payment',
        line_items: req.body.items.map((item: Item) => {
          const product = products.get(item.id);
          return {
            price_data: {
              currency: 'eur',
              product_data: {
                name: product.name,
              },
              unit_amount: product.priceInCents,
            },
            quantity: item.quantity,
          };
        }),
        shipping_address_collection: {
          allowed_countries: [req.body.country],
        },

        shipping_options: [
          {
            shipping_rate: isInEU
              ? 'shr_1Nzj27I7UcvUqG4stBaVoFW9'
              : 'shr_1Pff3HI7UcvUqG4sVlcKh2qP',
          },
        ],
        success_url: `${process.env.URL}/shop?success=1`,
        cancel_url: `${process.env.URL}/shop?success=0`,
      });
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
