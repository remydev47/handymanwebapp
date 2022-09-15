import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
