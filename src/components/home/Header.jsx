import React  from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
    return (
        <div className="header-wrapper pt-3  shadow-none pos-fixed  position-absolute bg-light">
            <div className="container ">
                <div className="row " >
                    <div className="col-lg-12  navbar pt-0 d-flex justify-content-arround">
                        <Link to="/" className='text-decoration-none '><h1 className=" col-lg-1 fredoka-font ls-3 fw-700 text-current font-xxl position-relative">9rayti <br></br> <span className='position-absolute' style={{ fontSize: "10px", }}>Enligne</span> </h1></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-lg-10 " id="navbarNavDropdown">
                        <ul className="navbar-nav nav-menu  col-lg-6 float-none text-center ">
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
                            <div className="col-lg-4 text-right d-lg-block  offset-lg-2 d-flex justify-content-center mb-4 ">
                                <Link to="Login" className=" text-decoration-none me-2 header-btn bg-dark fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1">Login</Link>
                                <Link to="Inscrire" className="text-decoration-none header-btn bg-primary fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1">Register</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
export default Header