import React from 'react'
import './footer.css'

export default function Footer() {
  return (
      <footer class="new_footer_area bg_color">
        <div class="new_footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget company_widget wow fadeInLeft first"
                  data-wow-delay="0.2s"
                >
                  <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                  <p>
                    Dont miss any updates of our new templates and extensions.!
                  </p>
                  <form
                    action="#"
                    class="f_subscribe_two mailchimp"
                    method="post"
                    novalidate="true"
                    _lpchecked="1"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      class="form-control memail"
                      placeholder="Email"
                    />
                    <p class="mchimp-errmessage lol"></p>
                    <p class="mchimp-sucmessage lol"></p>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft second"
                  data-wow-delay="0.4s"
                >
                  <h3 class="f-title f_600 t_color f_size_18">For Candidates</h3>
                  <ul class="list-unstyled f_list element">
                    <li>
                      <a href="#">Browse Jobs</a>
                    </li>
                    <li>
                      <a href="#">Browse Candidates</a>
                    </li>
                    <li>
                      <a href="#">Candidate Dashboard</a>
                    </li>
                    <li>
                      <a href="#">Job Alerts</a>
                    </li>
                    <li>
                      <a href="#">My Bookmarks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft third"
                  data-wow-delay="0.6s"
                >
                  <h3 class="f-title f_600 t_color f_size_18">For Employers</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; All Employers</a>
                    </li>
                    <li>
                      <a href="#">Employer Dashboard</a>
                    </li>
                    <li>
                      <a href="#">Submit Job</a>
                    </li>
                    <li>
                      <a href="#">Job Packages</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget social-widget pl_70 wow fadeInLeft fourth"
                  data-wow-delay="0.8s"
                >
                  
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-sm-7">
                <p class="mb-0 f_400">
                  © Recruiter Inc.. 2023 All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
  )
}