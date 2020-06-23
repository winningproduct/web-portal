import React from "react"

const SvgWheel = props => {
  const { stage, setStage } = props
  return (
    <div>
      <svg
        width="474px"
        height="471px"
        viewBox="0 0 474 471"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="wheel-new" transform="translate(0.508789, 0.000000)">
            <g id="center" transform="translate(112.000000, 111.000000)">
              <circle
                id="Oval"
                stroke="#8E44AD"
                stroke-width="4"
                cx="125"
                cy="125"
                r="125"
              ></circle>
              <text
                id="PRODUCT-MINDSET"
                font-family="Arial-BoldMT, Arial"
                font-size="32"
                font-weight="bold"
                letter-spacing="0.666666667"
                fill="#8E44AD"
              >
                <tspan x="43.0572917" y="118">
                  PRODUCT{" "}
                </tspan>
                <tspan x="50.1666667" y="154">
                  MINDSET
                </tspan>
              </text>
            </g>
            <g
              id="step-8"
              opacity="0.5"
              transform="translate(69.491211, 0.000000)"
              onClick={() => setStage("RETIRE")}
              style={{ cursor: "pointer" }}
              className={`default ${stage === "RETIRE" ? "active" : ""}`}
            >
              <path
                d="M86.1410506,91.3762552 C110.404959,77.6492296 137.777556,70.3888756 165.641477,70.2894271 C165.431035,70.2894271 166.155892,70.2894271 165.968832,70.2894271 L165.968832,0 C103.730749,0.447446217 44.1467872,25.3201453 0,69.2819453 L49.6176193,119 C60.4708211,108.157996 72.7604187,98.8630118 86.1410506,91.3762552 Z"
                id="Path"
                fill="#FF715E"
                fillRule="nonzero"
              ></path>
              <text
                id="Retire"
                transform="translate(90.028320, 53.859375) rotate(338.000000) translate(-90.028320, -53.859375) "
                fontFamily="Futura-Bold, Futura"
                fontSize="18"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                <tspan x="59.0143203" y="60.859375">
                  RETIRE
                </tspan>
              </text>
            </g>
            <g
              id="step-7"
              className={`default ${stage === "HARVEST" ? "active" : ""}`}
              transform="translate(0.000000, 70.000000)"
              onClick={() => setStage("HARVEST")}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M70.6011874,166 C70.764006,122.231612 88.3493193,80.3189721 119.491211,49.4760635 L69.8533476,0 L69.6663877,0.209743086 C25.6557865,44.0130337 0.791080728,103.387798 0.491210938,165.394076 L70.6011874,165.394076 L70.6011874,166 Z"
                id="Path"
                fill="#5FD996"
                fillRule="nonzero"
              ></path>
              <text
                id="HARVEST"
                transform="translate(49.500000, 90.066406) rotate(293.000000) translate(-49.500000, -90.066406) "
                fontFamily="Futura-Bold, Futura"
                fontSize="18"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                <tspan x="5.751" y="97.0664063">
                  HARVEST
                </tspan>
              </text>
            </g>
            <g
              id="step-6"
              className={`default ${stage === "OPTIMIZE" ? "active" : ""}`}
              transform="translate(0.491211, 235.000000)"
              onClick={() => setStage("OPTIMIZE")}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M70.1375246,0 L70.1375246,0.586211738 L0,0.586211738 C0.293826974,62.9829155 25.1687724,122.733303 69.2023576,166.812412 L69.389391,167 L119,117.242348 C87.8608603,86.2030525 70.2854592,44.0320148 70.1375246,0 Z"
                id="Path"
                fill="#FFBF40"
                fillRule="nonzero"
              ></path>
              <text
                id="Optimize"
                transform="translate(50.901367, 76.483398) rotate(247.000000) translate(-50.901367, -76.483398) "
                fontFamily="Futura-Bold, Futura"
                fontSize="18"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                <tspan x="4.42536719" y="83.4833984">
                  OPTIMIZE
                </tspan>
              </text>
            </g>
            <g
              id="step-5"
              className={`default ${stage === "BUILD" ? "active" : ""}`}
              transform="translate(69.491211, 353.000000)"
              onClick={() => setStage("BUILD")}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M165.533577,48.2790698 L166,48.2790698 C122.27835,48.0969449 80.3873611,30.7525401 49.3942119,0 L0,49.3488372 C44.3101995,92.5581395 102.892947,117.72093 165.416971,118 L165.416971,48.2325581 L165.533577,48.2790698 Z"
                id="Path"
                fill="#487DA8"
                fillRule="nonzero"
              ></path>
              <text
                id="Build"
                transform="translate(91.386719, 65.312500) rotate(203.000000) translate(-91.386719, -65.312500) "
                fontFamily="Futura-Bold, Futura"
                fontSize="18"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                <tspan x="62.7757187" y="72.3125">
                  BUILD
                </tspan>
              </text>
            </g>
            <g
              id="step-4"
              className={`default ${stage === "PLAN" ? "active" : ""}`}
              transform="translate(233.657227, 353.000000)"
              onClick={() => setStage("PLAN")}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M79.6416551,28.3488372 C55.4776213,41.4411619 28.3722276,48.2800404 0.833984375,48.2325581 L1.42052554,48.2325581 L1.42052554,118 C64.3211999,117.72093 123.163009,92.5581395 167.833984,49.3488372 L118.04837,0 C106.671662,11.2123135 93.7390823,20.7581335 79.6416551,28.3488372 Z"
                id="Path"
                fill="#FF715E"
                fillRule="nonzero"
              ></path>
              <text
                id="Plan"
                transform="translate(78.500000, 66.308594) rotate(157.000000) translate(-78.500000, -66.308594) "
                fontFamily="Futura-Bold, Futura"
                fontSize="18"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                <tspan x="51.914" y="73.3085938">
                  PLAN
                </tspan>
              </text>
            </g>
            <g
              id="step-3"
              className={`default ${stage === "IMMERSE" ? "active" : ""}`}
              transform="translate(352.429301, 235.000000)"
              onClick={() => setStage("IMMERSE")}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M119.06191,0 L48.9519335,0 L48.9519335,0.611080022 C48.7788678,44.7497854 31.195128,87.0152593 0.0619098901,118.126469 L49.6062932,168 L49.7932532,167.811975 C93.8095431,123.630212 118.674718,63.740674 118.96843,1.19865697 L118.96843,0 L119.06191,0 Z"
                id="Path"
                fill="#5FD996"
                fillRule="nonzero"
              ></path>
              <text
                id="Immerse"
                transform="translate(66.500000, 76.390776) rotate(112.000000) translate(-66.500000, -76.390776) "
                fontFamily="Futura-Bold, Futura"
                fontSize="18"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                <tspan x="22.229" y="83.3907758">
                  IMMERSE
                </tspan>
              </text>
            </g>
            <g
              id="step-2"
              className={`default ${stage === "FOCUS" ? "active" : ""}`}
              transform="translate(351.886167, 70.000000)"
              onClick={() => setStage("FOCUS")}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M49.4950678,166 L49.4950678,165.39399 L119.605044,165.39399 C119.292773,103.372336 94.4108746,43.9882979 50.3831275,0.186464476 L50.1961676,0 L0.605044236,49.4363943 C31.7439734,80.2951641 49.3281874,122.219451 49.4950678,166 L49.4950678,166 Z"
                id="Path"
                fill="#487DA8"
                fillRule="nonzero"
              ></path>
              <text
                id="Focus"
                transform="translate(68.000000, 92.342176) rotate(67.000000) translate(-68.000000, -92.342176) "
                fontFamily="Futura-Bold, Futura"
                fontSize="18"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                <tspan x="35.591" y="99.3421757">
                  FOCUS
                </tspan>
              </text>
            </g>

            <g
              id="step-1"
              transform="translate(232.549891, 0.000000)"
              onClick={() => setStage("EXPLORE")}
              style={{ cursor: "pointer" }}
            >
              <polygon
                className={`arrowDef ${stage === "EXPLORE" ? "arrowAct" : ""}`}
                id="Path"
                fill-rule="nonzero"
                transform="translate(157.036724, 105.385612) rotate(46.000000) translate(-157.036724, -105.385612) "
                points="140.134996 153.885612 138.536724 56.8856117 175.536724 104.115124"
              ></polygon>
              <g className={`default ${stage === "EXPLORE" ? "active" : ""}`}>
                <path
                  d="M169.94132,68.6143842 C125.904385,25.1830631 66.5328788,0.561694133 4.4858832,0 L2.94132042,0 L2.94132042,69.7536946 L4.4858832,69.7536946 C47.967281,70.2185792 89.548355,87.5293936 120.374897,118 L169.94132,68.6143842 Z"
                  id="Path"
                  fill="#FFBF40"
                  fill-rule="nonzero"
                ></path>
                <text
                  id="EXPLORE"
                  transform="translate(79.000000, 49.457052) rotate(23.000000) translate(-79.000000, -49.457052) "
                  font-family="Futura-Bold, Futura"
                  font-size="18"
                  font-weight="bold"
                  fill="#FFFFFF"
                >
                  <tspan x="36.043" y="56.4570518">
                    EXPLORE
                  </tspan>
                </text>
              </g>
            </g>

            {/* <g id="step-1" transform="translate(232.549891, 0.000000)" className={`default ${(stage === "EXPLORE" ? "active" : "")}`} onClick={() => setStage("EXPLORE")} style={{ cursor: "pointer" }} >
            <path d="M4.4858832,0 C66.5328788,0.561694133 125.904385,25.1830631 169.94132,68.6143842 L169.37732,68.063 L179.073525,58.3868944 L170.801817,117.810843 L110.407817,126.918457 L119.85568,117.489019 C89.0823006,87.335922 47.7236352,70.2159743 4.4858832,69.7536946 L4.4858832,69.7536946 L2.94132042,69.7536946 L2.94132042,0 Z" id="Combined-Shape" fill="#FFBF40" fillRule="nonzero"></path>
            <text id="EXPLORE" transform="translate(79.000000, 49.457052) rotate(23.000000) translate(-79.000000, -49.457052) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
              <tspan x="36.043" y="56.4570518">EXPLORE</tspan>
            </text>
          </g> */}
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SvgWheel
