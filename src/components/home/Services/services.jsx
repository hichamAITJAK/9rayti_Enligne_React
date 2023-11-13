import React from 'react'
import Subscribe from '../sectionItems/subscribe'
import Sponsors from '../sectionItems/sponsors'

const Services = () => {
  return (
    <div className='my-5 pt-3'>
      <div class="about-wrapper pb-lg--7 pt-lg--7 pt-5 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 sm-mb-4">
              <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">Our Pricing</span>
              <h2 class="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 mt-3 d-block lh-3">Explore plan that's <br></br> right for your business</h2>
              <p class="fw-400 font-xsss lh-28 text-grey-500 mb-4">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
              <a href="#" class="video-bttn" data-toggle="modal" data-target="#Modalvideo"><img src="images/service.jpg" alt="video" class="img-fluid rounded-lg" /></a>

            </div>
            <div class="col-lg-6 offset-lg-1">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="card mb-4 w-100 border-0 pb-0">
                    <i class="btn-round-lg alert-success feather-layers text-success ml-0 mb-2 font-lg"></i>
                    <h2 class="fw-700 font-xss text-grey-900 mt-1">Automatic Updates</h2>
                    <p class="fw-400 font-xsss lh-28 text-grey-500">Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.</p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="card mb-4 w-100 border-0 pb-0">
                    <i class="btn-round-lg alert-danger feather-award text-danger ml-0 mb-2 font-lg"></i>
                    <h2 class="fw-700 font-xss text-grey-900 mt-1">Blazing Performance</h2>
                    <p class="fw-400 font-xsss lh-28 text-grey-500">Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.</p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="card mb-4 w-100 border-0 pb-0">
                    <i class="btn-round-lg alert-info feather-cpu text-info ml-0 mb-2 font-lg"></i>
                    <h2 class="fw-700 font-xss text-grey-900 mt-1">Free Updates</h2>
                    <p class="fw-400 font-xsss lh-28 text-grey-500">Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.</p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="card mb-4 w-100 border-0 pb-0">
                    <i class="btn-round-lg alert-warning feather-hard-drive text-warning ml-0 mb-2 font-lg"></i>
                    <h2 class="fw-700 font-xss text-grey-900 mt-1">Unlimited Layouts</h2>
                    <p class="fw-400 font-xsss lh-28 text-grey-500">Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.</p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="card mb-4 w-100 border-0 pb-0">
                    <i class="btn-round-lg alert-secondary feather-lock text-secondary ml-0 mb-2 font-lg"></i>
                    <h2 class="fw-700 font-xss text-grey-900 mt-1">Best Sellers</h2>
                    <p class="fw-400 font-xsss lh-28 text-grey-500">Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.</p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="card mb-4 w-100 border-0 pb-0">
                    <i class="btn-round-lg alert-success feather-globe text-success ml-0 mb-2 font-lg"></i>
                    <h2 class="fw-700 font-xss text-grey-900 mt-1">Branding Feture</h2>
                    <p class="fw-400 font-xsss lh-28 text-grey-500">Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature-wrapper layer-after">
            <div class="container">
                  <div class="row">
                    
                   
                    <div class="col-lg-7 ">
                        <img src="images/modal-bg-2.png" alt="image" class="w-100"/>
                    </div>
                     <div class="col-lg-4 offset-lg-1">
                        <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 mt-4 text-uppercase rounded-xl ls-2 alert-danger d-inline-block text-danger mr-1">Our feature</span>
                        <h2 class="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 mt-3 d-block lh-3">Explore amazing experiences ever and join us.</h2>
                        <p class="fw-400 font-xsss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
                        <h4 class=" font-xssss fw-600 text-grey-500 mb-3 "><i class="ti-check font-xssss mr-2 btn-round-xs alert-danger text-danger"></i> Unlimited views For anyone validating</h4>
                        <h4 class=" font-xssss fw-600 text-grey-500 mb-3 "><i class="ti-check font-xssss mr-2 btn-round-xs alert-danger text-danger"></i> We enjoy building experiences.</h4>
                        <a href="#" class="btn border-0 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-3 w150">Subscribe</a>
                    </div>
                  </div>
            </div>
      </div>
      <Subscribe></Subscribe>
      <Sponsors></Sponsors>
    </div>
  )
}

export default Services