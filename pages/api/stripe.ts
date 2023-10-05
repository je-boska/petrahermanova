import type { NextApiRequest, NextApiResponse } from 'next';
import { Item, ResponseData } from '../../types/shared';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
  typescript: true,
});

const products = new Map();
products.set('ide_vinyl', {
  name: 'Petra Hermanova - In Death’s Eyes - Double Vinyl',
  priceInCents: 3000,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'paypal'],
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
          allowed_countries: [
            'AT',
            'BE',
            'BG',
            'HR',
            'CY',
            'CZ',
            'DK',
            'EE',
            'FI',
            'FR',
            'DE',
            'GR',
            'HU',
            'IE',
            'IT',
            'LV',
            'LT',
            'LU',
            'MT',
            'NL',
            'PL',
            'PT',
            'RO',
            'SK',
            'SI',
            'ES',
            'SE',
          ],
        },
        shipping_options: [
          {
            shipping_rate: 'shr_1NxoheI7UcvUqG4sGml0Nsqb',
          },
        ],
        success_url: `${process.env.URL}/ide?success=1`,
        cancel_url: `${process.env.URL}/ide?success=0`,
      });
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
