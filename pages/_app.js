import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux'
//import { useStore } from '../store'


import '../styles/globals.css'
import styles from '../styles/Home.catalogue.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
