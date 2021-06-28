import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(null);

  return (
    <header
      className={clsx("header", { "header__menu--open": isOpen })}
      ref={ref}
    >
      <div className="container">
        <div className="header__wrapper">
          <Link href="/">
            <a className="menu__list--link">
              <Image src={Logo} className="header__logo" alt="TinyDocs Logo" />
            </a>
          </Link>
          <div className={clsx("menu__wrapper", { menu__open: isOpen })}>
            <ul className="menu__list">
              <li className="menu__list--item">
                <Link href="/">
                  <a className="menu__list--link">Parents</a>
                </Link>
              </li>
              <li className="menu__list--item">
                <Link href="/">
                  <a className="menu__list--link">Providers</a>
                </Link>
              </li>
              <li className="menu__list--item">
                <Link href="/">
                  <a className="menu__list--link">Teachers</a>
                </Link>
              </li>
              <li className="menu__list--item">
                <Link href="/">
                  <a className="menu__list--link">About Us</a>
                </Link>
              </li>
              <li className="menu__list--item">
                <Link href="/">
                  <a className="menu__list--link">Log In</a>
                </Link>
              </li>
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
  );
};

export default Header;
