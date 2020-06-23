import React, { useState } from "react"
import SvgWheel from "./SvgWheel"
import StageLayout from "./Stages"
import SiteConfig from "../../../site-config"
const LEARN_PORTAL_URL = "https://learn.winningproduct.com"

const StageWheel = () => {
  const [stage, setStage] = useState("EXPLORE")

  const renderStage = () => {
    console.log("rendering")
    // Window is not available in server side rendering.
    if (typeof window !== `undefined`) {
      var windowWidth = window.innerWidth
      const isMobileDevice = windowWidth <= 768

      if (isMobileDevice) {
        handleMobileViewSvgClick(stage)
        return
      }
    }

    return <StageLayout learn={openLearnPortal} stage={stage} />
  }

  const openLearnPortal = (path = "") => {
    window.open(`${LEARN_PORTAL_URL}/${path}`, "_blank")
  }

  const handleMobileViewSvgClick = stage => {
    const selectedStage = SiteConfig.Stages.find(stg => stg.name === stage)
    openLearnPortal(selectedStage.learnPortalLinks.main)
  }

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-5">
      <div className="d-flex flex-row justify-content-lg-between justify-content-center">
        <div>
          <SvgWheel stage={stage} setStage={setStage} />
        </div>
        <div className="d-none d-lg-block">{renderStage()}</div>
      </div>
    </div>
  )
}

export default StageWheel
