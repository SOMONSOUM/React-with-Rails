import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer>
        <section className="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-xs-12">
                <div className="widget">
                  <div className="footer-logo"><img src="assets/img/logo-footer.png" alt="logo footer"/></div>
                  <div className="textwidget">
                    <p>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Quick Links</h3>
                  <ul className="menu">
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Support</Link></li>
                    <li><Link to="/">License</Link></li>
                    <li><Link to="/">Contact</Link></li>
                  </ul>
                  <ul className="menu">
                    <li><Link to="/">Terms & Conditions</Link></li>
                    <li><Link to="/">Privacy</Link></li>
                    <li><Link to="/">Refferal Terms</Link></li>
                    <li><Link to="/">Product License</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Subscribe Now</h3>
                  <p>Sed consequat sapien faus quam bibendum convallis.</p>
                  <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                    <div className="form-group is-empty">
                      <input type="email" value="" name="Email" className="form-control" id="EMAIL" placeholder="Enter Email..." required=""/>
                      <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-envelope"></i></button>
                      <div className="clearfix"></div>
                    </div>
                  </form>
                  <ul className="mt-3 footer-social">
                    <li><Link className="facebook" to="/"><i className="lni-facebook-filled"></i></Link></li>
                    <li><Link className="twitter" to="/"><i className="lni-twitter-filled"></i></Link></li>
                    <li><Link className="linkedin" to="/"><i className="lni-linkedin-fill"></i></Link></li>
                    <li><Link className="google-plus" to="/"><i className="lni-google-plus"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center">
                  <p>Designed and Developed by SOUM Somon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
