
import '../styles/main.scss'
import CoreLayout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <CoreLayout>
      <Component {...pageProps} />
    </CoreLayout>
  )
}

export default MyApp
