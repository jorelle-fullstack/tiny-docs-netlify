import Footer from './Footer'
import Header from './Header'

const CoreLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default CoreLayout