/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
            { logoTheme === 'dark' && <img src="img/logo-dark.png" alt="" /> }
            { logoTheme === 'light' && <img src="img/logo-light.png" alt="" /> }
            { !logoTheme && <img src="img/logo-dark.png" alt="" /> }
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><Link href ="/home-index">
              <span className="nav-link" role="button">
                Home
              </span>
              </Link>
            </li>
            <li className="nav-item"><Link href ="/profile-index">
              <span className="nav-link dropdown-toggle" role="button">
                Profile
              </span>
              </Link>
            </li>
            <li className="nav-item"><Link href ="/portfolio-index">
              <span className="nav-link dropdown-toggle" role="button">
                Portfolio
              </span>
              </Link>
            </li>
            <li className="nav-item"><Link href="/brand-index">
              <span className="nav-link dropdown-toggle" role="button">
                Clients
              </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-index"><a className="nav-link">Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;