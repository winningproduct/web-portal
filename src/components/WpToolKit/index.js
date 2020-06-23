import React from "react"
import { Link } from "gatsby"

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
        <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
          <div className="col-12 col-sm-12 text-center d-flex flex-column justify-content-between px-0">
            <div>
              <img
                src={"../../learnNew.png"}
                alt="Explore – Value proposition image"
                style={{ width: "100%", height: "auto" }}
                className="mb-3"
              />
              <h5 className="twolineHeading">
                Learn to build a winning product
              </h5>
              <p className="p-18">
                Learn from the community’s best success stories
              </p>
            </div>
            <div>
              <Link
                className="btn btn-outline-primary"
                style={{ width: "220px" }}
                to="/contact"
              >
                Download Canvas
              </Link>
            </div>
          </div>
        </div>
        <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
          <div className="col-12 col-sm-12 text-center d-flex flex-column justify-content-between px-0">
            <div>
              <img
                src={"../../manage.png"}
                alt="Explore – Value proposition image"
                style={{ width: "100%", height: "auto" }}
                className="mb-3"
              />
              <h5 className="twolineHeading">Manage your product strategy</h5>
              <p className="p-18">
                Learn from the community’s best success stories
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="btn btn-outline-primary"
                style={{ width: "100%", height: "auto" }}
              >
                Go to Strategy Tool
              </Link>
            </div>
          </div>
        </div>
        <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
          <div className="col-12 col-sm-12 text-center d-flex flex-column justify-content-between px-0">
            <div>
              <img
                src={"../../certifyNew.png"}
                alt="Explore – Value proposition image"
                style={{ width: "100%", height: "auto" }}
                className="mb-3"
              />
              <h5 className="twolineHeading">Get your team certified</h5>
              <p className="p-18">
                Get your team certified on product building. Let’s help them
                think business first
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="btn btn-outline-primary"
                style={{ width: "220px" }}
              >
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WpToolKit
