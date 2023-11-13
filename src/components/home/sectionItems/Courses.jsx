import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Courses = () => {
    const [PopulaireCourses,setPopulaireCourses] = useState([])
    const [ALlCategorie,setALlCategorie] = useState([])
   

    useEffect(() => {
         
        axios.get('http://127.0.0.1:8000/api/Coursesapi') 
          .then(response => {
            setPopulaireCourses(response.data.courses.slice(1,7));    
          }).catch(error => {
            console.log('Error fetching data in your programme:', error);
          });

        axios.get('http://127.0.0.1:8000/api/Categorieapi') 
        .then(response => {
            setALlCategorie(response.data.categories);
        })
      }, []); 

        // 
    // console.log("this is catgorie from index : " , ALlCategorie.find(item => item.id_categorie === 47).categorie_title)
return (
    <div class="how-to-work pb-lg--7 pt-3" id='BestCourses'>
    <div class="container">
        <div class="row justify-content-center">
            <div class="page-title style1 col-xl-6 col-lg-6 col-md-10 text-center mb-5">
                <h2 class="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">Online Popular Course</h2>
                <p class="fw-300 font-xsss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
                <ul class="nav nav-tabs tabs-icon list-inline d-block w-100 text-center border-bottom-0 mt-4" id="myNavTabs">
                    <li class=" active list-inline-item"><a class="text-decoration-none fw-700 ls-3 font-xssss text-black text-uppercase ml-3 " href="#DesigneTab" data-toggle="tab">Populaire</a></li>
                    <li class="list-inline-item"><Link class="fw-700 ls-3 font-xssss text-black text-uppercase ml-3" to="/Courses" >Other</Link></li>
                </ul>
            </div>
        </div>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="DesigneTab">
                <div class="row">
                {PopulaireCourses.map(item=>(
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4" key={item.id_course}>
                        <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 course-card">
                            <div class="card-image w-100 mb-3">
                                <Link to= {`/Singlecourse/${item.id_course}`} class="video-bttn position-relative d-block"><img src="images/v-5.jpg" alt="image" class="w-100"/></Link>
                            </div>
                            <div class="card-body pt-0">
                                                                                                                            {/* ALlCategorie.find(item => item.id_categorie === item.categorie_id).     ALlCategorie.find(item => item.id_categorie === item.categorie_id                                                                   */}
                                <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Categorie</span>
                                <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span class="font-xsssss">$</span> {item.price}</span>
                                <h4 class="fw-700 font-xss mt-3 lh-28 mt-0"><Link to= {`/Singlecourse/${item.id_course}`}  className="text-dark text-grey-900">{item.discription} </Link></h4>
                                <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2"> durée :{item.duree} min </h6>
                                <ul class="memberlist mt-3 mb-2 ml-0 d-block">
                                    <li><a href="#"><img src="images/user-6.png" alt="user" class="w30 d-inline-block"/></a></li>
                                    <li><a href="#"><img src="images/user-7.png" alt="user" class="w30 d-inline-block"/></a></li>
                                    <li><a href="#"><img src="images/user-8.png" alt="user" class="w30 d-inline-block"/></a></li>
                                    <li><a href="#"><img src="images/user-3.png" alt="user" class="w30 d-inline-block"/></a></li>
                                    <li className="last-member"  style={{width:"55px"}}><a href="#"  style={{width:"55px"}} className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+{item.likes}</a></li>
                                    <li class="w-auto"><a href="#" class="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        ))}
                    
                
                </div>
            </div>            
      
        </div>
    </div>
</div>
  )
}

export default Courses