import { AppProps } from 'next/app'
import { FC } from 'react'

if (process.env.NODE_ENV === 'development') {
  require('../mocks')
}
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
