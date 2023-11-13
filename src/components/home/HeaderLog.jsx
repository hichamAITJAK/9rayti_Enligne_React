import React ,{useContext ,useState ,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { UserClient } from './context/userContext';

const HeaderLogin = () => {    
    const [CartCourses,SetCartCourses] = useState([])
    const [SavedCourse , setSavedCourse ] = useState([])  

    const NewUser = useContext(UserClient) 
    const MyuserID = NewUser.auth.userDetails

    const MyUserStorage = JSON.parse(localStorage.getItem("user1"))
    const MyUserStorageID = MyUserStorage.userDetails

    useEffect(()=>{            
        fetch('http://localhost:3100/SavedCourses')
        .then((response)=>response.json())
        .then((data)=>{
            setSavedCourse(data.filter(item => item.MyuserID.id_etudiant == MyUserStorageID.id_etudiant))
            
        })

        fetch('http://localhost:3100/CartCourses')
        .then((response)=>response.json())
        .then((data)=>{
            SetCartCourses(data.filter(item => item.MyuserID.id_etudiant === MyUserStorageID.id_etudiant))
        })
},[SavedCourse]) 

// console.log("SavedCourse after filtring from header : ",SavedCourse)
// console.log("CartCourses after filtring from header : ",CartCourses)

    const LogOut = ()=>{
        NewUser.setauth({})
        localStorage.removeItem("user1")
    }


    return (
        <div className="header-wrapper pt-3  shadow-none pos-fixed  position-absolute bg-light ">
            <div className="container ">
                <div className="row " >
                    <div className="col-lg-12 navbar pt-0 d-flex justify-content-between">
                        <Link to="/" className='text-decoration-none mb-sm-2'><h1 className=" col-lg-2 fredoka-font ls-3 fw-700 text-current font-xxl position-relative">9rayti <br></br> <span className='position-absolute' style={{ fontSize: "10px", }}>Enligne</span> </h1></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-lg-10 " id="navbarNavDropdown">
                            <ul className="navbar-nav nav-menu col-lg-6 float-none text-center ">
                                <li className="nav-item dropdown "><a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Home <i className="ti-angle-down"></i></a>
                                    <div className="dropdown-menu position-absolute border-top border-4 border-primary">
                                        <Link className="dropdown-item" to="/">Acceuil</Link>
                                        <a className="dropdown-item" href="/#categorie">Categories</a>
                                        <a className="dropdown-item" href="/#BestCourses">Best Courses</a>
                                        <a className="dropdown-item" href="/#Story">Our Story</a>
                                        <a className="dropdown-item" href="/#OverView">Over views</a>
                                        <a className="dropdown-item" href="/#Offers">Offers</a>
                                        <a className="dropdown-item" href="/#Brandig">Branding</a>                                        
                                    </div>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link  dropdown-toggle" data-toggle="dropdown" href="#">Pages <i className="ti-angle-down"></i></a>
                                    <div className="dropdown-menu  position-absolute  border-top border-4 border-primary ">
                                        <Link className="dropdown-item" to="/About">About</Link>
                                        <Link className="dropdown-item" to="/Services">Services</Link>
                                        <Link className="dropdown-item" to="*">404</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Blog <i className="ti-angle-down"></i></a>
                                    <div className="dropdown-menu  position-absolute  border-top border-4 border-primary">
                                        <Link className="dropdown-item" to="/SingleBlog/1">Blog Default</Link>
                                        <Link className="dropdown-item" to="/Blogs">All blogs</Link>
                                    </div>
                                </li>                                
                                <li className="nav-item"><Link className="nav-link" to="/Courses">Courses</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                            </ul>


                            {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle col-lg-6 " href="#" data-toggle="dropdown">Account <i className="ti-angle-down"></i></a>
                                    <div className="dropdown-menu  position-absolute  border-top border-4 border-primary">
                                    <Link to="/Cart" data-toggle="modal" data-target="#ModalCart" class="text-decoration-none float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i class="ti-shopping-cart font-lg"></i><span class="font-xssss fw-500 d-block lh-1">Cart</span> <span class="icon-count bg-primary">3</span></Link>
                                    <Link to="/SavedItems" class="text-decoration-none float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i class="ti-heart font-lg"></i><span class="font-xssss fw-500 d-block lh-1">Saved</span> <span class="icon-count bg-primary">2</span></Link>
                                    <Link to="/AutherProfile" class="text-decoration-none float-right d-lg-block text-center mt-1 ml-4 text-grey-800"><i class="ti-user font-lg"></i><span class="font-xssss fw-500 d-block lh-1">Account</span></Link>
                                    <button  className=" text-decoration-none header-btn bg-dark fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1" onClick={LogOut}>Logout</button>

                                    </div>
                            </li>  */}
                            <div className="col-lg-4 offset-lg-2 text-right d-lg-block d-flex justify-content-center mb-4">
                                <button  className=" text-decoration-none header-btn bg-dark fw-400 text-white font-xssss mt-2 lh-32 w75 ms-2 text-center  float-right d-inline-block rounded-xl " onClick={LogOut}>Logout</button>
                                <Link to="/Cart" data-toggle="modal" data-target="#ModalCart" class="text-decoration-none float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i class="ti-shopping-cart font-lg"></i><span class="font-xssss fw-500 d-block lh-1">Cart</span> <span class="icon-count bg-primary">{CartCourses.length}</span></Link>
                                <Link to="/SavedItems" class="text-decoration-none float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i class="ti-heart font-lg"></i><span class="font-xssss fw-500 d-block lh-1">Saved</span> <span class="icon-count bg-primary">{SavedCourse.length}</span></Link>
                                {/* {saveditems.Saveditem.length} */}
                                
                                <Link to="/AutherProfile" class="text-decoration-none float-right d-lg-block text-center mt-1 ml-4 text-grey-800"><i class="ti-user font-lg"></i><span class="font-xssss fw-500 d-block lh-1">Account</span></Link>
                               

                            </div>
                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default HeaderLogin