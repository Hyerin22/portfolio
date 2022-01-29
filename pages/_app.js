import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <div>
  <Component {...pageProps} />
  <Head>
    <title>Hyerin Cheon</title>
    <link rel='icon' href='/Logo.svg' />
  </Head>
    
    </div>

}

export default MyApp
