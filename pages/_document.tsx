import { useStaticRendering } from 'mobx-react';
import { Head, Html, Main, NextScript } from 'next/document';

import { isServer } from '../models/Base';
import { DefaultImage } from './api/lark/file/[id]';

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer());

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href={DefaultImage} />

        <link rel="manifest" href="/manifest.json" />
        <script src="https://polyfill.kaiyuanshe.cn/feature/PWAManifest.js"></script>

        <link
          rel="stylesheet"
          href="https://unpkg.com/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/idea-react@0.27.11/dist/index.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        />
        <script src="https://unpkg.com/cookie-store@3.0.0/index.js"></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
