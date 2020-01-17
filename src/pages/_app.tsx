import * as React from 'react';
import App, { AppContext } from 'next/app';
import { GlobalStyle } from '../assets/style/globalStyle';
import { Provider } from 'react-redux';
import { Store } from '../store/';

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
        <Provider store={Store}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Provider>
      </>
    );
  }
}
