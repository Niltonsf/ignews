## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configure .env.local

STRIPE_API_KEY= <Your key>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= <Your stripe pubic api key>
STRIPE_WEBHOOK_SECRET= <Your webhooks secret>
STRIPE_SUCCESS_URL= http://localhost:3000/posts
STRIPE_CANCEL_URL= http://localhost:3000/

GITHUB_CLIENT_ID= <Your client id>
GITHUB_CLIENT_SECRET= <Your client scecret>

FAUNADB_KEY= <Your fauna key>

## Listening to stripe
[stripe listen --forward-to localhost:3000/api/webhooks]
