import "../src/STYLE/css/style.css"
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { store } from "../src/STATE AND REDUX/Store"
import { Provider } from "react-redux"
import Cursor from "../src/FRONTEND/COMPONENTS/Cursor"
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
              {/* <Cursor /> */}
              <Component {...pageProps} />
      </Provider>
  )
}
