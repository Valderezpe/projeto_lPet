import Router_Layout from '@/components/Router_Layout';
import { store } from '@/stores/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store} >
      <div className="font-bodyfont bg-gray-300">
      <Router_Layout>
      <Component {...pageProps} />
      </Router_Layout>
  </div>
    </Provider>
    );
  }