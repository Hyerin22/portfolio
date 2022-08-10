import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <div>
  <Component {...pageProps} />
  <Head>
    <title>Rina Cheon</title>
    <link rel='icon' href='/Rina.svg' />
  </Head>
    
    </div>

}

export default MyApp
