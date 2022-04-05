import '../styles/globals.css'
import React from 'react'
import App, { Container } from 'next/app'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ Component, pageProps: {session, ...pageProps}}) {
  return (
    < SessionProvider session = { session } >
    < Component {...pageProps} />
    </ SessionProvider >
  );
}
