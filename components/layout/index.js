// Dependencies
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"

// Components
import Footer from "./Footer"
import Header from "./Header"



// import Loading from '../../components/global/Loading'
const CoreLayout = ({ children }) => {
  const { asPath } = useRouter();
  const [loggedIn, setLoginState] = useState(false)
  
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

export async function getServerSideProps(ctx) {
  /*
  const { user, token } = cookies(ctx)
  const req = await ctx.req.headers.cookie
  let loggedIn = false
  if (token) {
    loggedIn = true
  }
  return {
    props: { loggedIn: loggedIn, token: token, user: user }
  } */
}

export default CoreLayout;
