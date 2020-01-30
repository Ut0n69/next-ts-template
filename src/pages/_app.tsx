import * as React from 'react';
import App, { AppContext } from 'next/app';
import { GlobalStyle } from '../assets/style/globalStyle';
import { Provider } from 'react-redux';
import { Store } from '../store/';
import Head from 'next/head';
import Menu from '../components/Menu';

const title = 'Next.js Sample';
const description = 'This is a dscription.';
const keywords = ['転職サイト', '求人'];

export default class extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="index, follow" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords.join(',')} />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:locale" content="ja_JP" />
        </Head>
        <Provider store={Store}>
          <Menu />
          <Component {...pageProps} />
          <GlobalStyle />
        </Provider>
      </>
    );
  }
}
