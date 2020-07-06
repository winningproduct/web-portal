import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AvatarsList from "../components/Contributors/AvatarsList"

const Contact = () => {
  return (
  <Layout>
    <SEO title="Contact Us" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 contactBanner px-0 d-none d-lg-block">
          <img src={"../../contact.jpg"} className="contactBannerImg" loading="lazy" alt="Background Banner" />
          <div className="overlay d-flex px-5 align-items-center justify-content-center">
            <div className="d-flex flex-column">
              <div>
                <h3 className="text-white mb-4">Contribute your knowledge</h3>
                <p className="text-white lead">
                  Help us improve the knowledge model with what you learnt during the process. What you learnt the hard
                  way can help someone else who is starting just like you did. Join our team of knowledge gurus.
                </p>
              </div>
              <div>
                <AvatarsList />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center contactForm px-5">
          <h3>Interested to get more information? </h3>
          <p className="lead">Drop your contact here and we'll get in touch.</p>
          <form name="WP Contact Form" method="POST" data-netlify="true" style={{maxWidth:"520px"}}>
            <input type="hidden" name="form-name" value="WP Contact Form" />
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input type="text" name="name" className="form-control" id="exampleInputPassword1" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Contact
