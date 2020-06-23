import React, { useState } from "react"
import { Link } from "gatsby"
import { ExternalLinks } from "../utils/constants"

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  return (
    <div className="container-fluid">
      <div className="row border-bottom">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 sticky-top">
              <Link className="navbar-brand" to="/">
                <img
                  src={"../../logo.svg"}
                  className="d-inline-block align-top"
                  alt=""
                  loading="lazy"
                />
                <span className="ml-3 text-dark h6">WinningProduct</span>
              </Link>
              <button
                onClick={() => setToggleNavbar(!toggleNavbar)}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link px-3" to="/">
                      Get Start<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link px-3"
                      href={ExternalLinks.LEARN_PORTAL}
                      target="_blank"
                    >
                      Learn
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-3" to="/contact">
                      Manage
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-3" to="/contact">
                      Certify
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div
              className={`mobileNav d-lg-none ${toggleNavbar ? "toggle" : ""}`}
            >
              <div>
                <Link className="nav-link px-3" to="/">
                  Get Start<span className="sr-only">(current)</span>
                </Link>
                <a
                  className="nav-link px-3"
                  href="https://learn.winningproduct.com/introduction"
                >
                  Learn
                </a>
                <Link className="nav-link px-3" to="/contact">
                  Manage
                </Link>
                <Link className="nav-link px-3" to="/contact">
                  Certify
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
