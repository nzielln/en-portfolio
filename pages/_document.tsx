import { Html, Head, Main, NextScript } from 'next/document'
import { PRT_HOME_PAGE_SECTION } from '../src/CONSTANTS'
import { Provider } from 'react-redux'
import { store } from '../src/STATE AND REDUX/Store'
import { useState } from 'react'
import Menu from '../src/FRONTEND/COMPONENTS/Menu'

export default function Document() {
    const _openMenu = () => {}

  return (
      <Html lang="en" id={PRT_HOME_PAGE_SECTION}>
          <Head />
          <body>
              <div className="prt_body">
                  <Main />
                  <NextScript />
              </div>
          </body>
      </Html>
  )
}
