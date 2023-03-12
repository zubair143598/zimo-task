import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";



function MyApp({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />
  )
}

export default MyApp
