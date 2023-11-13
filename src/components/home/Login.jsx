import React ,{useContext} from 'react'
import { Component } from 'react';
import { Link ,Navigate,  } from 'react-router-dom'
import axios from 'axios';
import { UserClient } from './context/Context';

class  Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            role: "",
            urlApi: '',
            error : "",
            isLoged : false,
            NewUser : UserClient.Consumer
        };
    }
   
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });      
    }

    handleOptionChange = (e) => {        
        this.setState({ role: e.target.value}, () => {
            console.log('State has been updated:', this.state.role );
          });
          if( e.target.value == 'Ensignant'){
            this.setState( { urlApi: 'http://127.0.0.1:8000/api/LoginEnsignantapi' },() => {console.log("changed : " ,this.state.urlApi)}) 
        }else if( e.target.value == 'Etudiant'){
            this.setState({ urlApi: 'http://127.0.0.1:8000/api/LoginEtudiantapi' },() => {console.log("changed",this.state.urlApi)}) 
        }     
    }; 
     HandleForm = async (e)=>{
        e.preventDefault();
        console.log(this.state);
        const res = await axios.post(this.state.urlApi, this.state)
        if (res.data.status === 200) {
            console.log(res)
            this.setState({
                email: "",
                password: "",
                role: "",
                urlApi: "",
            })
            // this.setState({isLoged : true})
            
        }else{
            this.setState({error : res.data.result})
        }
    }

    render (){
        if(this.state.isLoged){
            return <Navigate to={`/${this.state.isLoged}`}/>
        }
        console.log("the new use is ",this.state.NewUser)
  return (
    <div  className='mt-5 pt-5'>
         <div class="row">
            <div class="col-xl-5   d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat" style={{backgroundImage: "url(images/login-bg.jpg)"}}></div>
            <div class="col-xl-7  vh-lg-100 align-items-center d-flex  rounded-lg overflow-hidden">
                <div class="card col-lg-12  shadow-none border-0 ml-auto mr-auto login-card">
                    <div class="card-body rounded-0 text-left">
                        <h2 class="fw-700 display1-size display2-md-size mb-3">Login into <br></br>your account</h2>
                        <form onSubmit={this.HandleForm}>
                            
                            <div class="form-group icon-input mb-3">
                                <i class="font-sm ti-email text-grey-500 pr-0"></i>
                                <input type="text" name='email' value={this.state.email} onChange={this.handleInput} class="style2-input pl-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address"/>                        
                            </div>
                            <div class="form-group icon-input mb-1">
                                <input type="Password"name='password'  value={this.state.password} onChange={this.handleInput}  class="style2-input pl-5 form-control text-grey-900 font-xss ls-3" placeholder="Password"/>
                                <i class="font-sm ti-lock text-grey-500 pr-0"></i>
                            </div>
                            <div className="my-2">
                                        <div onChange={this.handleOptionChange}>
                                            <input className='me-2' type="radio" name="role" value="Etudiant"  />Etudiant
                                            <input className='ms-2 me-2' type="radio" name="role" value="Ensignant" />Ensignant
                                        </div>
                                    </div>
                            <div class="form-check text-left mb-3">
                                <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1"/>
                                <label class="form-check-label font-xsss text-grey-500" for="exampleCheck1">Remember me</label>
                                <a href="forgot.html" class="text-decoration-none fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a>
                            
                            </div>
                            <div class="form-check text-center text-danger">
                                {this.state.error}
                            </div>
                        
                         
                            <div class="col-sm-12 p-0 text-left">
                            <input type="submit" className='text-decoration-none form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ' value="Login" />
                                <h6 class="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Dont have account <Link to="/Inscrire" class="text-decoration-none fw-700 ml-1">Register</Link></h6>
                            </div>
                            <div class="col-sm-12 p-0 text-center mt-2">
                                
                                <h6 class="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">Or, Sign in with your social account </h6>
                                <div class="form-group mb-1"><Link to="#" class="text-decoration-none form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"><img src="images/icon-1.png" alt="icon" class="ml-2 w40 mb-1 mr-5"/> Sign in with Google</Link></div>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
}

export default  Login