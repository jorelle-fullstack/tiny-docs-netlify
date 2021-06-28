import Link from "next/link";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__col">
            <ul className="footer__list">
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Parents</a>
                </Link>
              </li>
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Providers</a>
                </Link>
              </li>
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Teachers</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <ul className="footer__list">
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Home</a>
                </Link>
              </li>
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Blogs</a>
                </Link>
              </li>
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Videos</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <ul className="footer__list">
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Log In</a>
                </Link>
              </li>
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">About Us</a>
                </Link>
              </li>
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <ul className="footer__list">
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Terms &amp; Conditions</a>
                </Link>
              </li>
              <li className="footer__list--item">
                <Link href="/">
                  <a className="footer__list--link">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <div className="footer__social">
              <p>Connect with Us</p>
              <ul className="footer__social-list">
                <li className="footer__social-list--item">
                  <Link href="/">
                    <a
                      className="footer__social-list--link"
                      href="https://www.instagram.com/"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </Link>
                </li>
                <li className="footer__social-list--item">
                  <Link href="/">
                    <a
                      className="footer__social-list--link"
                      href="https://www.twitter.com/"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Link>
                </li>
                <li className="footer__social-list--item">
                  <Link href="/">
                    <a
                      className="footer__social-list--link"
                      href="https://www.facebook.com/"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </Link>
                </li>
                <li className="footer__social-list--item">
                  <Link href="/">
                    <a
                      className="footer__social-list--link"
                      href="https://www.youtube.com/"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
