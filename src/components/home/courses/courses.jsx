import React, { useState,useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
const Courses = () => {
const [Courses,SetCourses] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Coursesapi') //https://jsonplaceholder.typicode.com/posts
      .then(response => {
        SetCourses(response.data.courses);
      })
      .catch(error => {
        console.log('Error fetching data in your programme:', error);
      });
  }, []); 


// SEARCH SEARCH SEARCH SEARCH SEARCH SEARCH SEARCH SEARCH 
  const [search, setSearch] = useState(''); 
  const [filteredData , setfilteredData] = useState([]);  
 
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = ()=>{
    if(search){
        setfilteredData(Courses.filter((item) =>
        item.discription.toLowerCase().includes(search.toLowerCase())))        
    }}
useEffect(() => {
    setfilteredData(Courses)
}, [Courses]); 

// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION 
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(10); 
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  console.log(" this is from course compoenent : ",filteredData)
  return (
    <>
    
      
        

        <div className="blog-page pt-lg--7 pb-lg--7 pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="card rounded-xxl p-lg--5 border-0 bg-no-repeat" style={{backgroundColor: "#e4f7fe"}}>
                            <div className="card-body w-100 p-4">
                                <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
                                   
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="form-group icon-input mb-0">
                                                    <i className="ti-search font-xs text-grey-400"></i>
                                                    <input type="text" value={search} onChange={handleSearchChange} className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent" placeholder="Search online courses.."/>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="form-group icon-input mb-0">
                                                    <i className="ti-package font-xs text-grey-400"></i>
                                                    <select className="style1-select bg-transparent border-0 pl-5"> 
                                                    <option value="">All Categories</option>
                                                    
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <button onClick={handleSearch} className="w-100 d-block  btn bg-primary text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase ">Search</button>
                                            </div>
                                        </div>
                                </div>
                                <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24"> <b className="text-grey-800 text-dark">Popular Search :</b> Designer, Developer, PHP, HTML, CSS, SCSS </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 pt-2 mb-4">
                        <h2 className="fw-400 font-lg">Search <b>Results</b>
                         <span className="fw-500 ml-2 text-grey-500 font-xssss">
                            {filteredData.length} course is found 
                            </span> <a href="#" className="float-right"><i className="feather-edit text-grey-500 font-xs"></i></a></h2>
                    </div>                    
                     

                </div>
               <div  >

                {(filteredData.length == 0) ? (
                                         <h1>Ooups aucun resultat!!! </h1>
                                    ) : (
                                        <div className="row">
                                            {currentItems.map(item=>(
                        <div className="col-xl-6 col-lg-12 mb-4" key={item.id_course}>
                            <div className="card course-card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card-image float-left w-100 mb-0">
                                            <Link to= {`/Singlecourse/${item.id_course}`} className="video-bttn position-relative d-block"><img src="images/v-1.png" alt="image" className="w-100"/></Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card-body pt-0 w-100 float-left pt-3 pl-0 pr-0 pb-0">
                                            <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Python</span>
                                            <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> {item.price}</span>
                                            <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><Link to= {`/Singlecourse/${item.id_course}`}  className="text-dark text-grey-900">{item.discription} </Link></h4>
                                           
                                            <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">Durée : {item.duree} min</h6>
                                            <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                                                <li><a href="#"><img src="images/user-6.png" alt="user" className="w30 d-inline-block"/></a></li>
                                                <li><a href="#"><img src="images/user-7.png" alt="user" className="w30 d-inline-block"/></a></li>
                                                <li><a href="#"><img src="images/user-8.png" alt="user" className="w30 d-inline-block"/></a></li>
                                                <li><a href="#"><img src="images/user-3.png" alt="user" className="w30 d-inline-block"/></a></li>
                                                <li className="last-member"  style={{width:"55px"}}><a href="#"  style={{width:"55px"}} className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+{item.likes}</a></li>
                                                <li className=" w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student likes</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                                        </div>
                                    )}

                    
                    

                </div>


                <div className="row">
                    <div className="col-lg-12">
                        <ul className="pagination justify-content-center d-flex pt-5">
                            <li className="page-item m-1"><button className="page-link rounded-lg btn-round-md p-0 fw-600 shadow-xss bg-white text-grey-900 border-0"  aria-disabled="true" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><i className="ti-angle-left"></i></button></li>
                            <li className="page-item m-1"><a className="page-link rounded-lg btn-round-md p-0 fw-600 font-xssss shadow-xss bg-primary text-white border-0" >{currentPage}</a></li>                            
                            <li className="page-item m-1"><button className="page-link rounded-lg btn-round-md p-0 fw-600 shadow-xss bg-white text-grey-900 border-0" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= Courses.length}><i className="ti-angle-right"></i></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      
    </>
  )
}

export default Courses