import React, { Component } from 'react'
import { Link, useNavigate   } from 'react-router-dom'
import axios from 'axios'


export default class Inscrire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            spesialite :"",
            password: "",
            passwordConfirm: "",
            role: "",
            urlApi: '',
            CorrectPassword: true
        };
    }

    handleOptionChange = (e) => {        
        this.setState({ role: e.target.value}, () => {
            console.log('State has been updated:', this.state.role );
          });
          if( e.target.value == 'Ensignant'){
            this.setState( { urlApi: 'http://127.0.0.1:8000/api/AddEnsignantapi' },() => {console.log("changed : " ,this.state.urlApi)}) 
        }else if( e.target.value == 'Etudiant'){
            this.setState({ urlApi: 'http://127.0.0.1:8000/api/AddEtudiantapi' },() => {console.log("changed",this.state.urlApi)}) 
        }     
    };
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
      
    }

    handleSubmite = async (e) => {
        e.preventDefault();
        if (this.state.password === this.state.passwordConfirm && this.state.passwordConfirm.length > 7) { 
            console.log(this.state);//'http://127.0.0.1:8000/api/AddEnsignantapi'
            const res = await axios.post(this.state.urlApi, this.state)
            if (res.data.status === 200) {
                console.log(res.data.result)
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    spesialite :"",
                    passwordConfirm: "",
                    CorrectPassword: true,
                    role: "",
                    urlApi: "",
                })
               this.props.navigate('/Login')
            }
        }
        else {
            this.setState({ CorrectPassword: false })
        }
    }

    render() {
        return (

            <div className='mt-5 pt-5 ' >
                <div class="row " >
                    <div class="col-xl-5 d-none d-xl-block p-0  bg-image-cover bg-no-repeat" style={{ backgroundImage: "url(images/login-bg-2.jpg)" }}></div>
                    <div class="col-xl-7  align-items-center d-flex bg-white rounded-lg overflow-hidden">
                        <div class="card shadow-none border-0 ml-auto mr-auto login-card">
                            <div class="card-body rounded-0 text-left">
                                <h2 class="fw-700 display1-size display2-md-size mb-4">Create <br></br>your account</h2>
                                <form onSubmit={this.handleSubmite}>

                                    <div class="form-group icon-input mb-3">
                                        <i class="font-sm ti-user text-grey-500 pr-0"></i>
                                        <input type="text" name='name' onChange={this.handleInput} value={this.state.name} class="style2-input pl-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group icon-input mb-3">
                                        <i class="font-sm ti-email text-grey-500 pr-0"></i>
                                        <input type="text" name='email' onChange={this.handleInput} value={this.state.email} class="style2-input pl-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address" />
                                    </div>
                                    <div class="form-group icon-input mb-3">
                                        <input type="Password" name='password' onChange={this.handleInput} value={this.state.password} class="style2-input pl-5 form-control text-grey-900 font-xss ls-3" placeholder="Password " />
                                        <i class="font-sm ti-lock text-grey-500 pr-0"></i>
                                    </div>
                                    <div class="form-group icon-input mb-1">
                                        <input type="Password" name='passwordConfirm' onChange={this.handleInput} value={this.state.passwordConfirm} class="style2-input pl-5 form-control text-grey-900 font-xss ls-3" placeholder="Confirm Password" />
                                        <i class="font-sm ti-lock text-grey-500 pr-0"></i>
                                    </div>
                                    {(this.state.CorrectPassword) ? (
                                        <div className="text-success">password must has 8+ character</div>
                                    ) : (
                                        <div className="text-danger">password invalide</div>
                                    )}
                                    <div className="my-2">
                                        <div onChange={this.handleOptionChange}>
                                            <input className='me-2' type="radio" name="role" value="Etudiant"  />Etudiant
                                            <input className='ms-2 me-2' type="radio" name="role" value="Ensignant" />Ensignant
                                        </div>
                                    </div>
                                    {(this.state.role == 'Ensignant') ? (
                                         <div class="form-group icon-input mb-1">
                                            <input type="text" name='spesialite' onChange={this.handleInput} value={this.state.spesialite} class="style2-input pl-5 form-control text-grey-900 font-xss ls-3" placeholder="Your speciality" />
                                            <i class="font-sm ti-user text-grey-500 pr-0"></i>
                                        </div>
                                    ) : (
                                        <div className=""></div>
                                    )}
                                   
                                    <div class="form-check text-left mb-3">
                                        <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                                        <label class="form-check-label font-xsss text-grey-500" for="exampleCheck1">Accept Term and Conditions</label>
                                        <Link to="#" class="fw-600 font-xsss text-grey-700 mt-1 float-right text-decoration-none">Forgot your Password?</Link>
                                    </div>
                                    <div class="col-sm-12 p-0 text-left">
                                        <div class="form-group mb-1"><input type="submit" className='text-decoration-none form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ' value="Registre" /></div>
                                    </div>
                                </form>


                                <div class="col-sm-12 p-0 text-left">
                                    <h6 class="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <Link to="/Login" class="text-decoration-none fw-700 ml-1">Login</Link></h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export function InscrireWithrouter(props){
    const navigate = useNavigate()
    return(<Inscrire navigate={navigate}></Inscrire>)
}