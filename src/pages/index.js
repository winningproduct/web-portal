import React, { useState } from "react"
import Explore from "../components/stages/Explore";
import Focus from "../components/stages/Focus";
import Immerse from "../components/stages/Immerse";
import Plan from "../components/stages/Plan";
import Build from "../components/stages/Build";
import Optimize from "../components/stages/Optimize";
import Harvest from "../components/stages/Harvest";
import Retire from "../components/stages/Retire";
import Typist from 'react-typist';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [stage, setStage] = useState("EXPLORE");
  const LEARN_PORTAL_URL = "https://learn.winningproduct.com";
  const renderStage = () => {
    switch (stage) {
      case 'EXPLORE':
        return <Explore learn={openLearnPortal}/>;
      case 'FOCUS':
        return <Focus learn={openLearnPortal} />;
      case 'IMMERSE':
        return <Immerse learn={openLearnPortal} />;
      case 'PLAN':
        return <Plan learn={openLearnPortal} />;
      case 'BUILD':
        return <Build learn={openLearnPortal} />;
      case 'OPTIMIZE':
        return <Optimize learn={openLearnPortal} />;
      case 'HARVEST':
        return <Harvest learn={openLearnPortal} />;
      case 'RETIRE':
        return <Retire learn={openLearnPortal} />;
      default:
        return <Explore learn={openLearnPortal}/>;
    }
  }

  const openLearnPortal = (path="") => {
    window.open(`${LEARN_PORTAL_URL}/${path}`, '_blank');
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container-fluid">
        <div className="row border-bottom">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 sticky-top">
                <Link className="navbar-brand" to="/">
                  <img src={"../../logo.svg"} className="d-inline-block align-top" alt="" loading="lazy" />
                  <span className="ml-3 text-dark h6">WinningProduct</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link px-3" to="/">Get Start<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3" target="_blank" href="https://learn.winningproduct.com">Learn</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/contact">Manage</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/contact">Certify</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2 text-center my-5">
            <h1>YOUR TOOL KIT TO BUILD</h1>
            <h1 className="d-lg-flex flex-row justify-content-center align-items-center">
              A &nbsp;
              <Typist>
                <span style={{ color: "#8E44AD" }}>KICKASS</span>
                <Typist.Backspace count={7} delay={3000} />
                <span style={{ color: "#8E44AD" }}>WINNING</span>
              </Typist>
              &nbsp; SOFTWARE PRODUCT
            </h1>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-5">
            <div className="d-flex flex-row justify-content-lg-between justify-content-center">
              <div>
                <svg
                  width="474px"
                  height="471px"
                  viewBox="0 0 474 471"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="wheel-new" transform="translate(0.508789, 0.000000)">
                      <g id="step-8" opacity="0.5" transform="translate(69.491211, 0.000000)" onClick={() => setStage("RETIRE")} style={{ cursor: "pointer" }} className={`default ${(stage === "RETIRE" ? "active" : "")}`}>
                        <path d="M86.1410506,91.3762552 C110.404959,77.6492296 137.777556,70.3888756 165.641477,70.2894271 C165.431035,70.2894271 166.155892,70.2894271 165.968832,70.2894271 L165.968832,0 C103.730749,0.447446217 44.1467872,25.3201453 0,69.2819453 L49.6176193,119 C60.4708211,108.157996 72.7604187,98.8630118 86.1410506,91.3762552 Z" id="Path" fill="#FF715E" fillRule="nonzero"></path>
                        <text id="Retire" transform="translate(90.028320, 53.859375) rotate(338.000000) translate(-90.028320, -53.859375) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                          <tspan x="59.0143203" y="60.859375">RETIRE</tspan>
                        </text>
                      </g>
                      <g id="step-7" className={`default ${(stage === "HARVEST" ? "active" : "")}`} transform="translate(0.000000, 70.000000)" onClick={() => setStage("HARVEST")} style={{ cursor: "pointer" }} >
                        <path d="M70.6011874,166 C70.764006,122.231612 88.3493193,80.3189721 119.491211,49.4760635 L69.8533476,0 L69.6663877,0.209743086 C25.6557865,44.0130337 0.791080728,103.387798 0.491210938,165.394076 L70.6011874,165.394076 L70.6011874,166 Z" id="Path" fill="#5FD996" fillRule="nonzero"></path>
                        <text id="HARVEST" transform="translate(49.500000, 90.066406) rotate(293.000000) translate(-49.500000, -90.066406) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                          <tspan x="5.751" y="97.0664063">HARVEST</tspan>
                        </text>
                      </g>
                      <g id="step-6" className={`default ${(stage === "OPTIMIZE" ? "active" : "")}`} transform="translate(0.491211, 235.000000)" onClick={() => setStage("OPTIMIZE")} style={{ cursor: "pointer" }} >
                        <path d="M70.1375246,0 L70.1375246,0.586211738 L0,0.586211738 C0.293826974,62.9829155 25.1687724,122.733303 69.2023576,166.812412 L69.389391,167 L119,117.242348 C87.8608603,86.2030525 70.2854592,44.0320148 70.1375246,0 Z" id="Path" fill="#FFBF40" fillRule="nonzero"></path>
                        <text id="Optimize" transform="translate(50.901367, 76.483398) rotate(247.000000) translate(-50.901367, -76.483398) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                          <tspan x="4.42536719" y="83.4833984">OPTIMIZE</tspan>
                        </text>
                      </g>
                      <g id="step-5" className={`default ${(stage === "BUILD" ? "active" : "")}`} transform="translate(69.491211, 353.000000)" onClick={() => setStage("BUILD")} style={{ cursor: "pointer" }} >
                        <path d="M165.533577,48.2790698 L166,48.2790698 C122.27835,48.0969449 80.3873611,30.7525401 49.3942119,0 L0,49.3488372 C44.3101995,92.5581395 102.892947,117.72093 165.416971,118 L165.416971,48.2325581 L165.533577,48.2790698 Z" id="Path" fill="#487DA8" fillRule="nonzero"></path>
                        <text id="Build" transform="translate(91.386719, 65.312500) rotate(203.000000) translate(-91.386719, -65.312500) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                          <tspan x="62.7757187" y="72.3125">BUILD</tspan>
                        </text>
                      </g>
                      <g id="step-4" className={`default ${(stage === "PLAN" ? "active" : "")}`} transform="translate(233.657227, 353.000000)" onClick={() => setStage("PLAN")} style={{ cursor: "pointer" }} >
                        <path d="M79.6416551,28.3488372 C55.4776213,41.4411619 28.3722276,48.2800404 0.833984375,48.2325581 L1.42052554,48.2325581 L1.42052554,118 C64.3211999,117.72093 123.163009,92.5581395 167.833984,49.3488372 L118.04837,0 C106.671662,11.2123135 93.7390823,20.7581335 79.6416551,28.3488372 Z" id="Path" fill="#FF715E" fillRule="nonzero"></path>
                        <text id="Plan" transform="translate(78.500000, 66.308594) rotate(157.000000) translate(-78.500000, -66.308594) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                          <tspan x="51.914" y="73.3085938">PLAN</tspan>
                        </text>
                      </g>
                      <g id="step-3" className={`default ${(stage === "IMMERSE" ? "active" : "")}`} transform="translate(352.429301, 235.000000)" onClick={() => setStage("IMMERSE")} style={{ cursor: "pointer" }} >
                        <path d="M119.06191,0 L48.9519335,0 L48.9519335,0.611080022 C48.7788678,44.7497854 31.195128,87.0152593 0.0619098901,118.126469 L49.6062932,168 L49.7932532,167.811975 C93.8095431,123.630212 118.674718,63.740674 118.96843,1.19865697 L118.96843,0 L119.06191,0 Z" id="Path" fill="#5FD996" fillRule="nonzero"></path>
                        <text id="Immerse" transform="translate(66.500000, 76.390776) rotate(112.000000) translate(-66.500000, -76.390776) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                          <tspan x="22.229" y="83.3907758">IMMERSE</tspan>
                        </text>
                      </g>
                      <g id="step-2" className={`default ${(stage === "FOCUS" ? "active" : "")}`} transform="translate(351.886167, 70.000000)" onClick={() => setStage("FOCUS")} style={{ cursor: "pointer" }} >
                        <path d="M49.4950678,166 L49.4950678,165.39399 L119.605044,165.39399 C119.292773,103.372336 94.4108746,43.9882979 50.3831275,0.186464476 L50.1961676,0 L0.605044236,49.4363943 C31.7439734,80.2951641 49.3281874,122.219451 49.4950678,166 L49.4950678,166 Z" id="Path" fill="#487DA8" fillRule="nonzero"></path>
                        <text id="Focus" transform="translate(68.000000, 92.342176) rotate(67.000000) translate(-68.000000, -92.342176) " fontFamily="Futura-Bold, Futura" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                          <tspan x="35.591" y="99.3421757">FOCUS</tspan>
                        </text>
                      </g>

                      <g id="step-1" transform="translate(232.549891, 0.000000)"  onClick={() => setStage("EXPLORE")} style={{ cursor: "pointer" }}>
                        <polygon className={`arrowDef ${(stage === "EXPLORE" ? "arrowAct" : "")}`} id="Path" fill-rule="nonzero" transform="translate(157.036724, 105.385612) rotate(46.000000) translate(-157.036724, -105.385612) " points="140.134996 153.885612 138.536724 56.8856117 175.536724 104.115124"></polygon>
                        <g className={`default ${(stage === "EXPLORE" ? "active" : "")}`}>
                          <path d="M169.94132,68.6143842 C125.904385,25.1830631 66.5328788,0.561694133 4.4858832,0 L2.94132042,0 L2.94132042,69.7536946 L4.4858832,69.7536946 C47.967281,70.2185792 89.548355,87.5293936 120.374897,118 L169.94132,68.6143842 Z" id="Path" fill="#FFBF40" fill-rule="nonzero"></path>
                          <text id="EXPLORE" transform="translate(79.000000, 49.457052) rotate(23.000000) translate(-79.000000, -49.457052) " font-family="Futura-Bold, Futura" font-size="18" font-weight="bold" fill="#FFFFFF">
                              <tspan x="36.043" y="56.4570518">EXPLORE</tspan>
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
              <div className="d-none d-lg-block">
                {
                  renderStage()
                }
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 col-sm-12 mt-5 mb-3">
            <h3>What do you get in the WP Toolkit?</h3>
            <p className="lead">
              Our community has built a complete toolkit to help you nurture your product to a win over the competition.
          </p>
          </div>
          <div className="d-flex flex-row flex-wrap">
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justify-content-between px-0">
                <div>
                  <img src={"../../learnNew.png"} alt="Explore – Value proposition image" style={{ width: "100%", height: "auto" }} className="mb-3" />
                  <h5 className="twolineHeading">Learn to build a winning product</h5>
                  <p className="p-18">Learn from the community’s best success stories</p>
                </div>
                <div>
                  <Link className="btn btn-outline-primary"  style={{ width: "220px" }} to="/contact">Download Canvas</Link>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justify-content-between px-0">
                <div>
                  <img src={"../../manage.png"} alt="Explore – Value proposition image" style={{ width: "100%", height: "auto" }} className="mb-3" />
                  <h5 className="twolineHeading">Manage your product strategy</h5>
                  <p className="p-18">Learn from the community’s best success stories</p>
                </div>
                <div>
                  <Link to="/contact" className="btn btn-outline-primary" style={{ width: "220px" }}>Go to Strategy Tool</Link>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justify-content-between px-0">
                <div>
                  <img src={"../../certifyNew.png"} alt="Explore – Value proposition image" style={{ width: "100%", height: "auto" }} className="mb-3" />
                  <h5 className="twolineHeading">Get your team certified</h5>
                  <p className="p-18">Get your team certified on product building. Let’s help them think business first</p>
                </div>
                <div>
                  <Link to="/contact" className="btn btn-outline-primary" style={{ width: "220px" }}>View Certifications</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row my-5">
          <div className="col-12 col-sm-12 mt-5 mb-3">
            <h3>Why products requires a specialized process?</h3>
            <p className="lead">
            Product management is different to bespoke application development. Learn how a specialized process keeps your product different from the competition
          </p>
          </div>
          <div className="d-flex flex-row flex-wrap">
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("1-explore/05-value-proposition")}>
                <img src={"../../VP.png"} alt="Explore – Value proposition image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Explore – Value proposition</h5>
                  <p className="mb-0 p-18">The primary value that the company promises to deliver to customers. This is the declaration of intent or company's brand statement to consumers to communicate what the company stands for, how it operates, and why it deserves their sale.</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("2-focus/02-mvp-identification")}>
                <img src={"../../MVP.png"} alt="Focus – MVP identification image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Focus – MVP identification</h5>
                  <p className="mb-0 p-18">Identify the minimum set of features that can gain maximum learning and has low cost of implementation.</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("2-focus/07-technical-architecture")}>
                <img src={"../../TA.png"} alt="Focus - Technical Architecture image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Focus - Technical Architecture</h5>
                  <p className="mb-0 p-18">Verify if the solution is technically feasible to implement with available resources</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("3-immerse/06-high-fidelity-prototype")}>
                <img src={"../../HFP.png"} alt="Immerse – High fidelity prototype image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Immerse – High fidelity prototype</h5>
                  <p className="mb-0 p-18">Build a detailed prototype to demonstrate how the final product would operate and obtain feedback</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("4-plan/12-growth-hacking-plan")}>
                <img src={"../../GHP.png"} alt="Plan – Growth hacking plan image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Plan – Growth hacking plan</h5>
                  <p className="mb-0 p-18">Exploring low cost and smarter options to gain a rapid market reach in a short time for growth through referrals and up-sales.</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("4-plan/04-delivery-pipeline")}>
                <img src={"../../DP.png"} alt="Plan - Delivery Pipeline image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Plan - Delivery Pipeline</h5>
                  <p className="mb-0 p-18">Setup source control flow, code integration process, automation strategy (CI/CD/Tests), scaling, etc.</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0  mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("5-build/09-data-privacy-protection")}>
                <img src={"../../DPP.png"} alt="Build - Data Privacy Protection image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Build - Data Privacy Protection</h5>
                  <p className="mb-0 p-18">Understand the data protection policies in target markets. Device strategies for data segregation and limiting access to production data.</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 mb-4 border-0 mb-4">
              <div className="col-12 col-sm-12 px-0" style={{ border: "1px solid #ECF0F1", cursor: "pointer" }} onClick={()=> openLearnPortal("7-harvest/13-win-lose-analysis")}>
                <img src={"../../WinLoss.png"} alt="Harvest – Win-loss Analysis image" style={{ width: "100%", height: "auto" }} />
                <div className="px-4 py-4">
                  <h5>Harvest – Win-loss Analysis</h5>
                  <p className="mb-0 p-18">Do a win loss analysis on your leads to understand why you lost and what are the strong points in your application. Analyze these results with different demographics in mind.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row my-3 py-5"
          style={{ backgroundImage: "url('../../bg.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mt-5 mb-3">
                <h3 className="text-white mb-4">Contribute your knowledge</h3>
                <p className="text-white lead">
                  Help us improve the knowledge model with what you learnt during the process. What you learnt the hard
                  way can help someone else who is starting just like you. Join our team of knowledge gurus.
                </p>
                <a href="https://github.com/winningproduct/learn-portal" target="_blank" className="btn btn-outline-secondary">
                  <img src="../../github.png" style={{height:"20px", width:"auto"}} className="mr-2"/>
                  Contribute
                  </a>
              </div>
              <div className="col col-sm-12 col-md-5 offset-md-1 my-5">
                <div className="w-100 d-flex flex-row flex-wrap">
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/2338919?s=400&u=092b53b361fdf892de6a3e6389a0a388d41a39ff&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/36729333?s=400&u=573f0dc1b08576151e23a3c8ac3af139a045a409&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/1892961?s=400&u=0a28b883301177d376a3cf71c52901ea8e22bd93&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars2.githubusercontent.com/u/33232105?s=400&u=c0ef1a77f9ef448dce359aedf72144ed017ba563&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/63349272?s=400&u=f268764151842248ce4e6473ebf18c9bccdf2829&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/2035004?s=400&u=aa074e2b9ef48fbf2fa741e6918ea545024daa36&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/5242449?s=400&u=115d3c9f52917919136638dc5a4b3e67af6390e7&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/57340100?s=400&u=23f60ecaa0256e354bc844886ad10ddf8f773954&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/42619922?s=400&u=d28ae39fb202e2064b7eb155c1ebe0bf645ad575&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/628163?s=400&u=6b0bfa0e86bf558d1f31d6df930a48f7416ba246&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/19371972?s=400&u=f642f2ed66426a79d74307c11764209684f831c6&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/22959475?s=400&u=f0d5fac27ce843d70d6bb1eb26b88816cc916358&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/57340100?s=400&u=23f60ecaa0256e354bc844886ad10ddf8f773954&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars3.githubusercontent.com/u/11753507?s=400&u=696875cc7412ee177b7edcf68a9a7546754931c1&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars1.githubusercontent.com/u/17847364?s=400&u=68bf28aff6250bd0a88b22e64b14bd2a86b4038d&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/9572090?s=400&u=05e48d79357016fb66cb884830cb316d267623e2&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars2.githubusercontent.com/u/10953143?s=400&u=4aba7cea1c98a3873e191ba8a59c6cbe4cd20c24&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"https://avatars1.githubusercontent.com/u/27477126?s=400&u=c5efef05d5f9a45d05dc7f6b55b4c83852ec2665&v=4"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-amila.jpg"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-aravinthan.jpg"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-arshad.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-chinthaka.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-helani.jpeg"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-kavindi.jpeg"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-nuwan.jpg"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-1.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-2.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-3.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-4.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-5.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-6.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-7.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-8.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-9.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
                    <img className="rounded-circle" src={"../../git-10.png"} alt="contributor avatar image" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col col-sm-12 mb-3">
            <h3>Become winning product certified</h3>
            <p className="lead">
              Winning Product certifications are organized into three levels.
          </p>
          </div>
          <div className="d-flex flex-row flex-wrap">
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justfy-content-around py-5">
                <div>
                  <img src={"../../level1.png"} alt="Explore – Value proposition image" style={{ width: "auto", height: "60px" }} className="mb-3" />
                  <h5 className="twolineHeading">Professional Certification</h5>
                  <p className="p-18 mb-2" style={{ height: "48px" }}><b>Recommended start</b></p>
                  <p className="p-18">Ideal for individuals just starting in technology or thinking about a career change</p>
                </div>
                <div>
                  <Link to="/contact" className="btn btn-outline-primary" style={{ width: "220px" }}>Professional Certifications</Link>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justfy-content-around py-5">
                <div>
                  <img src={"../../level2.png"} alt="Explore – Value proposition image" style={{ width: "auto", height: "60px" }} className="mb-3" />
                  <h5 className="twolineHeading">Expert Certification</h5>
                  <p className="p-18 mb-2" style={{ height: "48px" }}><b>With comprehensive working experience</b></p>
                  <p className="p-18">It is helpful to have related Professional certification but is not required</p>
                </div>
                <div>
                  <Link to="/contact" className="btn btn-outline-primary" style={{ width: "220px" }}>Expert Certifications</Link>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-4 border-0 mb-4 mb-lg-0">
              <div className="col-12 col-sm-12 text-center d-flex flex-column justfy-content-around py-5">
                <div>
                  <img src={"../../level3.png"} alt="Explore – Value proposition image" style={{ width: "auto", height: "60px" }} className="mb-3" />
                  <h5 className="twolineHeading">Ninja Certification</h5>
                  <p className="p-18 mb-2" style={{ height: "48px" }}><b>Comprehensive working experience with impact</b></p>
                  <p className="p-18">Ninja certification requires a expert level certification</p>
                </div>
                <div>
                  <Link to="/contact" className="btn btn-outline-primary" style={{ width: "220px" }}>Ninja Certifications</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid border-top py-4 mt-5">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 text-center">
                <p className="mb-0"><b>Hosted with ❤️ by <a href="https://www.99xtechnology.com/" target="_blank" style={{color:"#8E44AD"}}>99X Technology</a></b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
