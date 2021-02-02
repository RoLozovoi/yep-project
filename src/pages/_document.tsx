import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { Locale } from '../translations/types';
import { DocumentInitialProps } from 'next/dist/next-server/lib/utils';

class MyDocument extends Document<{ locale: Locale }> {
  // check how to pass custom props to custom document
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    console.log('this.props.locale', this.props.locale);
    return (
      <Html lang={this.props.locale || 'ru'}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
