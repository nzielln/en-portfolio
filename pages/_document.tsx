import { Html, Head, Main, NextScript } from 'next/document'
import { PRT_HOME_PAGE_SECTION } from '../src/CONSTANTS'

export default function Document() {
  return (
    <Html lang="en" id={PRT_HOME_PAGE_SECTION}>
      <Head />
      <body>
        <div className='prt_body'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
