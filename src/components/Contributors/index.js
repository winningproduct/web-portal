import React from "react"
import { ExternalLinks } from "../../utils/constants"
import SiteConfig from "../../../site-config"

const Contributors = () => {
  return (
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
                Help us improve the knowledge model with what you learnt during
                the process. What you learnt the hard way can help someone else
                who is starting just like you. Join our team of knowledge gurus.
              </p>
              <a
                href={ExternalLinks.GITHUB_REPO}
                className="btn btn-outline-secondary"
                target="_blank"
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
                {SiteConfig.Contributors.map(contrib => (
                  <div
                    className="px-1 mb-2"
                    style={{ width: "10%", borderRadius: "50%" }}
                  >
                    <img
                      className="rounded-circle"
                      src={contrib.image}
                      alt="contributor avatar image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contributors
