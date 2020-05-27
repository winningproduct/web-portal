import React from "react";

const Optimize = ({learn}) => (
  <div style={{ border: "2px solid #ffbf40", backgroundColor: "#fff", width: "420px" }}>
    <div className="px-3 py-3">
      <p className="mb-0 lead" style={{ fontWeight: "400" }}>Optimize</p>
      <p className="mb-0 p-18">Fine tune the product to achieve the maximum output</p>
    </div>
    <div className="px-3">
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Performance Tuning</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Cost optimization</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Analytics Review Process</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Promotions Process</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Customer support</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#ffffff", color: "#2ECC71", border: "1px solid #ffbf40" }}
        className="d-flex align-items-center mb-0 px-3 mb-2 justify-content-center"
      >
        <p className="mb-0">+4 more</p>
      </div>
    </div>
    <div className="py-3 mb-0 mt-5 text-center" style={{ backgroundColor: "#ffbf40", color: "#fff", cursor: "pointer" }} onClick={() => learn("6-optimize")}>
      <p className="mb-0 text-center">
        <span className="text-white">LEARN OPTIMIZE</span>
      </p>
    </div>
  </div>

)

export default Optimize;