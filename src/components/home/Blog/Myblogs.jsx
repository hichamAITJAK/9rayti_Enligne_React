import React, { useState,useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const Blogs = () => {
    const [RecentBlogs , SetRecentBlogs] = useState([])
    const [AllBlogs, setAllBlogs] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Blogsapi') 
          .then(response => {
            setAllBlogs(response.data.Blogs);
            SetRecentBlogs(response.data.Blogs.slice(1, 7))
          })
          .catch(error => {
            console.log('Error fetching data in your programme:', error);
          });
      }, []); 
    

const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(4); 
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = AllBlogs.slice(indexOfFirstItem, indexOfLastItem);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  return (
    <div className='mt-5 pt-5'>
      <div class="page-nav bg-lightblue pt-lg--7 pb-lg--7 pb-5 pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center"><h1 class="text-grey-800 fw-700 display3-size">All Blogs <span class="font-xsss text-grey-600 fw-600 d-block mt-2">Home / Blog</span></h1></div>
                </div>
            </div>
        </div>
        <div class="blog-page pt-lg--7 pb-lg--7 pb-5 pt-5 bg-white">
            <div class="container">
                <div class="row">
                      <div class="col-lg-4">                   
                        <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                            <div class="form-group mb-0">
                                <label class="fw-700 text-grey-900">Categories</label>
                            </div>
                            <ul class="recent-post mt-2 list-style-disc pl-4">
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Education</a></li>
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Information</a></li>
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Job Seeking</a></li>
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Travel</a></li>
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Education</a></li>
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Information</a></li>
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Job Seeking</a></li>
                                <li><a href="#" class="text-decoration-none fw-500 lh-24 font-xsss text-grey-500 ">Travel</a></li>
                            </ul>
                        </div>
                          <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                              <div class="form-group mb-3">
                                  <label class="fw-700 text-grey-900">Recent Posts</label>
                              </div>
                              <div>
                                {RecentBlogs.map(item=>(
                                  <div key={item.id_blog} class="card w-100 shadow-none bg-transparent border-0 mb-3">
                                    <div class="row">
                                        <div class="col-4"><img src="images/myblogImg.jpg" alt="blog-image" class="img-fluid rounded-lg"/></div>
                                        <div class="col-8 pl-1"><h6 class="font-xssss text-grey-500 fw-600 mt-0"> {item.created_at}</h6><h2 class="fw-600 text-grey-800 font-xsss lh-3">{item.discription}</h2></div>
                                    </div>
                                </div>
                                ))}
                                
                                
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-8">
                          <div class="row">
                            {currentItems.map(Item =>(
                              <div class="col-lg-12 col-md-12 col-sm-12 mb-4">
                                  <article key={Item.id_blog} class="post-article p-0 border-0 shadow-xss rounded-lg overflow-hidden">
                                      <div class="row">
                                          <div class="col-6 col-xs-12"><Link to="/SingleBlog" className='text-decoration-none'><img src="images/blog-4.jpg" alt="blog-image" class="w-100"/></Link></div>
                                          <div class="col-6 col-xs-12 pl-md--0">
                                              <div class="post-content p-4">
                                                  <h6 class="font-xsss text-success fw-600 float-left">{Item.categorie}</h6> 
                                                  <h6 class="font-xssss text-grey-500 fw-600 ml-3 float-left"><i class="ti-time mr-2"></i> {Item.created_at}</h6> 
                                                  <h6 class="font-xssss text-grey-500 fw-600 ml-3 float-left"><i class="ti-user mr-2"></i> {Item.Author}</h6>
                                                  <div class="clearfix"></div>
                                                  <h2 class="post-title mt-2 mb-2 pr-3"><Link to={`/SingleBlog/${Item.id_blog}`}  class="text-decoration-none lh-30 font-sm mont-font text-grey-800 fw-700">{Item.discription}</Link></h2>                                
                                                  <p class="font-xsss fw-400 text-grey-500 lh-26 mt-0 mb-2 pr-3">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.</p>
                                                  <a href="blog-single.html" class="text-decoration-none rounded-xl text-white bg-current w125 p-2 lh-32 font-xsss text-center fw-500 d-inline-block mb-0 mt-2">Read More</a>
                                              </div>                              
                                          </div>
                                      </div>
                                  </article>
                              </div>
                            ))}
                            

                              
                              

                          </div>
                      </div>                    

                      <div class="col-lg-12">
                      <ul className="pagination justify-content-center d-flex pt-5">
                            <li className="page-item m-1"><button className="page-link rounded-lg btn-round-md p-0 fw-600 shadow-xss bg-white text-grey-900 border-0"  aria-disabled="true" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><i className="ti-angle-left"></i></button></li>
                            <li className="page-item m-1"><a className="page-link rounded-lg btn-round-md p-0 fw-600 font-xssss shadow-xss bg-primary text-white border-0" >{currentPage}</a></li>                            
                            <li className="page-item m-1"><button className="page-link rounded-lg btn-round-md p-0 fw-600 shadow-xss bg-white text-grey-900 border-0" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= AllBlogs.length}><i className="ti-angle-right"></i></button></li>
                        </ul>
                      </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Blogs