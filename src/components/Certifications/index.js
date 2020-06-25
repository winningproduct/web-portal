import React from "react"
import { Link } from "gatsby"
import SiteConfig from "../../../site-config"

const Certifications = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col col-sm-12 mb-3">
          <h3>Become winning product certified</h3>
          <p className="lead">
            Winning Product certifications are organized into three levels.
          </p>
        </div>
        <div className="d-flex flex-row flex-wrap">
          {SiteConfig.Certifications.map(cert => (
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justfy-content-around py-5">
                <div>
                  <img
                    src={cert.image}
                    alt={`${cert.title} banner`}
                    style={{ width: "auto", height: "60px" }}
                    className="mb-3"
                  />
                  <h5 className="twolineHeading">{cert.title}</h5>
                  <p className="p-18 mb-2" style={{ height: "48px" }}>
                    <b>{cert.subTitle}</b>
                  </p>
                  <p className="p-18">{cert.description}</p>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="btn btn-outline-primary"
                    style={{ width: "220px" }}
                  >
                    {cert.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications
