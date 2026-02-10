# Dealora Landing

## Run locally

```bash
cd landing
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Create a new Vercel project and select the `landing/` directory as the root.
2. Build command: `npm run build`
3. Output: `.next`
4. Deploy.

## Connect dealora.app domain

1. In Vercel, open your project and go to `Settings` -> `Domains`.
2. Add `dealora.app` and follow the DNS instructions provided by Vercel.
3. Set the primary domain to `dealora.app` once DNS is verified.
