// frontend/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* preload локального OTF (лежит в /public/fonts) */}
        <link
          rel="preload"
          href="/fonts/times-new-roman-mt-condensed.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Inter for figma-text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}