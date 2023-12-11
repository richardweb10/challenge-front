import '@/styles/globals.css';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../components/wrapper';
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(withReduxSaga(App));