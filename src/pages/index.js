import React, { useState } from "react"
import Typist from "react-typist"
import { Link } from "gatsby"
import SiteConfig from "../../site-config"
import StageLayout from "../components/StageWheel/Stages"
import Header from "../components/Header"
import StageWheel from "../components/StageWheel"
import SpecializedProcess from "../components/SpecializedProcess"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WpToolKit from "../components/WpToolKit"

const IndexPage = () => {
  const LEARN_PORTAL_URL = "https://learn.winningproduct.com"

  return (
    <Layout>
      <SEO title="Home" />
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2 text-center my-5">
            <h1>YOUR TOOL KIT TO BUILD</h1>
            <h1 className="d-lg-flex flex-row justify-content-center align-items-center">
              A &nbsp;
              <Typist>
                <span style={{ color: "#8E44AD" }}>KICKASS</span>
                <Typist.Backspace count={7} delay={3000} />
                <span style={{ color: "#8E44AD" }}>WINNING</span>
              </Typist>
              &nbsp; SOFTWARE PRODUCT
            </h1>
          </div>

          <StageWheel />
        </div>
        <SpecializedProcess />

        <WpToolKit />
      </div>

      <div className="container-fluid">
        <div
          className="row my-3 py-5"
          style={{
            backgroundImage: "url('../../bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mt-5 mb-3">
                <h3 className="text-white mb-4">Contribute your knowledge</h3>
                <p className="text-white lead">
                  Help us improve the knowledge model with what you learnt
                  during the process. What you learnt the hard way can help
                  someone else who is starting just like you. Join our team of
                  knowledge gurus.
                </p>
                <a
                  href="https://github.com/winningproduct/learn-portal"
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="../../github.png"
                    style={{ height: "20px", width: "auto" }}
                    className="mr-2"
                  />
                  Contribute
                </a>
              </div>
              <div className="col col-sm-12 col-md-5 offset-md-1 my-5">
                <div className="w-100 d-flex flex-row flex-wrap">
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/2338919?s=400&u=092b53b361fdf892de6a3e6389a0a388d41a39ff&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars0.githubusercontent.com/u/36729333?s=400&u=573f0dc1b08576151e23a3c8ac3af139a045a409&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/1892961?s=400&u=0a28b883301177d376a3cf71c52901ea8e22bd93&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars2.githubusercontent.com/u/33232105?s=400&u=c0ef1a77f9ef448dce359aedf72144ed017ba563&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/63349272?s=400&u=f268764151842248ce4e6473ebf18c9bccdf2829&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/2035004?s=400&u=aa074e2b9ef48fbf2fa741e6918ea545024daa36&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/5242449?s=400&u=115d3c9f52917919136638dc5a4b3e67af6390e7&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/57340100?s=400&u=23f60ecaa0256e354bc844886ad10ddf8f773954&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars0.githubusercontent.com/u/42619922?s=400&u=d28ae39fb202e2064b7eb155c1ebe0bf645ad575&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars0.githubusercontent.com/u/628163?s=400&u=6b0bfa0e86bf558d1f31d6df930a48f7416ba246&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/19371972?s=400&u=f642f2ed66426a79d74307c11764209684f831c6&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/22959475?s=400&u=f0d5fac27ce843d70d6bb1eb26b88816cc916358&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars3.githubusercontent.com/u/11753507?s=400&u=696875cc7412ee177b7edcf68a9a7546754931c1&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars1.githubusercontent.com/u/17847364?s=400&u=68bf28aff6250bd0a88b22e64b14bd2a86b4038d&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars0.githubusercontent.com/u/9572090?s=400&u=05e48d79357016fb66cb884830cb316d267623e2&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars2.githubusercontent.com/u/10953143?s=400&u=4aba7cea1c98a3873e191ba8a59c6cbe4cd20c24&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={
                        "https://avatars1.githubusercontent.com/u/27477126?s=400&u=c5efef05d5f9a45d05dc7f6b55b4c83852ec2665&v=4"
                      }
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-amila.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-aravinthan.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-arshad.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-chinthaka.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-helani.jpeg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-kavindi.jpeg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-nuwan.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-1.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-2.png"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-3.png"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-4.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-5.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-6.png"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-7.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-8.jpg"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-9.png"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={"../../git-10.png"}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col col-sm-12 mb-3">
            <h3>Become winning product certified</h3>
            <p className="lead">
              Winning Product certifications are organized into three levels.
            </p>
          </div>
          <div className="d-flex flex-row flex-wrap">
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justfy-content-around py-5">
                <div>
                  <img
                    src={"../../level1.svg"}
                    alt="Explore – Value proposition image"
                    style={{ width: "auto", height: "60px" }}
                    className="mb-3"
                  />
                  <h5 className="twolineHeading">Professional Certification</h5>
                  <p className="p-18 mb-2" style={{ height: "48px" }}>
                    <b>Recommended start</b>
                  </p>
                  <p className="p-18">
                    Ideal for individuals just starting in technology or
                    thinking about a career change
                  </p>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="btn btn-outline-primary"
                    style={{ width: "220px" }}
                  >
                    Professional Certifications
                  </Link>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justfy-content-around py-5">
                <div>
                  <img
                    src={"../../level2.svg"}
                    alt="Explore – Value proposition image"
                    style={{ width: "auto", height: "60px" }}
                    className="mb-3"
                  />
                  <h5 className="twolineHeading">Expert Certification</h5>
                  <p className="p-18 mb-2" style={{ height: "48px" }}>
                    <b>With comprehensive working experience</b>
                  </p>
                  <p className="p-18">
                    It is helpful to have related Professional certification but
                    is not required
                  </p>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="btn btn-outline-primary"
                    style={{ width: "220px" }}
                  >
                    Expert Certifications
                  </Link>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justfy-content-around py-5">
                <div>
                  <img
                    src={"../../level3.svg"}
                    alt="Explore – Value proposition image"
                    style={{ width: "auto", height: "60px" }}
                    className="mb-3"
                  />
                  <h5 className="twolineHeading">Ninja Certification</h5>
                  <p className="p-18 mb-2" style={{ height: "48px" }}>
                    <b>Comprehensive working experience with impact</b>
                  </p>
                  <p className="p-18">
                    Ninja certification requires a expert level certification
                  </p>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="btn btn-outline-primary"
                    style={{ width: "220px" }}
                  >
                    Ninja Certifications
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid border-top py-4 mt-5">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 text-center">
                <p className="mb-0">
                  <b>
                    Hosted with ❤️ by{" "}
                    <a
                      href="https://www.99xtechnology.com/"
                      style={{ color: "#8E44AD" }}
                    >
                      99X Technology
                    </a>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
