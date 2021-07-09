import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const CoreLayout = ({ children }) => {
  const { asPath } = useRouter();
  console.log(asPath)

  const removedParams = asPath.split('?')[0]

  const noNavigationRoutes = ["/login", "/register", "/forgot-password", "/pricing", "/checkout", "/plans"];

  return (
    <>
      {!noNavigationRoutes.includes(removedParams) && <Header />}
      {children}
      {!noNavigationRoutes.includes(removedParams) && <Footer />}
    </>
  );
};

export default CoreLayout;
