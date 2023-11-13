import React from 'react'

const Subscribe = () => {
  return (
    <div class="price-wrap pt-lg--7 pt-5 layer-after " id='Offers'>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 sm-mb-4">
                <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">Our Pricing</span>
                <h2 class="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">Choose the plan that's right for your goal</h2>
                <p class="fw-400 font-xsss lh-28 text-grey-500">Are you ready to take your personal and professional
                                                                   growth to unprecedented levels? Our meticulously crafted 
                                                                  courses are not just about education; they're about transformation.
                                                                   </p>
                <div class="custom-control custom-switch pl-0">
                    <p class="fw-600 font-xssss lh-28 text-grey-900 d-inline-block pr-5 mr-3">Bill Monthly</p>
                    <input type="checkbox" class="custom-control-input dark-mode-switch" id="darkmodeswitch1"/>
                    <label class="custom-control-label bg-success mt-1" for="darkmodeswitch1"></label>
                    <p class="fw-600 font-xssss lh-28 text-grey-900 d-inline-block">Bill Anually</p>
                </div>
            </div>
            <div class="col-lg-7 offset-lg-1">
                <div class="row">
                    
                    <div class="col-lg-6">
                        <div class="card p-4 mb-4 bg-primary border-0 shadow-xss rounded-lg">
                            <div class="card-body">
                                <h2 class="text-white font-xsssss fw-700 text-uppercase ls-3 ">FREE</h2>
                                <h1 class="display2-size text-white fw-700">€ 0</h1>
                                <h4 class="text-white fw-500 mb-4 lh-24 font-xssss">For anyone validating Framer as a professional prototyping tool.</h4>
                                <h4 class="text-white font-xssss mb-2"><i class="ti-check mr-2 text-white"></i> The first cours free</h4>
                                <h4 class="text-white font-xssss mb-2"><i class="ti-check mr-2 text-white"></i> Make your owne cours</h4>
                                <h4 class="text-white font-xssss mb-4"><i class="ti-check mr-2 text-white"></i> Private share links</h4>
                                <a href="#" class="btn btn-block border-0 w-100 bg-white p-3 text-primary fw-600 rounded-lg d-inline-block font-xssss btn-light">Subscribe</a>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="card p-4 mb-4 bg-white border-0 shadow-lg rounded-lg">
                            <div class="card-body">
                                <h2 class="text-grey-900 font-xsssss fw-700 text-uppercase ls-3 ">Starter</h2>
                                <h1 class="display2-size text-grey-900 fw-700">€ 49</h1>
                                <h4 class="text-grey-900 fw-500 mb-4 lh-24 font-xssss">For anyone validating Framer as a professional prototyping tool.</h4>
                                <h4 class="text-grey-900 fw-600 font-xssss mb-2"><i class="ti-check mr-2 text-grey-900 fw-600"></i> Unlimited views</h4>
                                <h4 class="text-grey-900 fw-600 font-xssss mb-2"><i class="ti-check mr-2 text-grey-900 fw-600"></i> Get your dashboard</h4>
                                <h4 class="text-grey-900 fw-600 font-xssss mb-2"><i class="ti-check mr-2 text-grey-900 fw-600"></i> Make your Courses </h4>
                                <h4 class="text-grey-900 fw-600 font-xssss mb-4"><i class="ti-check mr-2 text-grey-900 fw-600"></i> Private share links</h4>
                                <a href="#" class="btn btn-block border-0 w-100 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light">Subscribe</a>

                            </div>
                        </div>
                    </div>
                </div>
            

            </div>

        </div>
        
    </div>
</div>
  )
}

export default Subscribe