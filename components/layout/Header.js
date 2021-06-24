import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Image src={Logo} className="header__logo" alt="TinyDocs Logo" />
          <ul className="header__list">
            <li className="header__list--item">
              <Link href="/">
                <a className="header__list--link">Parents</a>
              </Link>
            </li>
            <li className="header__list--item">
              <Link href="/">
                <a className="header__list--link">Providers</a>
              </Link>
            </li>
            <li className="header__list--item">
              <Link href="/">
                <a className="header__list--link">Teachers</a>
              </Link>
            </li> 
            <li className="header__list--item">
              <Link href="/">
                <a className="header__list--link">About Us</a>
              </Link>
            </li>
            <li className="header__list--item">
              <Link href="/">
                <a className="header__list--link">Log In</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
