# Storyblok Next.js Boilerplate

Example boilerplate using
- Storyblok CMS
- Next.js 13
- React 18
- TailwindCSS

<a href="https://storyblok-boilerplate.vercel.app/">Live example</a>

## Setup

1. Init the repo
```console
git clone https://github.com/philparzer/storyblok-boilerplate
```
```console
cd storyblok-boilerplate
```
```console
npm i
```
---
2. Create a copy of `.env.local.example` and rename it to `.env.local`
---
3. Create a new Space in Storyblok
---
4. Set your environment variables in `.env.local`:
- STORYBLOK_API_TOKEN = the predefined token tagged PREVIEW in your Storyblok Space's settings
- PREVIEW_SECRET = pick a random string
---
5. Create a few pages in Storyblok and add some content
> **Note** Don't forget to publish

---
6. In Storyblok click on `Change URL`and add the following URLs:

- Default: https://localhost:3010/
- Preview: https://localhost:3010/api/preview?secret="PREVIEW_SECRET"&slug=
> **Note** Don't forget to set PREVIEW_SECRET to the value set in your .env file
- Exit Preview: https://localhost:3010/api/exit-preview?slug=
---
7. Start your dev server
```
npm run dev
```
```
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```
> **Note** you need a proxy for storyblok to work, if you don't have local-ssl-proxy installed, <a href="https://www.storyblok.com/faq/setup-dev-server-https-proxy">check this tutorial</a>

You're all set 🎉 
Navigate to https://localhost:3010 or use the Storyblok visual editor

<br>
<br>

## Deploy

- I recommend using Vercel
- Set the environment variables in Vercel before building
> **Warning** If you get a build error, make sure you have published your pages at least once
- Add your live URLs in Storyblok, following the same schema as before (preview, exit preview)
> **Note** you'll most likely want your default URL to point at your live url and not your local dev server (you can add localhost as separate URLs)

## Additional Reference:

<a href="https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes"> Storyblok Tutorial</a>
