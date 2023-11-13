import React from 'react'
import Sponsors from "../sectionItems/sponsors"
import Overview from "../sectionItems/overview"

export function About(){
    return (
        <div class="about-wrapper pb-lg--7 pt-lg--7 pt-5 pb-7  mt-5" >
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="text-grey-900 fw-700 display1-size display2-md-size pb-2 mb-0 mt-3 d-block lh-3">Choose the plan <br></br> that's right for your business</h2>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <h4 class=" fw-500 mb-4 lh-30 font-xsss text-grey-500 mt-0"> Quite simply the best theme we’ve ever purchased. The customisation and flexibility are superb. Speed is awesome.</h4>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <ul class="d-block list-inline float-right-md mb-3">
                                <li class="list-inline-item mr-1"><a href="#" class="btn-round-md bg-facebook"><i class="font-xs ti-facebook text-white"></i></a></li>
                                <li class="list-inline-item mr-1"><a href="#" class="btn-round-md bg-twiiter"><i class="font-xs ti-twitter-alt text-white"></i></a></li>
                                <li class="list-inline-item mr-1"><a href="#" class="btn-round-md bg-linkedin"><i class="font-xs ti-linkedin text-white"></i></a></li>
                                <li class="list-inline-item mr-1"><a href="#" class="btn-round-md bg-instagram"><i class="font-xs ti-instagram text-white"></i></a></li>
                                <li class="list-inline-item mr-1"><a href="#" class="btn-round-md bg-pinterest"><i class="font-xs ti-pinterest text-white"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-12 mt-3">
                            <a href="#" class="video-bttn" data-toggle="modal" data-target="#Modalvideo"><img src="images/a-2.jpg" alt="about" class="img-fluid rounded-lg" /></a>
                        </div>
                        <div class="col-lg-12 mt-5 text-center pt-3">
                            <a href="#" class="ml-1 mr-1 rounded-lg text-primary font-xss border-size-md border-primary fw-600 open-font p-3 w200 btn md-mb-2 ">Learn More</a>
                            <h3 class="font-xss fw-600 text-grey-500 p-3 d-inline-block d-none-xs">or</h3>
                            <a href="#" class="ml-1 mr-1 rounded-lg alert-primary text-white font-xss border-size-md border-0 fw-600 open-font p-3 bg-primary w200 btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            

            <div class="how-to-work my-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 mb-4"><img src="images/blog-45.jpg" alt="image" class="rounded-lg img-fluid shadow-xs" /></div>
                        <div class="col-lg-6 offset-lg-1 page-title style1">
                            <h2 class="fw-700 text-grey-800 display1-size display2-md-size lh-3 pt-lg--5">Online recharge and pay monthly bill easy way.</h2>
                            <p class="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0  mt-3 w-75 w-xs-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>

                            <h4 class="fw-600 font-xs mt-5 mb-2"><i class="ti-check btn-round-xs text-white bg-success mr-2 border"></i> Choose what to do</h4>
                            <p class="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">Looking for a cozy hotel to stay, a restaurant to eat, a museum to visit or a mall to do some.</p>

                            <h4 class="fw-600 font-xs mt-4 mb-2"><i class="ti-check btn-round-xs text-white bg-success mr-2 border"></i> Find what you want</h4>
                            <p class="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">Search and filter hundreds of listings, read reviews, explore photos and find the perfect spot.</p>

                            <h4 class="fw-600 font-xs mt-4 mb-2"><i class="ti-check btn-round-xs text-white bg-success mr-2 border"></i> Explore amazing code</h4>
                            <p class="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">Go and have a good time or even make a booking directly from the listing page.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Overview/>

            

            <div class="subscribe-wrapper bg-primary rounded-5 pt-5 pt-lg--7">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <div class="card w-100 p-4 p-lg--5 rounded-xxl bg-current border-0">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 text-center">
                                        <h2 class="fw-700 text-white display2-size lh-3 mb-2 display2-md-size">Subscribe up to our newsletter</h2>
                                    </div>
                                    <div class="col-lg-8 text-center">
                                        <p class="font-xsss lh-28 text-white mb-0 d-none-xs"> Lorem ipsum dolor sit amet consectetur adipisicing, elit. Neque facilis corporis perferendis, debitis error exercitationem reiciendis odio, tenetur tempora dignissimos deserunt eius repellat.</p>
                                    </div>
                                    <div class="col-lg-6 text-center mt-4 mb-3">
                                        <div class="form-group icon-right-input style2-input mb-0"><input type="text" placeholder="Enter Email Address" class="form-control style2 rounded-xl bg-greylight border-0 font-xsss fw-500 pl-3"/><i class="feather-mail text-primary font-lg m-1"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sponsors></Sponsors>
        </div>

    )
}
 