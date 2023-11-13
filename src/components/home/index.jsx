 import { BrowserRouter as Main , Routes , Route } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import HeaderLogin from "./HeaderLog"
import Section from "./sectionItems/Section"
import {About} from "./AboutUs/about"
import Contact from "./ContactUS/contact"
import Courses from "./courses/courses"
import Singlecourse from "./courses/singlecourse"
import Userprofile from "./User/userprofile"
import Services from "./Services/services"
import AutherProfile from "./Auther/autherprofile"
import Check_out from "./check-out/check_out"
import MySavedItems from "./check-out/saved_items"
import Blogs from "./Blog/Myblogs"
import SingleBlog from "./Blog/singleblog"
import NotFound from "./404"
import Cart from "./check-out/Cart"
import Inscrire ,{InscrireWithrouter} from "./Inscrire"
import Login from "./otherLogin"
import RequireAuth from "./requireauth"
import { useContext } from "react"
import { UserClient } from "./context/userContext"

function Homeindex() {
  const MyUser = useContext(UserClient)

  return (
    <>
      <Main>
      <div className="container-fluid "> 
        {MyUser.auth.token?<HeaderLogin></HeaderLogin> : <Header></Header>}       
          <Routes>
            <Route exact path="/" element={<Section/>}/>
            {/* <Route exact path="/Login" element={<Login/>}/> */}
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Inscrire" element={<InscrireWithrouter/>}/>
            <Route exact path="/Inscrire" element={<otherInscrire/>}/>
            <Route exact path="*" element={<NotFound/>}/>
            <Route exact path="/About" element={<About/>}/>
              <Route element={<RequireAuth/>}>
                <Route exact path="/Userprofile" element={<Userprofile/>}/>
                <Route exact path="/Contact" element={<Contact/>}/>
                <Route exact path="/AutherProfile" element={<AutherProfile/>}/>
                <Route exact path="/Check_out" element={<Check_out/>}/>
                <Route exact path="/Services" element={<Services/>}/>            
                <Route exact path="/Courses" element={<Courses/>}/>
                <Route exact path="/Singlecourse/:id_course" element={<Singlecourse/>}/>
                <Route exact path="/SavedItems" element={<MySavedItems/>}/>            
                <Route exact path="/Cart" element={<Cart/>}/>
                <Route exact path="/Blogs" element={<Blogs/>}/>
                <Route exact path="/SingleBlog/:id_blog" element={<SingleBlog/>}/>
              </Route>
            
          </Routes>

          <Footer></Footer>
        </div>  
      </Main>
    </>
  )
}

export default Homeindex