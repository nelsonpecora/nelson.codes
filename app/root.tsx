import type { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import globalStyles from './global.css';
import Contact from './components/Contact';

export const links: LinksFunction = () => [
  { rel: 'manifest', href: 'manifest.json' },
  { rel: 'icon', type: 'image/png', href: 'favicon.png' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Noto+Sans:ital@0;1&family=Chakra+Petch:wght@600&display=swap',
  },
  { rel: 'stylesheet', href: globalStyles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D1321" />
        {/* Descriptions and images don't change on different pages */}
        <meta
          name="description"
          content="JavaScript Developer and architect of content management systems"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="JavaScript Developer and architect of content management systems"
        />
        <meta property="og:image" content="/logo-social.png" />

        {/* Twitter (and other social media that uses these) */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:description"
          content="JavaScript Developer and architect of content management systems"
        />
        <meta property="twitter:image" content="/logo-social.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Contact />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script async src="https://web.mainframe.club/embed.js"></script>
      </body>
    </html>
  );
}
