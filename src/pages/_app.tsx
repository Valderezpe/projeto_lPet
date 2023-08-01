import Router_Layout from '@/components/Router_Layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className="font-bodyfont">
      <Router_Layout>
      <Component {...pageProps} />
      </Router_Layout>
  </div>
    );
  }