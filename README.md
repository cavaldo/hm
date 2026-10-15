# D&K — Next.js + Tailwind v4
```
npm install
npm run dev     # http://localhost:3000
```
- Colors/fonts: `app/globals.css` (@theme tokens)
- Illustrations: `lib/scenes.ts` (swap for real photos with next/image)
- Contact form posts to `app/api/contact/route.ts` (add your email provider)

## Editing website text with Sanity

The editor is hosted by Sanity at a `*.sanity.studio` address; it is not served
from this website, and editors do not need GitHub access.

1. Create a Sanity account and project at
   [sanity.io/manage](https://www.sanity.io/manage). Use the existing
   `production` dataset, or change `NEXT_PUBLIC_SANITY_DATASET` consistently if
   you choose another name.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID`
   to the project ID from Sanity. Set `NEXT_PUBLIC_SANITY_DATASET=production`.
   The current Sanity CLI requires Node.js 22.12 or newer for Studio deployment.
3. Sign in to Sanity from this project with `npx sanity login`, then run
   `npm run sanity:deploy`. Follow the prompt to choose a hosted Studio URL.
   This deploys the editor to Sanity; it does not deploy or require GitHub.
4. In the Sanity project settings, add the hosted Studio URL
   (for example, `https://your-studio.sanity.studio`) to the API CORS origins
   and allow credentials so editors can sign in.

Install the starter English and Czech content into the project once:

1. Create a Sanity API token with write access and temporarily set it as
   `SANITY_API_WRITE_TOKEN` in `.env.local`.
2. Run `npm run sanity:import`.
3. Remove the write token from `.env.local` after the import. Do not share or
   deploy this token.

Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in your
website host's environment settings as well. The site reads published content
from Sanity and picks up changes within about a minute. Invite business editors
to the Sanity project and share the hosted `*.sanity.studio` URL with them; they
can edit and publish in their browser without GitHub. Until the site is
configured with a project ID, it continues to use the existing locale JSON
files.
