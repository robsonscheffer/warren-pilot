import React from 'react'
import ThemeProvider, { ReactUI } from '@warren/ui/src/Theme'

import GlobalStyles from '../styles/global'

import App from 'next/app'
import { END } from 'redux-saga'
import { SagaStore, wrapper } from '../store'

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    }

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END)
      await ctx.store.sagaTask.toPromise()
    }

    // 3. Return props
    return {
      pageProps,
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={ReactUI}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default wrapper.withRedux(MyApp)
