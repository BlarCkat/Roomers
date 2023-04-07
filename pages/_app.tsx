import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutView from './layout'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <LayoutView>
  <Component {...pageProps} />
  </LayoutView>
  </>
}
