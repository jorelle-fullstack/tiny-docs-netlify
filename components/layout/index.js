import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import Loading from '../../components/global/Loading'
const CoreLayout = ({ children }) => {
  const { asPath } = useRouter();
  console.log(asPath)

  const removedParams = asPath.split('?')[0]

  const noNavigationRoutes = ["/login", "/register", "/forgot-password", "/pricing", "/checkout", "/plans"];

  return (
    <>
      <Loading progress={50}/>
      {!noNavigationRoutes.includes(removedParams) && <Header />}
      {children}
      {!noNavigationRoutes.includes(removedParams) && <Footer />}
    </>
  );
};

export default CoreLayout;
