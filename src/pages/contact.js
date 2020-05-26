import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="container-fluid">
      <div className="row border-bottom">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 sticky-top">
              <a className="navbar-brand" href="#">
              <img src={"../../logo.svg"} className="d-inline-block align-top" alt="" loading="lazy"/>
                <span className="ml-3 text-dark h6">WinningProduct</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Get start<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Learn</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Manage</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Certify</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
