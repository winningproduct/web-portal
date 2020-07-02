import React, { useRef, useEffect, useState } from "react"

import { Stages } from "../../../site-config"

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const StageLayout = ({ learn, stage }) => {
  const [expand, setExpanded] = useState(false)

  const previousStage = usePrevious(stage)
  console.log("dsds", previousStage)
  const stageNode = Stages.find(stg => stg.name === stage)

  const subtopics = stageNode.learnPortalLinks.sub

  return (
    <div
      style={{
        border: "2px solid #ffbf40",
        backgroundColor: "#fff",
        width: "420px",
      }}
    >
      <div className="px-3 py-3">
        <p className="mb-0 lead" style={{ fontWeight: "400" }}>
          {stageNode.title}
        </p>
        <p className="mb-0 p-18">{stageNode.subtitle}</p>
      </div>
      <div className="px-3">
        {subtopics.slice(0, 5).map(topic => (
          <div
            className="d-flex align-items-center mb-0 px-3 mb-2 btn-substages"
            onClick={() =>
              learn(`${stageNode.learnPortalLinks.main}/${topic.link}`)
            }
          >
            <p className="mb-0">{topic.title}</p>
          </div>
        ))}

        {expand &&
          subtopics.slice(5, subtopics.length).map(topic => (
            <div
              className="d-flex align-items-center mb-0 px-3 mb-2 btn-substages"
              onClick={() =>
                learn(`${stageNode.learnPortalLinks.main}/${topic.link}`)
              }
            >
              <p className="mb-0">{topic.title}</p>
            </div>
          ))}

        {subtopics.length > 5 && (
          <div
            style={{
              height: "36px",
              backgroundColor: "#ffffff",
              color: "#2ECC71",
              border: "1px solid #ffbf40",
              cursor: "pointer",
            }}
            className="d-flex align-items-center mb-0 px-3 mb-2 justify-content-center"
            onClick={() => setExpanded(!expand)}
          >
            <p className="mb-0">
              {expand ? "Hide" : `+${subtopics.length - 5} more`}
            </p>
          </div>
        )}
      </div>
      <div
        className="py-3 mb-0 mt-5 text-center"
        style={{ backgroundColor: "#ffbf40", color: "#fff", cursor: "pointer" }}
        onClick={() => learn(stageNode.learnPortalLinks.main)}
      >
        <p className="mb-0 text-center">
          <span className="text-dark">{`LEARN ${stageNode.name}`}</span>
        </p>
      </div>
    </div>
  )
}

export default StageLayout
