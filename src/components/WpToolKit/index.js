import React from "react"
import { Link } from "gatsby"
import SiteConfig from "../../../site-config"

const WpToolKit = () => {
  return (
    <div className="row my-5">
      <div className="col-12 col-sm-12 mb-3">
        <h3>What do you get in the WP Toolkit?</h3>
        <p className="lead">
          Our community has built a complete toolkit to help you nurture your
          product to a win over the competition.
        </p>
      </div>
      <div className="d-flex flex-row flex-wrap mb-5">
        {SiteConfig.WpToolKit.map(tool => (
          <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
            <div className="col-12 col-sm-12 text-center d-flex flex-column justify-content-between px-0">
              <div>
                <img
                  src={tool.image}
                  alt={`${tool.title} banner`}
                  style={{ width: "100%", height: "auto" }}
                  className="mb-3"
                />
                <h5 className="twolineHeading">{tool.title}</h5>
                <p className="p-18">{tool.subTitle}</p>
              </div>
              <div>
                <Link
                  className="btn btn-outline-primary"
                  style={{ width: "220px" }}
                  to={tool.link}
                >
                  {tool.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WpToolKit
