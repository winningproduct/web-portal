import React from "react"
import SiteConfig from "../../../site-config"

const AvatarsList = () => (
  <div className="w-100 d-flex flex-row flex-wrap">
    {SiteConfig.Contributors.map(contrib => (
      <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
        <img
          className="rounded-circle"
          src={contrib.image}
          alt="contributor avatar"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    ))}
  </div>
)

export default AvatarsList
