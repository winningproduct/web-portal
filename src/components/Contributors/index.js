import React from "react"
import { ExternalLinks } from "../../utils/constants"
import AvatarsList from "./AvatarsList";

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
                rel="noreferrer"
              >
                <img
                  src="../../github.png"
                  style={{ height: "20px", width: "auto" }}
                  className="mr-2"
                  alt="github logo"
                />
                Contribute
              </a>
            </div>
            <div className="col col-sm-12 col-md-5 offset-md-1 my-5">
              <AvatarsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contributors
