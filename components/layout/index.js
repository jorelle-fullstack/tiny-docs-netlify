// Dependencies
import { useRouter } from "next/router"

// Components
import Footer from "./Footer"
import Header from "./Header"
// import Loading from '../../components/global/Loading'

const CoreLayout = ({ children }) => {
  const { asPath } = useRouter();
  const removedParams = asPath.split('?')[0]
  const noNavigationRoutes = ["/login", "/register", "/forgot-password", "/pricing", "/checkout", "/checkout/success", "/plans"];

  return (
    <>
       {/* <Loading progress={50}/> */}
      {!noNavigationRoutes.includes(removedParams) && <Header />}
      {children}
      {!noNavigationRoutes.includes(removedParams) && <Footer />}
    </>
  );
};

export default CoreLayout;
