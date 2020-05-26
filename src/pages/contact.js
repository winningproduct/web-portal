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
              <Link className="navbar-brand" to="/">
                <img src={"../../logo.svg"} className="d-inline-block align-top" alt="" loading="lazy" />
                <span className="ml-3 text-dark h6">WinningProduct</span>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Get start<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" target="_blank" href="https://learn.winningproduct.com">Learn</a>
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
      <div className="row">
        <div className="col-12 col-md-4 contactBanner px-0">
          <img src={"../../contact.jpg"} className="contactBannerImg" loading="lazy" />
          <div className="overlay d-flex px-5 align-items-center justify-content-center">
            <div className="d-flex flex-column">
              <div>
                <h3 className="text-white mb-4">Contribute your knowledge</h3>
                <p className="text-white lead">
                  Help us improve the knowledge model with what you learnt during the process. What you learnt the hard
                  way can help someone else who is starting just like you did. Join our team of knowledge gurus.
                </p>
              </div>
              <div>
                <div className="w-100 d-flex flex-row flex-wrap">
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/2338919?s=400&u=092b53b361fdf892de6a3e6389a0a388d41a39ff&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/36729333?s=400&u=573f0dc1b08576151e23a3c8ac3af139a045a409&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/1892961?s=400&u=0a28b883301177d376a3cf71c52901ea8e22bd93&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars2.githubusercontent.com/u/33232105?s=400&u=c0ef1a77f9ef448dce359aedf72144ed017ba563&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/63349272?s=400&u=f268764151842248ce4e6473ebf18c9bccdf2829&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/2035004?s=400&u=aa074e2b9ef48fbf2fa741e6918ea545024daa36&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/5242449?s=400&u=115d3c9f52917919136638dc5a4b3e67af6390e7&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/57340100?s=400&u=23f60ecaa0256e354bc844886ad10ddf8f773954&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/42619922?s=400&u=d28ae39fb202e2064b7eb155c1ebe0bf645ad575&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/628163?s=400&u=6b0bfa0e86bf558d1f31d6df930a48f7416ba246&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/19371972?s=400&u=f642f2ed66426a79d74307c11764209684f831c6&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/22959475?s=400&u=f0d5fac27ce843d70d6bb1eb26b88816cc916358&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/57340100?s=400&u=23f60ecaa0256e354bc844886ad10ddf8f773954&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/11753507?s=400&u=696875cc7412ee177b7edcf68a9a7546754931c1&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars1.githubusercontent.com/u/17847364?s=400&u=68bf28aff6250bd0a88b22e64b14bd2a86b4038d&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/9572090?s=400&u=05e48d79357016fb66cb884830cb316d267623e2&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars2.githubusercontent.com/u/10953143?s=400&u=4aba7cea1c98a3873e191ba8a59c6cbe4cd20c24&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars1.githubusercontent.com/u/27477126?s=400&u=c5efef05d5f9a45d05dc7f6b55b4c83852ec2665&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center contactForm">
          <h3>Contact us</h3>
          <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="Contact Form" />
            <p hidden>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input type="text" name="name" className="form-control" id="exampleInputPassword1" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
