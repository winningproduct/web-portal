import React from "react"
import SiteConfig from "../../../site-config"

const LEARN_PORTAL_URL = "https://learn.winningproduct.com"

const SpecializedProcess = () => {
  const openLearnPortal = (path = "") => {
    window.open(`${LEARN_PORTAL_URL}/${path}`, "_blank")
  }

  return (
    <div className="row mt-5 mb-3">
      <div className="col-12 col-sm-12 mb-3">
        <h3>Why products requires a specialized process?</h3>
        <p className="lead">
          Product management is different to bespoke application development.
          Learn how a specialized process keeps your product different from the
          competition. Our learning site has many strategic actions on this,
          here are some featured content areas.
        </p>
      </div>
      <div className="d-flex flex-row flex-wrap">
        {SiteConfig.SpecializedProcess.map(sp => (
          <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
            <div
              className="col-12 col-sm-12 px-0 blogPreview"
              onClick={() => openLearnPortal(sp.link)}
            >
              <img
                src={sp.image}
                alt={`${sp.title} banner`}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="px-4 py-4">
                <h5>{sp.title}</h5>
                <p className="mb-0 p-18">{sp.subTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecializedProcess
