import React ,{ useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const SingleBlog =()=>{

    const [Blog,setBlog] = useState({});
    const {id_blog} = useParams();

        useEffect(() => {
            axios.get(`http://127.0.0.1:8000/api/Blogsapi/${id_blog}`) 
              .then(response => {
                setBlog(response.data.Blogs);
               

              })
              .catch(error => {
                console.log('Error fetching data in your programme:', error);
              });
          }, []); 

         

        return (
            
            <div className='mt-5 pt-5'>
                 <div class="post-title page-nav pt-lg--7 pt-lg--7 pt-5 pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h6 class="text-uppercase fw-600 ls-3 text-success font-xsss">{ Blog.categorie }</h6>
                                <h2 class="mt-3 mb-2"><a href="#" class="text-decoration-none lh-2 display2-size display2-md-size mont-font text-grey-900 fw-700"> { Blog.discription}</a></h2>                                
                                <h6 class="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block"><i class="ti-time mr-2"></i> { Blog.created_at}</h6> 
                                <h6 class="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block"><i class="ti-user mr-2"></i>  { Blog.Author}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="post-image">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                            {/* process.env.PUBLIC_URL + "images/blog-7.jpg" */}
                                <img src="images/myblogImg.jpg" alt="blog-image" class="img-fluid rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-content pt-lg--7 pt-lg--7 pt-5 pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-left">
                                <p class="lh-32 drop-cap font-xss text-grey-600 mb-5"> <span>B</span>est is because a brand, at it’s core, 
                                is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a 
                                logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, 
                                and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core,
                                 is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
                                <p class="lh-32 font-xss text-grey-600">While a logo might be the most recognizable manifestation of a brand, 
                                it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and
                                 even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values
                                  which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a 
                                  brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, 
                                  sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes 
                                  and values which present themselves in concrete ways:</p>
                                <div class="card shadow-none bg-greyblue w-100 p-4 border-0 mt-5 mb-5 rounded-lg">
                                    <div class="card-body">
                                        <i class="ti-quote-left display1-size text-grey-400 left-15"></i>
                                        <h3 class="fw-400 text-grey-800 font-xs lh-32 font-italic mb-3 mt-2">That’s because a brand, at it’s 
                                        core, is immaterial. It’s about abstract attributes and values which present themselves in concrete 
                                        ways</h3>
                                        <p class="fw-500 mb-0 text-grey-500 font-xsss ls-2">Cabe Camaren</p>
                                    </div>  
                                </div>
                               
                               
                                <div class="card shadow-none w-100 border-0 next-article text-center pt-5 pb-5">
                                    <h6 class="text-uppercase fw-600 ls-3 text-grey-500 font-xsss">Next Article</h6>                          
                                    <h2 class="mb-0 mt-1"><a href="#" class="text-decoration-none text-grey-900 display1-size fw-700">It’s no secret that the digital <br></br> industry is booming</a></h2>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        ) }

export default SingleBlog