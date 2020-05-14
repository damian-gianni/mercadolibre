// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <title>Mercadolibre</title>
          {/* Google Fonts */}
          <link rel="preload" href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2"
            as="font"
            type="font/woff2"
          />
          {/* Font Awesome */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          />
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="description" content="Mercadolibre" />
          <meta name="keywords" content="" />
          <meta name="author" content="Damian Gianni" />
          {/* PWA primary color */}
          <meta name="theme-color" content="#000" />
          <script src="/static/getParams.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Lazy loading images */}
          <script src="/static/js/lazy-load-images.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
