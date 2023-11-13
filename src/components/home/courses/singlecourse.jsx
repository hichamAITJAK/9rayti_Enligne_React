import React ,{ useState, useEffect }from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch,  } from 'react-redux';
import { AddCourToSaved,AddCourToCart } from '../context/SaveitemReducer';

const Singlecourse = () => {
  const [Course,setCourse] = useState({});
  const {id_course} = useParams();
  const dispatch = useDispatch();

  const MyUser = JSON.parse(localStorage.getItem("user1"))
  const MyuserID = MyUser.userDetails
  
  const navigate = useNavigate()
        useEffect(() => {
            axios.get(`http://127.0.0.1:8000/api/Coursesapi/${id_course}`) 
              .then(response => {
                setCourse(response.data.courses)                
              })
              .catch(error => {
                console.log('Error fetching data in your programme:', error);
              });
          }, []); 
console.log(MyuserID)
          const SaveItemByClick = (Mycourse)=>{
              dispatch(AddCourToSaved({Mycourse,MyuserID}))  
              navigate('/SavedItems')
          }
          const AddToCartByClick = (Mycourse)=>{
              dispatch(AddCourToCart({Mycourse,MyuserID}))  
              navigate('/Cart')
          }

  return (
    // <img style={{marginTop:"200px"}} src="./images/star.png" alt="star" class="w15 float-left" />
    <div class="course-details pt-lg--7 pb-lg--7 pt-5 mt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-xxl-9 col-lg-8">
            <div class="card border-0 mb-0 rounded-lg overflow-hidden" style={{ backgroundImage: "url(images/ivan-samkov.jpg)" }}>
              <div class="card-body p-lg-5 p-4 bg-black-08">
                <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Categorie</span>
                <h2 class="fw-700 font-lg d-block lh-4 mb-1 text-white mt-2">{Course.title}</h2>
                <p class="font-xsss fw-500 text-grey-100 lh-30 pr-lg-5 mt-3 mr-lg-5">{Course.discription}</p>
                <p class="font-xsss fw-500 text-grey-100 lh-30 pr-lg-5 mt-3 mr-lg-5">Language : {Course.Language}</p>
                <span class="font-xssss fw-600 text-grey-500 d-inline-block ml-1">{Course.created_at}</span>
                <span class="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                <span class="font-xssss fw-700 text-primary d-inline-block ml-0 ">{Course.likes} Likes </span>

                <div class="clearfix"></div>
                <p class="review-link font-xssss fw-600 text-grey-500 lh-3 mb-4">{Course.N_participant} Students apply</p>

                <a href="#" class="text-decoration-none btn-round-lg mb-2 ml-sm-3 d-inline-block rounded-lg bg-greylight"><i class="feather-share-2 font-sm text-grey-700"></i></a>
                <a href="#" class="text-decoration-none btn-round-lg mb-2 ml-2 d-inline-block rounded-lg bg-danger"><i class="feather-bookmark font-sm text-white"></i> </a>
                <button class="text-decoration-none bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200" onClick={()=>{AddToCartByClick(Course)}}>Get Course</button>
              </div>
            </div>

            <div class="card d-block border-0 rounded-lg overflow-hidden mt-4">
              <div id="accordion" class="accordion mb-0">
                <div class="card shadow-xss mb-0">
                  <div class="card-header bg-greylight theme-dark-bg" id="headingOne">
                    <h5 class="mb-0"><button class="btn font-xsss fw-600 btn-link  text-decoration-none" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Watch  to the Course now...</button></h5>
                  </div>
                  <div id="collapseOne" class="collapse p-3 show" aria-labelledby="headingOne" data-parent="#accordion">
                 
                    <div class="card-body d-flex p-2 w-100 ">
                           <video src="" controls width={"100%"}></video>
                    </div>
                   
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-xl-4 col-xxl-3 col-lg-4">
            <div class="card  overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0 shadow-xss">
              <div class="card-body p-3 d-block text-left">
                <h1 class="display1-size text-current fw-700 mb-4">€ {Course.price} <span class="font-xssss text-grey-500 fw-500"> / Lifetime Access</span></h1>
                <h4 class="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i class="feather-shield font-lg text-current position-absolute left-0"></i> Experience <span class="d-block text-grey-500 mt-1 font-xssss">0 - 2 Year </span></h4>
                <h4 class="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i class="feather-database font-lg text-current position-absolute left-0"></i> Language <span class="d-block text-grey-500 mt-1 font-xssss">{Course.Language}</span></h4>
                <h4 class="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i class="feather-home font-lg text-current position-absolute left-0"></i> Gender <span class="d-block text-grey-500 mt-1 font-xssss">{MyuserID.sex} </span></h4>
                <h4 class="pl-35 mb-0 font-xsss fw-600 text-grey-900 position-relative"><i class="feather-award font-lg text-current position-absolute left-0"></i> Age <span class="d-block text-grey-500 mt-1 font-xssss">32 Year </span></h4>
                <button onClick={()=>{AddToCartByClick(Course)}} class="text-decoration-none bg-primary border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-block mt-4 w-100 p-2 lh-34 text-center ls-3 ">Buy Now</button>
                <button onClick={()=>{SaveItemByClick(Course)}} class="text-decoration-none bg-primary border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-block mt-4 w-100 p-2 lh-34 text-center ls-3 ">Save</button>
              </div>
            </div>


         


          </div>

        </div>
      </div>
    </div>
  )
}

export default Singlecourse