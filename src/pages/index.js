import React, {useState} from "react"
import Explore from "../components/stages/Explore";
import Focus from "../components/stages/Focus";
import Immerse from "../components/stages/Immerse";
import Plan from "../components/stages/Plan";
import Build from "../components/stages/Build";
import Harvest from "../components/stages/Harvest";
import Retire from "../components/stages/Retire";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [stage, setStage] = useState("EXPLORE");

  const renderStage = () => {
    switch(stage) {
      case 'EXPLORE':
        return <Explore/>;
      case 'FOCUS':
        return <Focus/>;
      case 'IMMERSE':
        return <Immerse/>;
      case 'PLAN':
        return <Plan/>;
      case 'BUILD':
        return <Build/>;
      case 'HARVEST':
        return <Harvest/>;
      case 'RETIRE':
        return <Retire/>;
      default:
        return <Explore/>;
    }
  }

  return (
    <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-8 offset-lg-2 text-center my-5">
          <h1>YOUR TOOL KIT TO BUILD</h1>
          <h1>A KICKASS SOFTWARE PRODUCT</h1>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-12 mb-5">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <svg
                width="580px"
                height="580px"
                viewBox="0 0 580 580"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
    
              >
                <title>Winning Product Cycle</title>
                <defs>
                  <radialGradient
                    cx="29.6290136%"
                    cy="110.460251%"
                    fx="29.6290136%"
                    fy="110.460251%"
                    r="136.407383%"
                    gradientTransform="translate(0.296290,1.104603),scale(0.925807,1.000000),translate(-0.296290,-1.104603)"
                    id="radialGradient-1"
                  >
                    <stop stopColor="#199A8E" offset="4%"></stop>
                    <stop stopColor="#7AF4AB" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="96.6582524%"
                    cy="96.6527197%"
                    fx="96.6582524%"
                    fy="96.6527197%"
                    r="169.306784%"
                    gradientTransform="translate(0.966583,0.966527),scale(0.839087,1.000000),translate(-0.966583,-0.966527)"
                    id="radialGradient-2"
                  >
                    <stop stopColor="#0956C6" offset="4%"></stop>
                    <stop stopColor="#095BC8" offset="14%"></stop>
                    <stop stopColor="#0968CF" offset="25%"></stop>
                    <stop stopColor="#087FDB" offset="36%"></stop>
                    <stop stopColor="#079EEB" offset="48%"></stop>
                    <stop stopColor="#07A9F0" offset="52%"></stop>
                    <stop stopColor="#1EB1F2" offset="55%"></stop>
                    <stop stopColor="#42BEF5" offset="61%"></stop>
                    <stop stopColor="#5FC9F8" offset="68%"></stop>
                    <stop stopColor="#76D2FA" offset="74%"></stop>
                    <stop stopColor="#86D7FB" offset="81%"></stop>
                    <stop stopColor="#90DBFC" offset="89%"></stop>
                    <stop stopColor="#93DCFC" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="127.874477%"
                    cy="74.2567393%"
                    fx="127.874477%"
                    fy="74.2567393%"
                    r="150.100418%"
                    gradientTransform="translate(1.278745,0.742567),scale(1.000000,0.780440),translate(-1.278745,-0.742567)"
                    id="radialGradient-3"
                  >
                    <stop stopColor="#2B3894" offset="4%"></stop>
                    <stop stopColor="#8078BF" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="104.025105%"
                    cy="7.22750053%"
                    fx="104.025105%"
                    fy="7.22750053%"
                    r="143.133891%"
                    gradientTransform="translate(1.040251,0.072275),scale(1.000000,0.780440),translate(-1.040251,-0.072275)"
                    id="radialGradient-4"
                  >
                    <stop stopColor="#C50048" offset="0%"></stop>
                    <stop stopColor="#6864B5" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="72.1292896%"
                    cy="-12.1338912%"
                    fx="72.1292896%"
                    fy="-12.1338912%"
                    r="155.900243%"
                    gradientTransform="translate(0.721293,-0.121339),scale(0.839087,1.000000),translate(-0.721293,0.121339)"
                    id="radialGradient-5"
                  >
                    <stop stopColor="#C50048" offset="0%"></stop>
                    <stop stopColor="#E02B6A" offset="48%"></stop>
                    <stop stopColor="#FF5E93" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="104.025105%"
                    cy="7.22750053%"
                    fx="104.025105%"
                    fy="7.22750053%"
                    r="154.604384%"
                    gradientTransform="translate(1.040251,0.072275),scale(0.925807,1.000000),translate(-1.040251,-0.072275)"
                    id="radialGradient-6"
                  >
                    <stop stopColor="#C50048" offset="0%"></stop>
                    <stop stopColor="#6864B5" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="-12.460251%"
                    cy="20.696639%"
                    fx="-12.460251%"
                    fy="20.696639%"
                    r="135.841004%"
                    gradientTransform="translate(-0.124603,0.206966),scale(1.000000,0.857506),translate(0.124603,-0.206966)"
                    id="radialGradient-7"
                  >
                    <stop stopColor="#FF9100" offset="4%"></stop>
                    <stop stopColor="#FFB655" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="20.9515687%"
                    cy="7.38357368%"
                    fx="20.9515687%"
                    fy="7.38357368%"
                    r="119.015868%"
                    gradientTransform="translate(0.209516,0.073836),scale(1.000000,0.998261),translate(-0.209516,-0.073836)"
                    id="radialGradient-8"
                  >
                    <stop stopColor="#D8D9DD" offset="4%"></stop>
                    <stop stopColor="#EDEEF0" offset="55%"></stop>
                    <stop stopColor="#F7F7F8" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="7.61108226%"
                    cy="1.8670804%"
                    fx="7.61108226%"
                    fy="1.8670804%"
                    r="146.356999%"
                    gradientTransform="translate(0.076111,0.018671),scale(1.000000,0.999379),translate(-0.076111,-0.018671)"
                    id="radialGradient-9"
                  >
                    <stop stopColor="#D8D9DD" offset="4%"></stop>
                    <stop stopColor="#EDEEF0" offset="55%"></stop>
                    <stop stopColor="#F7F7F8" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="7.61108212%"
                    cy="1.8670804%"
                    fx="7.61108212%"
                    fy="1.8670804%"
                    r="146.356997%"
                    gradientTransform="translate(0.076111,0.018671),scale(1.000000,0.999379),translate(-0.076111,-0.018671)"
                    id="radialGradient-10"
                  >
                    <stop stopColor="#D8D9DD" offset="4%"></stop>
                    <stop stopColor="#EDEEF0" offset="55%"></stop>
                    <stop stopColor="#F7F7F8" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="35.2968322%"
                    cy="22.7946732%"
                    fx="35.2968322%"
                    fy="22.7946732%"
                    r="86.5228561%"
                    gradientTransform="translate(0.352968,0.227947),scale(0.889989,1.000000),translate(-0.352968,-0.227947)"
                    id="radialGradient-11"
                  >
                    <stop stopColor="#828282" offset="0%"></stop>
                    <stop stopColor="#848484" stopOpacity="0.98" offset="30%"></stop>
                    <stop stopColor="#8B8B8B" stopOpacity="0.92" offset="47%"></stop>
                    <stop stopColor="#969697" stopOpacity="0.81" offset="60%"></stop>
                    <stop stopColor="#A6A6A7" stopOpacity="0.66" offset="72%"></stop>
                    <stop stopColor="#BBBCBD" stopOpacity="0.47" offset="83%"></stop>
                    <stop stopColor="#D4D5D7" stopOpacity="0.23" offset="92%"></stop>
                    <stop stopColor="#EDEEF0" stopOpacity="0" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="8.7912822%"
                    cy="3.23011269%"
                    fx="8.7912822%"
                    fy="3.23011269%"
                    r="144.49179%"
                    gradientTransform="translate(0.087913,0.032301),scale(1.000000,0.998261),translate(-0.087913,-0.032301)"
                    id="radialGradient-12"
                  >
                    <stop stopColor="#F7F7F8" offset="0%"></stop>
                    <stop stopColor="#FBFBFB" offset="51%"></stop>
                    <stop stopColor="#FFFFFF" offset="72%"></stop>
                  </radialGradient>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Artboard" transform="translate(-404.000000, -234.000000)">
                    <g id="wheel-2" transform="translate(414.000000, 244.000000)">
                      <g id="wheel" transform="translate(43.921569, 43.921569)">
                        <g id="Group-3">
                          <g id="Segments-circle" transform="translate(0.451791, 0.000000)" fillRule="nonzero">
                            <path
                              d="M238.129138,237.449173 C237.962397,238.165019 237.485996,238.761558 236.842855,239.071759 L133.511435,24.0791194 C68.8637929,55.266176 21.8668149,114.275809 5.90737483,184.357206 L238.129138,237.449173 Z"
                              id="Path-7"
                              fill="url(#radialGradient-1)"
                              opacity="0.5"
                              onClick={() => setStage("RETIRE")} 
                              style={{cursor: "pointer"}}
                            ></path>
                            <path
                              d="M237.676557,235.444802 C238.129138,236.017479 238.295878,236.733326 238.129138,237.449173 L5.90737483,184.357206 C-10.0520652,254.438602 6.71725686,328.003786 51.4513292,384.221617 L237.676557,235.444802 Z"
                              id="Path-6"
                              fill="url(#radialGradient-2)"
                              opacity="0.5"
                              onClick={() => setStage("HARVEST")} 
                              style={{cursor: "pointer  "}}
                            ></path>
                            <path
                              d="M235.818592,234.538062 C236.533194,234.538062 237.223976,234.872124 237.676557,235.444802 L51.4513292,384.221617 C96.1854015,440.439448 164.048752,473.153644 235.818592,473.153644 L235.818592,234.538062 Z"
                              id="Path-5"
                              fill="url(#radialGradient-3)"
                              opacity="0.5"
                              onClick={() => setStage("BUILD")} 
                              style={{cursor: "pointer"}}
                            ></path>
                            <path
                              d="M233.960627,235.444802 C234.413209,234.872124 235.10399,234.538062 235.818592,234.538062 L235.818592,473.153644 C307.588432,473.153644 375.451783,440.439448 420.185855,384.221617 L233.960627,235.444802 Z"
                              id="Path-4"
                              fill="url(#radialGradient-4)"
                              opacity="0.5"
                              onClick={() => setStage("PLAN")} 
                              style={{cursor: "pointer"}}
                            ></path>
                            <path
                              d="M233.508046,237.449173 C233.341306,236.733326 233.508046,236.017479 233.960627,235.444802 L420.185855,384.221617 C464.919927,328.003786 481.689249,254.438602 465.729809,184.357206 L233.508046,237.449173 Z"
                              id="Path-3"
                              fill="url(#radialGradient-5)"
                              opacity="0.5"
                              onClick={() => setStage("IMMERSE")} 
                              style={{cursor: "pointer"}}
                            ></path>
                            <path
                              d="M234.794329,239.071759 C234.151188,238.761558 233.674787,238.165019 233.508046,237.449173 L465.729809,184.357206 C449.770369,114.275809 402.773391,55.266176 338.125749,24.0791194 L234.794329,239.071759 Z"
                              id="Path-2"
                              fill="url(#radialGradient-6)"
                              opacity="0.5"
                              onClick={() => setStage("FOCUS")} 
                              style={{cursor: "pointer"}}
                            ></path>
                            <path
                              d="M236.842855,239.071759 C236.199713,239.381959 235.437471,239.381959 234.794329,239.071759 L338.125749,24.0791194 C273.478107,-7.10793709 198.159078,-7.10793709 133.511435,24.0791194 L236.842855,239.071759 Z"
                              id="Path-1"
                              fill="url(#radialGradient-7)"
                              opacity="1"
                              onClick={() => setStage("EXPLORE")} 
                              style={{cursor: "pointer  "}}
                            ></path>
                          </g>
                          <g
                            id="step-7"
                            transform="translate(118.659387, 136.826469) rotate(-50.000000) translate(-118.659387, -136.826469) translate(26.324271, 78.929856)"
                            fill="#FFFFFF"
                            fontFamily="Futura-Bold, Futura"
                            fontSize="24"
                            fontWeight="bold"
                          >
                            <g id="Group">
                              <text 
                                id="RETIRE"
                                onClick={() => setStage("RETIRE")} 
                                style={{cursor: "pointer"}}>
                                <tspan x="46.8146845" y="41.6750183">RETIRE</tspan>
                              </text>
                            </g>
                          </g>
                          <g
                            id="step-6"
                            transform="translate(84.827038, 264.729479) rotate(-100.000000) translate(-84.827038, -264.729479) translate(-7.508078, 206.832866)"
                            fill="#FFFFFF"
                            fontFamily="Futura-Bold, Futura"
                            fontSize="24"
                            fontWeight="bold"
                          >
                            <g id="Group">
                              <text 
                                id="HARVEST"
                                onClick={() => setStage("HARVEST")} 
                                style={{cursor: "pointer"}}>
                                <tspan x="29.8346845" y="41.6750183">HARVEST</tspan>
                              </text>
                            </g>
                          </g>
                          <g
                            id="step-5"
                            transform="translate(165.013731, 373.918159) rotate(208.000000) translate(-165.013731, -373.918159) translate(72.678615, 316.021546)"
                            fill="#FFFFFF"
                            fontFamily="Futura-Bold, Futura"
                            fontSize="24"
                            fontWeight="bold"
                          >
                            <g id="Group">
                              <text 
                                id="BUILD"
                                onClick={() => setStage("BUILD")} 
                                style={{cursor: "pointer"}}>
                                <tspan x="50.0186845" y="41.6750183">BUILD</tspan>
                              </text>
                            </g>
                          </g>
                          <g
                            id="step-4"
                            transform="translate(300.927005, 379.147629) rotate(156.000000) translate(-300.927005, -379.147629) translate(208.591889, 321.251015)"
                            fill="#FFFFFF"
                            fontFamily="Futura-Bold, Futura"
                            fontSize="24"
                            fontWeight="bold"
                          >
                            <g id="Group">
                              <text 
                                id="PLAN"
                                onClick={() => setStage("PLAN")} 
                                style={{cursor: "pointer"}}>
                                <tspan x="52.7186845" y="41.6750183">PLAN</tspan>
                              </text>
                            </g>
                          </g>
                          <g
                            id="step-3"
                            transform="translate(387.173505, 274.428095) rotate(104.000000) translate(-387.173505, -274.428095) translate(294.838389, 216.531482)"
                            fill="#FFFFFF"
                            fontFamily="Futura-Bold, Futura"
                            fontSize="24"
                            fontWeight="bold"
                          >
                            <g id="Group">
                              <text 
                                id="IMMERSE"
                                onClick={() => setStage("IMMERSE")} 
                                style={{cursor: "pointer"}}>
                                <tspan x="29.1386845" y="41.6750183">IMMERSE</tspan>
                              </text>
                            </g>
                          </g>
                          <g
                            id="step-2"
                            transform="translate(358.326978, 141.881423) rotate(52.000000) translate(-358.326978, -141.881423) translate(265.991862, 83.984810)"
                            fill="#FFFFFF"
                            fontFamily="Futura-Bold, Futura"
                            fontSize="24"
                            fontWeight="bold"
                          >
                            <g id="Group">
                              <text 
                                id="FOCUS"
                                onClick={() => setStage("FOCUS")} 
                                style={{cursor: "pointer"}}>
                                <tspan x="44.9546845" y="41.6750183">FOCUS</tspan>
                              </text>
                            </g>
                          </g>
                          <g
                            id="step-1"
                            transform="translate(144.023699, 24.317735)"
                            fill="#FFFFFF"
                            fontFamily="Futura-Bold, Futura"
                            fontSize="24"
                            fontWeight="bold"
                          >
                            <g id="Group">
                              <text 
                                id="EXPLORE" 
                                onClick={() => setStage("EXPLORE")} 
                                style={{cursor: "pointer"}}>
                                <tspan x="30.8906845" y="41.6750183">EXPLORE</tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g id="center" transform="translate(102.214686, 102.392761)">
                          <ellipse
                            id="Oval"
                            fill="#FFFFFF"
                            cx="134.016558"
                            cy="134.250036"
                            rx="130.553598"
                            ry="130.781043"
                          ></ellipse>
                          <path
                            d="M134.362854,0.367713277 C60.3593954,0.367713277 0.367073776,60.4645511 0.367073776,134.596935 C0.367073776,208.72932 60.3593954,268.826158 134.362854,268.826158 C208.366312,268.826158 268.358634,208.72932 268.358634,134.596935 C268.358634,60.4645511 208.366312,0.367713277 134.362854,0.367713277 Z M134.362854,261.187435 C64.5704412,261.187435 7.99251202,204.510938 7.99251202,134.596935 C7.99251202,64.6829333 64.5704412,8.00643626 134.362854,8.00643626 C204.155266,8.00643626 260.733196,64.6829333 260.733196,134.596935 C260.733196,168.170823 247.419216,200.369612 223.720179,224.109936 C200.021143,247.85026 167.878352,261.187435 134.362854,261.187435 Z"
                            id="Shape"
                            fill="url(#radialGradient-8)"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M238.778125,131.349958 C238.813045,105.479326 229.36371,80.4964348 212.22405,61.1444738 C172.430749,19.3718412 106.574729,17.2096744 64.1363561,56.2824991 C21.6979832,95.3553239 18.3058396,161.273972 56.5085837,204.511024 C86.3561807,235.832255 132.226448,245.806787 172.351229,229.701116 C212.476011,213.595445 238.778125,174.65129 238.778125,131.349958 Z"
                            id="Path"
                            fill="url(#radialGradient-9)"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M238.778129,134.888331 C238.813691,109.017581 229.364272,84.0344674 212.22405,64.6828468 C172.430749,22.9102143 106.574729,20.7480474 64.1363561,59.8208722 C21.6979832,98.8936969 18.3058396,164.812345 56.5085837,208.049397 C86.3561807,239.370628 132.226448,249.34516 172.351229,233.239489 C212.476011,217.133818 238.778129,178.189663 238.778129,134.888331 L238.778129,134.888331 Z"
                            id="Path"
                            fill="url(#radialGradient-10)"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M73.9341992,188.269198 L124.431084,240.748127 C127.335353,240.993269 130.274252,241.11584 133.247781,241.11584 C161.301633,241.114 188.205642,229.947996 208.040763,210.074416 C227.875883,190.200835 239.017183,163.247763 239.01351,135.145036 C239.01351,133.466044 238.974263,131.796302 238.895769,130.13581 L203.012576,94.1970408 L73.9341992,188.269198 Z"
                            id="Path"
                            fill="url(#radialGradient-11)"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M215.12601,134.596935 C215.12601,179.278903 178.967114,215.500794 134.362854,215.500794 C89.7585941,215.500794 53.5996972,179.278903 53.5996972,134.596935 C53.5996972,89.9149679 89.7585941,53.6930765 134.362854,53.6930765 C178.967114,53.6930765 215.12601,89.9149679 215.12601,134.596935 L215.12601,134.596935 Z"
                            id="Path"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M215.126645,134.596935 C215.126645,101.874379 195.448699,72.3738962 165.269576,59.851516 C135.090453,47.3291358 100.352779,54.2509266 77.2546781,77.3892681 C54.1565771,100.52761 47.2468243,135.325802 59.7474264,165.557502 C72.2480286,195.789202 101.697206,215.50143 134.362854,215.50143 C155.808551,215.586046 176.400459,207.08965 191.564976,191.898713 C206.729494,176.707777 215.211113,156.079994 215.126645,134.596935 Z"
                            id="Path"
                            fill="url(#radialGradient-12)"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M206.96035,99.1160732 C223.725661,136.917872 209.331321,181.299909 173.588196,202.012359 C137.845072,222.724809 92.2625362,213.098212 67.9086485,179.693847 C70.2858075,183.500977 72.9729746,187.104805 75.9427161,190.46854 C103.444078,219.307454 147.82079,223.772252 180.497977,200.987978 C213.175164,178.203705 224.406671,134.965897 206.96035,99.1160732 L206.96035,99.1160732 Z"
                            id="Path"
                            fill="#EDEEF0"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </g>
                      <path
                        d="M280,560 C434.63973,560 560,434.63973 560,280 C560,125.36027 434.63973,0 280,0 C125.36027,0 0,125.36027 0,280 C0,434.63973 125.36027,560 280,560 Z"
                        id="Oval"
                        stroke="#8E44AD"
                        strokeWidth="20"
                        strokeDasharray="360,200"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              {
                renderStage()
              }
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col col-sm-12 my-5">
          <h3>What do you get in the WP Toolkit?</h3>
          <p>
            Our community has built a complete toolkit to help you nurture your product to a win over the competition.
          </p>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4">
          <div className="col col-sm-12 text-center px-4 py-5" style={{border:"1px solid #ECF0F1"}}>
            <h5>Learn to build a winning product</h5>
            <p>Learn from the community’s best success stories</p>
            <button className="btn btn-outline-primary" style={{width:"220px"}}>View Canvas</button>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4">
          <div className="col col-sm-12 text-center px-4 py-5" style={{border:"1px solid #ECF0F1"}}>
            <h5>Learn to build a winning product</h5>
            <p>Learn from the community’s best success stories</p>
            <button className="btn btn-outline-primary" style={{width:"220px"}}>Go to Strategy Tool</button>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4">
          <div className="col col-sm-12 text-center px-4 py-5" style={{border:"1px solid #ECF0F1"}}>
            <h5>Learn to build a winning product</h5>
            <p>Learn from the community’s best success stories</p>
            <button className="btn btn-outline-primary" style={{width:"220px"}}>View Certifications</button>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col col-sm-12 my-5">
          <h3>What do you get in the WP Toolkit?</h3>
          <p>
            Our community has built a complete toolkit to help you nurture your product to a win over the competition.
          </p>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4 mb-4">
          <div className="col col-sm-12 px-0" style={{border:"1px solid #ECF0F1"}}>
            <img src={"../../1.png"} alt="1.png" style={{width:"100%", height:"auto"}} />
            <div className="px-4 py-4">
              <h5>Learn to build a winning product</h5>
              <p className="mb-0">Learn from the community’s best success stories</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4 mb-4">
          <div className="col col-sm-12 px-0" style={{border:"1px solid #ECF0F1"}}>
            <img src={"../../1.png"} alt="1.png" style={{width:"100%", height:"auto"}} />
            <div className="px-4 py-4">
              <h5>Learn to build a winning product</h5>
              <p className="mb-0">Learn from the community’s best success stories</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4 mb-4">
          <div className="col col-sm-12 px-0" style={{border:"1px solid #ECF0F1"}}>
            <img src={"../../1.png"} alt="1.png" style={{width:"100%", height:"auto"}} />
            <div className="px-4 py-4">
              <h5>Learn to build a winning product</h5>
              <p className="mb-0">Learn from the community’s best success stories</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4 mb-4">
          <div className="col col-sm-12 px-0" style={{border:"1px solid #ECF0F1"}}>
            <img src={"../../1.png"} alt="1.png" style={{width:"100%", height:"auto"}} />
            <div className="px-4 py-4">
              <h5>Learn to build a winning product</h5>
              <p className="mb-0">Learn from the community’s best success stories</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4 mb-4">
          <div className="col col-sm-12 px-0" style={{border:"1px solid #ECF0F1"}}>
            <img src={"../../1.png"} alt="1.png" style={{width:"100%", height:"auto"}} />
            <div className="px-4 py-4">
              <h5>Learn to build a winning product</h5>
              <p className="mb-0">Learn from the community’s best success stories</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4 mb-4">
          <div className="col col-sm-12 px-0" style={{border:"1px solid #ECF0F1"}}>
            <img src={"../../1.png"} alt="1.png" style={{width:"100%", height:"auto"}} />
            <div className="px-4 py-4">
              <h5>Learn to build a winning product</h5>
              <p className="mb-0">Learn from the community’s best success stories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div
        className="row my-3 py-5"
        style={{backgroundImage: "url('../../bg.png')", backgroundSize: "cover" ,backgroundRepeat: "no-repeat"}}
      >
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-6 my-5">
              <h3 className="text-white mb-4">Contribute your knowledge</h3>
              <p className="text-white">
                Help us improve the knowledge model with what you learnt during the process. What you learnt the hard
                way can help someone else who is starting just like you did. Join our team of knowledge gurus.
              </p>
            </div>
            <div className="col col-sm-12 col-md-6 my-5"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row my-3">
        <div className="col col-sm-12 my-5">
          <h3>What do you get in the WP Toolkit?</h3>
          <p>
            Our community has built a complete toolkit to help you nurture your product to a win over the competition.
          </p>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4">
          <div className="col col-sm-12 text-center px-4 py-5" style={{border:"1px solid #ECF0F1"}}>
            <h5>Learn to build a winning product</h5>
            <p>Learn from the community’s best success stories</p>
            <button className="btn btn-outline-primary" style={{width:"220px"}}>View Canvas</button>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4">
          <div className="col col-sm-12 text-center px-4 py-5" style={{border:"1px solid #ECF0F1"}}>
            <h5>Learn to build a winning product</h5>
            <p>Learn from the community’s best success stories</p>
            <button className="btn btn-outline-primary" style={{width:"220px"}}>Go to Strategy Tool</button>
          </div>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4">
          <div className="col col-sm-12 text-center px-4 py-5" style={{border:"1px solid #ECF0F1"}}>
            <h5>Learn to build a winning product</h5>
            <p>Learn from the community’s best success stories</p>
            <button className="btn btn-outline-primary" style={{width:"220px"}}>View Certifications</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
