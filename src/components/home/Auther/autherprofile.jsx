import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AutherProfile = () => {

  const [Socials, setSocials] = useState({})
  const [MyUserConnect, setMyUserConnect] = useState(JSON.parse(localStorage.getItem("user1")))

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/SocialMeiasapi/${MyUserConnect.userDetails.id_etudiant}`)
      .then(response => {
        setSocials(response.data.SocialMedias)

      }).catch(error => {
        console.log('Error fetching data in your programme:', error);
      });
  }, []);



  console.log("this is social media from auther : ", Socials)

  return (
    <div class="course-details pb-lg--7  pb-5 pt-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="middle-sidebar-left">

              <div class="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden mb-3">
                <div class="card-body position-relative h200 bg-gradiant-bottom bg-image-cover bg-image-center" style={{ backgroundImage: "url(images/bb-9.jpg)" }}></div>
                <div class="card-body d-block w-100 pl-5 pr-4">
                  <figure class="avatar ml-0 mb-0 mt--6 position-relative w90 z-index-1"><img src="images/user-12.png" alt="image" class="float-right p-1 bg-white rounded-circle w-100" /></figure>
                  <div class="clearfix"></div>
                  <div class="row">
                    <div class="col-6">
                      <h4 class="fw-700 font-xs mt-3 mb-1">{MyUserConnect.userDetails.nomComplet}<i class="ti-check font-xssss btn-round-xs bg-success text-white ml-1"></i></h4>
                      <span class="font-xssss fw-600 text-grey-500 d-inline-block ml-0">{MyUserConnect.userDetails.email}</span>
                      <span class="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                      <span class="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Telephone : {MyUserConnect.userDetails.tel}</span>
                      <span class="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                      <span class="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Sex : {MyUserConnect.userDetails.sex} </span>
                      <span class="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                      <span class="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Age : {MyUserConnect.userDetails.age} </span>
                      {/*  <span class="font-xssss fw-600 text-grey-500 d-inline-block ml-1">HTML5</span> */}
                    </div>


                    {(Socials) ? (
                      <div class="col-6 text-right">
                        <ul class="d-flex align-items-center mt-2 float-left">
                          <li class="mr-2"><a href={Socials.facebook} class="text-decoration-none btn-round-md bg-facebook"><i class="font-xs ti-facebook text-white"></i></a></li>
                          <li class="mr-2"><a href={Socials.linkdin} class="text-decoration-none btn-round-md bg-linkedin"><i class="font-xs ti-linkedin text-white"></i></a></li>
                          <li class="mr-2"><a href={Socials.instagram} class="text-decoration-none btn-round-md bg-instagram"><i class="font-xs ti-instagram text-white"></i></a></li>
                          <li class="mr-2"><a href={Socials.youtube} class="text-decoration-none btn-round-md bg-pinterest"><i class="font-xs ti-youtube text-white"></i></a></li>
                        </ul>
                        <a href="#" class="text-decoration-none mt-2 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white">FOLLOW</a><a href="#" class="btn-round-md ml-3 mt-2 d-inline-block float-right rounded-lg bg-greylight add-wishlist"><i class="feather-bookmark font-sm text-grey-900"></i></a>
                      </div>
                    ) :
                      <><p className='text-danger'>Update your social media!!!</p> </>
                    }

                    <div class="col-12">
                      <ul class="memberlist mt-3 mb-2 ml-0">
                        <li><a href="#" className='text-decoration-none'><img src="images/user-6.png" alt="user" class="w30 d-inline-block" /></a></li>
                        <li><a href="#" className='text-decoration-none'><img src="images/user-7.png" alt="user" class="w30 d-inline-block" /></a></li>
                        <li><a href="#" className='text-decoration-none'><img src="images/user-8.png" alt="user" class="w30 d-inline-block" /></a></li>
                        <li><a href="#" className='text-decoration-none'><img src="images/user-3.png" alt="user" class="w30 d-inline-block" /></a></li>
                        <li class="last-member"><a href="#" class="text-decoration-none bg-greylight fw-600 text-grey-500 text-center font-xssss ls-3">+{MyUserConnect.userDetails.Nb_course}</a></li>
                        <li class="pl-4 w-auto"><a href="#" class="text-decoration-none fw-500 text-grey-500 font-xssss">Courses number</a></li>
                      </ul>
                    </div>

                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default AutherProfile