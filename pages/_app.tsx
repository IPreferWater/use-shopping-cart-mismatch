//import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import Layout from "../components/Layout";
export default function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
