import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="category section bg-gray">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Browse Categories</h2>
              <p>Most popular categories of portal, sorted by popularity</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="">
                  <div className="icon bg-color-1">
                    <i className="lni-home"></i>
                  </div>
                  <h3>Finance</h3>
                  <p>(4286 jobs)</p>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="">
                  <div className="icon bg-color-2">
                    <i className="lni-world"></i>
                  </div>
                  <h3>Sale/Markting</h3>
                  <p>(2000 jobs)</p>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="">
                  <div className="icon bg-color-3">
                    <i className="lni-book"></i>
                  </div>
                  <h3>Education/Training</h3>
                  <p>(1450 jobs)</p>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="">
                  <div className="icon bg-color-4">
                    <i className="lni-display"></i>
                  </div>
                  <h3>Technologies</h3>
                  <p>(5100 jobs)</p>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="">
                  <div className="icon bg-color-5">
                    <i className="lni-brush"></i>
                  </div>
                  <h3>Art/Design</h3>
                  <p>(5079 jobs)</p>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="/">
                  <div className="icon bg-color-6">
                    <i className="lni-heart"></i>
                  </div>
                  <h3>Healthcare</h3>
                  <p>(3235 jobs)</p>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="/">
                  <div className="icon bg-color-7">
                    <i className="lni-funnel"></i>
                  </div>
                  <h3>Science</h3>
                  <p>(1800 jobs)</p>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12 f-category">
                <Link to="/">
                  <div className="icon bg-color-8">
                    <i className="lni-cup"></i>
                  </div>
                  <h3>Food Services</h3>
                  <p>(4286 jobs)</p>
                </Link>
              </div>
            </div>
          </div>
        </section>


        <section id="featured" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Jobs</h2>
              <p>Hand-picked jobs featured depending on popularity and benifits</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="job-featured">
                  <div className="icon">
                    <img src="assets/img/features/img1.png" alt="imag 1"/>
                  </div>
                  <div className="content">
                    <h3><a to="job-details.html">Software Engineer</a></h3>
                    <p className="brand">MizTech</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="job-featured">
                  <div className="icon">
                    <img src="assets/img/features/img2.png" alt="image 2"/>
                  </div>
                  <div className="content">
                    <h3><Link to="/">Graphic Designer</Link></h3>
                    <p className="brand">Hunter Inc.</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="part-time">Part Time</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="job-featured">
                  <div className="icon">
                    <img src="assets/img/features/img3.png" alt="image 3"/>
                  </div>
                  <div className="content">
                    <h3><Link to="job-details.html">Managing Director</Link></h3>
                    <p className="brand">MagNews</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="job-featured">
                  <div className="icon">
                    <img src="assets/img/features/img4.png" alt="image 4"/>
                  </div>
                  <div className="content">
                    <h3><a to="job-details.html">Software Engineer</a></h3>
                    <p className="brand">AmazeSoft</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="job-featured">
                  <div className="icon">
                    <img src="assets/img/features/img5.png" alt="image 5"/>
                  </div>
                  <div className="content">
                    <h3><Link to="job-details.html">Graphic Designer</Link></h3>
                    <p className="brand">Bingo</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="part-time">Part Time</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="job-featured">
                  <div className="icon">
                    <img src="assets/img/features/img6.png" alt="image 6"/>
                  </div>
                  <div className="content">
                    <h3><Link to="job-details.html">Managing Director</Link></h3>
                    <p className="brand">MagNews</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-4">
                <Link to="/" className="btn btn-common">Browse All Jobs</Link>
              </div>
            </div>
          </div>
        </section>


        <div id="browse-jobs" className="section bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="text-wrapper">
                  <div>
                    <h3>7,000+ Browse Jobs</h3>
                    <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                    <Link className="btn btn-common" to="/">Search jobs</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="img-thumb">
                  <img className="img-fluid" src="assets/img/search.png" alt="image search"/>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="how-it-works section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How It Works?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br/> metus effici turac fringilla lorem facilisis.</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="work-process">
                  <span className="process-icon">
                    <i className="lni-user"></i>
                  </span>
                  <h4>Create an Account</h4>
                  <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="work-process step-2">
                  <span className="process-icon">
                    <i className="lni-search"></i>
                  </span>
                  <h4>Search Jobs</h4>
                  <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="work-process step-3">
                  <span className="process-icon">
                    <i className="lni-cup"></i>
                  </span>
                  <h4>Apply</h4>
                  <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="latest-jobs" className="section bg-gray">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Latest Jobs</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br/> metus effici turac fringilla lorem facilisis.</p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="jobs-latest">
                  <div className="img-thumb">
                    <img src="assets/img/features/img1.png" alt="image feature"/>
                  </div>
                  <div className="content">
                    <h3><Link to="/">UX Designer</Link></h3>
                    <p className="brand">MizTech</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                  <div className="save-icon">
                    <Link to="/"><i className="lni-heart-filled"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="jobs-latest">
                  <div className="img-thumb">
                    <img src="assets/img/features/img2.png" alt="image 2 Feature"/>
                  </div>
                  <div className="content">
                    <h3><Link to="">UI Designer</Link></h3>
                    <p className="brand">Hunter Inc.</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="part-time">Part Time</span>
                  </div>
                  <div className="save-icon">
                    <Link to="/"><i className="lni-heart-filled"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="jobs-latest">
                  <div className="img-thumb">
                    <img src="assets/img/features/img3.png" alt="image 3 features"/>
                  </div>
                  <div className="content">
                    <h3><Link to="job-details.html">Web Developer</Link></h3>
                    <p className="brand">MagNews</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                  <div className="save-icon">
                    <Link to="/"><i className="lni-heart-filled"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="jobs-latest">
                  <div className="img-thumb">
                    <img src="assets/img/features/img4.png" alt="image 4 features"/>
                  </div>
                  <div className="content">
                    <h3><Link to="">UX Designer</Link></h3>
                    <p className="brand">AmazeSoft</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                  <div className="save-icon">
                    <Link to="/"><i className="lni-heart-filled"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="jobs-latest">
                  <div className="img-thumb">
                    <img src="assets/img/features/img5.png" alt="image 5 features"/>
                  </div>
                  <div className="content">
                    <h3><Link to="/">Digital Marketer</Link></h3>
                    <p className="brand">Bingo</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="part-time">Part Time</span>
                  </div>
                  <div className="save-icon">
                    <Link to="/"><i className="lni-heart-filled"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="jobs-latest">
                  <div className="img-thumb">
                    <img src="assets/img/features/img6.png" alt="image 6 feature"/>
                  </div>
                  <div className="content">
                    <h3><Link to="job-details.html">Web Developer</Link></h3>
                    <p className="brand">MagNews</p>
                    <div className="tags">
                      <span><i className="lni-map-marker"></i> New York</span>
                      <span><i className="lni-user"></i>John Smith</span>
                    </div>
                    <span className="full-time">Full Time</span>
                  </div>
                  <div className="save-icon">
                    <Link to="/"><i className="lni-heart-filled"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-4">
                <Link to="/" className="btn btn-common">Browse All Jobs</Link>
              </div>
            </div>
          </div>
        </section>


        <section id="testimonial" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Clients Review</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br/> metus effici turac fringilla lorem facilisis.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div id="testimonials" className="touch-slider owl-carousel">
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="author">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img1.png" alt="image 2 testimonial"/>
                        </div>
                      </div>
                      <div className="content-inner">
                        <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim,
                          cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                        <div className="author-info">
                          <h2><Link to="/">Jessica</Link></h2>
                          <span>Senior Accountant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="author">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img2.png" alt="imae 2 testinmonial"/>
                        </div>
                      </div>
                      <div className="content-inner">
                        <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim,
                          cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                        <div className="author-info">
                          <h2><Link to="/">John Doe</Link></h2>
                          <span>Project Menager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="author">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img3.png" alt="image 3 testimonial"/>
                        </div>
                      </div>
                      <div className="content-inner">
                        <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim,
                          cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                        <div className="author-info">
                          <h2><Link to="/">Helen</Link></h2>
                          <span>Engineer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="section bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-xs-12">
                <div className="download-wrapper">
                  <div>
                    <div className="download-text">
                      <h4>Download Our Best Apps</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et metus effici turac fringilla lorem facilisis, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="app-button">
                      <Link to="/" className="btn btn-border"><i className="lni-MizTech"></i>Download <br/> <span>From MizTech Store</span></Link>
                      <Link to="/" className="btn btn-common btn-effect"><i className="lni-android"></i> Download <br/> <span>From Play Store</span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-xs-12">
                <div className="download-thumb">
                  <img className="img-fluid" src="assets/img/app.png" alt="app image"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
