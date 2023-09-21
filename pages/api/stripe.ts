import type { NextApiRequest, NextApiResponse } from 'next';
import { Item, ResponseData } from '../../types/shared';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
  typescript: true,
});

const products = new Map();
products.set('ide_vinyl', {
  name: 'In Death’s Eyes - Vinyl',
  priceInCents: 3200,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
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
        success_url: `${process.env.URL}/ide?success=1`,
        cancel_url: `${process.env.URL}/ide?success=0`,
      });
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
