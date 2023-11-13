import React from 'react'

const Accueil = () => {

    const containerStyle = {
        backgroundImage: `url("./images/bg-layer.png")`,
        marginTop:"10px"
       
    };
  return (
    <>
    <div class="container-fluid banner-wrapper bg-image-cover bg-image-bottomcenter " style={containerStyle}>
        <div className='container mb-sm-5 pb-sm-5'>
            <div class="row ">
                <div class="col-xl-6 col-lg-6 vh-lg--100 align-items-center d-flex sm-mt-7">
                    <div class="card w-100 border-0 bg-transparent d-block sm-mt-7">
                    <h2 class="fw-700 text-grey-900 display4-size display4-lg-size display4-md-size lh-1 mb-0 os-init" >Find the best, perfect Online Course<i class="feather-slack text-success font-xxl"></i></h2>
                    <h4 class=" fw-500 mb-4 lh-30 font-xsss text-grey-500 mt-3 os-init" > A courses online website is designed to cater to diverse audiences, including students, professionals, hobbyists, and lifelong learners. It hosts a variety of courses spanning numerous subjects, industries, and skill levels, making education more accessible and flexible.”</h4>
                    <a href="http://localhost:3000/About" class="btn border-0 w200 bg-primary p-3 text-white fs-5 fw-400 rounded-lg d-inline-block font-xssss btn-light mt-1 ms-3 os-init">Read More</a>                     
                    </div>
                </div>
                <div class="col-lg-6 align-items-center d-flex vh-lg--100 ">
                    <img src="images/man-bg.png" alt="icon" class="pt-5 d-none d-lg-block"/>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Accueil