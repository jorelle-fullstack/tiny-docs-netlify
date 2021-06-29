
import '../styles/main.scss'
import CoreLayout from '../components/layout'

//For Swiper
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


function MyApp({ Component, pageProps }) {
  return (
    <CoreLayout>
      <Component {...pageProps} />
    </CoreLayout>
  )
}

export default MyApp
