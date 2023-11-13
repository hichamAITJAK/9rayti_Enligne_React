import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Story = () => {
    const [Populairevlog,setPopulairevlog] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Blogsapi') 
          .then(response => {
            setPopulairevlog(response.data.Blogs.slice(1,7));    
          }).catch(error => {
            console.log('Error fetching data in your programme:', error);
          });
      }, []); 
    console.log("this is blogs from index : " , Populairevlog)
  return (
    <div class="blog-page  bg-white" id='story'>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                        <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1">Blog</span>
                        <h2 class="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">Dont Miss Out Our Story</h2>
                        <p class="fw-300 font-xssss lh-28 text-grey-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
                    </div>
                </div>
                <div class="row">
                {Populairevlog.map(item=>(                                                         
                    <div class="col-lg-4 col-md-6 col-sm-6 mb-4" key={item.id_blog}>
                        <article class="post-article p-0 border-0 shadow-xss rounded-lg overflow-hidden aos-init"  data-aos-once="true">
                            <Link to={`/SingleBlog/${item.id_blog}`}><img src="images/blog-1.jpg" alt="blog-image" class="w-100"/></Link>
                            <div class="post-content p-4">
                                <h6 class="font-xsss text-success fw-600 float-left">{item.categorie}</h6> 
                                <h6 class="font-xssss text-grey-500 fw-600 ml-3 float-left"><i class="ti-time mr-2"></i> {item.created_at}</h6> 
                                <h6 class="font-xssss text-grey-500 fw-600 ml-3 float-left"><i class="ti-user mr-2"></i> {item.Author}</h6>
                                <div class="clearfix"></div>
                                <h2 class="post-title mt-2 mb-2 pr-3"><a href="blog-single.html" class="lh-30 font-sm mont-font text-grey-800 fw-700 text-decoration-none">{item.discription}</a></h2>                                
                                <p class="font-xsss fw-400 text-grey-500 lh-26 mt-0 mb-2 pr-3">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.</p>
                                <Link to={`/SingleBlog/${item.id_blog}`} class="rounded-xl text-white bg-primary text-decoration-none w125 p-2 lh-32 font-xsss text-center fw-500 d-inline-block mb-0 mt-2">Read More</Link>
                            </div>                            
                        </article>
                    </div>
                    ))}   
                   


                     
                </div>
            </div>
        </div>
  )
}

export default Story