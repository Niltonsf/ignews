## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

and 

stripe listen --forward-to localhost:3000/api/webhooks

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configure .env.local

STRIPE_API_KEY= <Your key>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= <Your stripe pubic api key>
STRIPE_WEBHOOK_SECRET= <Your webhooks secret>
STRIPE_SUCCESS_URL= http://localhost:3000/posts
STRIPE_CANCEL_URL= http://localhost:3000/

FAUNADB_KEY= <Your fauna key>

GITHUB_CLIENT_ID= <Your client id>
GITHUB_CLIENT_SECRET= <Your client scecret>

PRISMIC_ACCESS_TOKEN= <Your prismic access token>
PRISMIC_ENTRY_POINT= <Your prismic entry point>

## Listening to stripe
[stripe listen --forward-to localhost:3000/api/webhooks]
