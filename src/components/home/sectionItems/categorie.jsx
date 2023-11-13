import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Categorie = () => {
    const [ALlCategorie,setALlCategorie] = useState([])
    const [Catcolor ,setCategorie] = useState(["#fcf1eb","#fff9eb","#dcf4f8","#e5f4fb"])
    const [Catphoto,setCatphoto] = useState([1,2,3,4,5,6,7,8])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Categorieapi') 
          .then(response => {
            setALlCategorie(response.data.categories);
          })
          .catch(error => {
            console.log('Error fetching data in your programme:', error);
          });
      }, []); 
      console.log("from categorie",ALlCategorie)
  return (
    <div class="category-wrapper pb-lg--7 pb-5">
            <div class="container-fluid ">
                <div class="row container" id='categorie'>
                    <div class="page-title style1 col-xl-4 col-lg-4 col-md-6 text-left">
                        <h2 class="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 mt-1 d-block lh-3">Browse   by Category</h2>
                      {/* <p class="fw-300 font-xssss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur 
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud e
                        xercitation</p>  */}
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-4 ">
                        <div class="owl-carousel category-card owl-theme d-flex justify-content-center overflow-scroll nav-none p-2" style={{width:"100%"}}>
                            {ALlCategorie.map(item=>(
                                <div class="item">
                                    <div class="card mr-1 w140 border-0 p-4 rounded-lg text-center" style={{backgroundColor:Catcolor[Math.floor(Math.random() * Catcolor.length)] }}>
                                        <div class="card-body p-2 ml-1 ">
                                            <a href="#" class="btn-round-xl bg-white"><img src={`images/download1.png`} alt="icon" class="p-2"/></a>
                                            <h4 class="fw-600 font-xsss mt-3 mb-0">{item.categorie_title} <span class="d-block font-xsssss fw-500 text-grey-500 mt-2">{item.id_categorie} Course</span></h4>
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

export default Categorie