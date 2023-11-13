import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { DeleteCourFromSaved } from '../context/SaveitemReducer';
import { DeleteAllCourFromSaved } from '../context/SaveitemReducer';

const MySavedItems = () => {
    const [SavedCourse , setSavedCourse ] = useState([])      
    const [Clicked,SetClicked] = useState("")  
    const dispatch = useDispatch();
   
    const MyUser = JSON.parse(localStorage.getItem("user1"))
    const MyuserLog = MyUser.userDetails


   
    useEffect(() => {
        axios.get('http://localhost:3100/SavedCourses') 
          .then(response => {
            setSavedCourse(response.data.filter(item => item.MyuserID.id_etudiant  === MyuserLog.id_etudiant))
           
          })
          .catch(error => {
            console.log('Error fetching data in your programme:', error);
            
          });

          
      }, [Clicked]); 

  

    const DeleteItemByClick = (Mycourse)=>{
        console.log("to delete : ",Mycourse)
        dispatch(DeleteCourFromSaved(Mycourse))
        SetClicked("clicked")
    }
    
    const DeleteAllItemsByClick = ()=>{
        dispatch(DeleteAllCourFromSaved( SavedCourse))
        SetClicked("clicked")
    }
    return (
        <div className='mt-5 pt-5'>
            <div class="page-nav bg-lightblue pt-lg--7 pb-lg--7 pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center"><h1 class="text-grey-800 fw-700 mont-font display4-size display4-md-size">Saved Courses</h1></div>
                    </div>
                </div>
            </div>
            <div class="cart-wrapper pt-lg--7 pt-5 pb-lg--7 pb-5">
                <div class="container mw-75">
                    <div class="row">
                        <div class="col-lg-12 mb-3">
                            <div class="table-content table-responsive">
                                <table class="table text-center">
                                    <thead class="bg-greyblue rounded-lg">
                                        <tr>
                                            <th class="border-0 p-4 text-left">Saved Courses</th>
                                            <th class="border-0 p-4">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                      
                                    {(SavedCourse.length == 0) ? (
                                         <h1>Ooups aucun cours saved!!! </h1>
                                    ) : (
                                        
                                           <> {SavedCourse.map((item)=>(    
                                                                                   
                                                <tr key={item}>
                                                    <td>
                                                        <div class="card course-card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 " style={{height:"250px"}}>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="card-image float-left w-100 mb-0">
                                                                        <a href="default-course-details.html" class="video-bttn position-relative d-block"><img src="images/v-3.png" alt="image" class="w-100" /></a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="card-body pt-0 w-100 float-left pt-3 pl-0 pr-0 pb-0">
                                                                        <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">Bootstrap</span>
                                                                        <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span class="font-xsssss">$</span> {item.Mycourse.price}</span>
                                                                        <h4 class="fw-700 font-xss mt-3 lh-28 mt-0"><Link to="/Singlecourse" class="text-dark text-grey-900">{item.Mycourse.discription} </Link></h4>
                                                                        <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 14 Lesson </h6>
                                                                        <ul class="memberlist mt-3 mb-2 ml-0 d-block">
                                                                            <li><a href="#"><img src="images/user-6.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                            <li><a href="#"><img src="images/user-7.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                            <li><a href="#"><img src="images/user-8.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                            <li><a href="#"><img src="images/user-3.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                            <li class="last-member"><a href="#" class="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                                                                            <li class="pl-4 w-auto"><a href="#" class="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="product-remove text-center"><button  onClick={()=>{DeleteItemByClick(item)}} className='border-0 bg-transparent' name='deleteItem'><i class=" ti-trash font-xs text-grey-500"></i></button></td>
                                                </tr> 
                                            ))}</>
                                        )}
                                       

                                    </tbody>
                                </table>
                            </div>
                            <button  onClick={()=>{DeleteAllItemsByClick()}}  class="text-decoration-none update-cart bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w175 p-3 text-center ls-3">Delete All</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySavedItems