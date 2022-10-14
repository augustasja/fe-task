import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout'
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }: AppProps) {
  const metaTitle = Component.defaultProps!.title;
  const metaDescription = Component.defaultProps!.description;

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  )
}

export default MyApp
