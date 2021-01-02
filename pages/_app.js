import React from 'react'
import App from 'next/app'
import { GlobalStyle } from '../styles/global'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <style jsx global>
          {`@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap);`}
        </style>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp