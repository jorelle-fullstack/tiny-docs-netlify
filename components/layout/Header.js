// Dependencies
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
// Components
import Image from "next/image";
import Link from "next/link";
import { Button } from '../../components/global'
import Logout from "./Logout"

// Assets
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoginState] = useState()
  const [logoutDialog, showLogoutDialog] = useState(false)


  const toggleLogout = () => {
    if (!logoutDialog) {
      showLogoutDialog(true)
    } else {
      showLogoutDialog(false)
    }
  }
  // Check login state with token (temporarily using localStorage for debugging purposes).
  useEffect(() => {
    let token = null
    if (typeof window !== 'undefined') {
      token = window.localStorage.getItem('token')
      if (token) {
        setLoginState(true)
        console.log("logged in!")
      } else {
        setLoginState(false)
        console.log("logged out!")
      }
    }
  })

  const ref = useRef(null);
  return (
    <>
       { logoutDialog ? <Logout callback={toggleLogout} /> : null }
    <header
      className={clsx("header", { "header__menu--open": isOpen })}
      ref={ref}
    >
      <div className="container">
        <div className="header__wrapper">
          <Link href="/">
            <a id="logo" className="menu__list--link">
              <Image src={Logo} className="header__logo" alt="TinyDocs Logo" />
            </a>
          </Link>
          <div className={clsx("menu__wrapper", { menu__open: isOpen })}>
            <ul className="menu__list">
              <li className="menu__list--item">
                <Link href="/parents">
                  <a className="menu__list--link">Parents</a>
                </Link>
              </li>
              <li className="menu__list--item">
                <Link href="/providers">
                  <a className="menu__list--link">Providers</a>
                </Link>
              </li>
              <li className="menu__list--item">
                <Link href="/">
                  <a className="menu__list--link">Teachers</a>
                </Link>
              </li>
              <li className="menu__list--item">
                <Link href="/about-us">
                  <a className="menu__list--link">About Us</a>
                </Link>
              </li>
              { loggedIn ? 
            <li className="menu__list--item">
            <Link href="/my-account">
              <a className="menu__list--link">My Account</a>
            </Link>
          </li> : null  
            }
              { loggedIn ?
              <li className="menu__list--item">
                <button className="logout-button menu__list--link" onClick={toggleLogout}>Log Out</button>
              </li>
              :
                <li className="menu__list--item">
                <Link href="/login">
                  <a className="menu__list--link">Log In</a>
                </Link>
              </li>
              }
            </ul>
          </div>
          <button
            className={clsx("toggle-menu burger-close", {
              "burger-open": isOpen,
            })}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
