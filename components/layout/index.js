import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const CoreLayout = ({ children }) => {
  const { asPath } = useRouter();

  const noNavigationRoutes = ["/login", "/register", "/forgot-password", "/pricing"];

  return (
    <>
      {!noNavigationRoutes.includes(asPath) && <Header />}
      {children}
      {!noNavigationRoutes.includes(asPath) && <Footer />}
    </>
  );
};

export default CoreLayout;
