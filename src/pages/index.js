import React from "react"
import Typist from "react-typist"

import Layout from "../components/layout"
import StageWheel from "../components/StageWheel"
import SpecializedProcess from "../components/SpecializedProcess"
import SEO from "../components/seo"
import WpToolKit from "../components/WpToolKit"
import Contributors from "../components/Contributors"
import Certifications from "../components/Certifications"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

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

      <Contributors />
      <Certifications />

    </Layout>
  )
}

export default IndexPage
