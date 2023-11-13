import React, { Component } from 'react'
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reclamedBy: "",
            email: "",
            title: "",
            sujet: "",
            discription : "",
            error:""
        };
    }
   
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });      
    }

    handleForm = async (e)=>{
        e.preventDefault();
        console.log(this.state);
        const res = await axios.post("http://127.0.0.1:8000/api/AddReclamationapi", this.state)
        if (res.data.status === 200) {
            this.setState({error : res.data.result})
            this.setState({
                reclamedBy: "",
                email: "",
                title: "",
                sujet: "",
                discription : ""
            })
            
        }else{
            this.setState({error : res.data.result})
        }
    }
render(){
  return (
    <div style={{marginTop :"100px"}}>
        <div class="page-nav bg-lightblue pt-lg--7 pb-4 pt-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <h1 class="text-grey-800 fw-700 display3-size mb-3 display4-md-size">Get in touch with us <span class="font-xsss text-grey-500 fw-600 d-block mt-3 pl-lg-5 pr-lg-5 lh-28">Ask us a question by email and we will respond within a few days. Ask us a question by email and we will respond within a few days. </span></h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-wrapp pb-lg--10 pb-5 bg-lightblue py-4 ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 md-mb-2">
                        <div class="card shadow-xss border-0 p-5 rounded-lg">
                            <span class="btn-round-xxxl alert-success"><i class="feather-mail text-success font-xl"></i></span>
                            <h2 class="fw-700 font-sm mt-4 mb-3 text-grey-900">Email us</h2>
                            <p class="font-xsss text-grey-500 fw-500 mb-3">Ask us a question by email and we will respond within a few days.</p>
                            <a href="mailto:support@gmail.com" class="fw-700 font-xsss text-primary">Send Email</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 md-mb-2">
                        <div class="card shadow-xss border-0 p-5 rounded-lg">
                            <span class="btn-round-xxxl alert-primary"><i class="feather-map-pin text-primary font-xl"></i></span>
                            <h2 class="fw-700 font-sm mt-4 mb-3 text-grey-900">Contact us</h2>
                            <p class="font-xsss text-grey-500 fw-500 mb-3">Ask us a question by email and we will respond within a few days.</p>
                            <a href="tel:893432323" class="fw-700 font-xsss text-primary">Get Direction</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 md-mb-2">
                        <div class="card shadow-xss border-0 p-5 rounded-lg">
                            <span class="btn-round-xxxl alert-danger"><i class="feather-phone text-danger font-xl"></i></span>
                            <h2 class="fw-700 font-sm mt-4 mb-3 text-grey-900">Call us</h2>
                            <p class="font-xsss text-grey-500 fw-500 mb-3">Ask us a question by email and we will respond within a few days.</p>
                            <a href="tel:893432323" class="fw-700 font-xsss text-primary">Make a Call</a>
                        </div>
                    </div>
                             
                </div>
            </div>
        </div>

        <div class="map-wrapper pt-lg--10 pt-5 pb-lg--10 " style={{marginTop:"-60px"}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="contact-wrap bg-white shadow-lg rounded-lg position-relative top-0">
                            <h1 class="text-grey-900 fw-700 display3-size mb-5 lh-1">Contact us</h1>
                            <form onSubmit={this.handleForm}>
                                <div class="row">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group mb-3">
                                            <input type="text" name='reclamedBy' value={this.state.reclamedBy} onChange={this.handleInput} class="form-control style2-input bg-color-none text-grey-700" placeholder="Name"/>                        
                                        </div>        
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group mb-3">
                                            <input type="text" name='email' value={this.state.email} onChange={this.handleInput} class="form-control style2-input bg-color-none text-grey-700" placeholder="email"/>                        
                                        </div>        
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group mb-3">
                                            <input type="text" name='title' value={this.state.title} onChange={this.handleInput} class="form-control style2-input bg-color-none text-grey-700" placeholder="title"/>                        
                                        </div>        
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group mb-3">
                                            <input type="text" name='sujet' value={this.state.sujet} onChange={this.handleInput} class="form-control style2-input bg-color-none text-grey-700" placeholder="Sujet"/>                        
                                        </div>        
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group mb-3 md-mb-2">
                                            <textarea name='discription' value={this.state.discription} onChange={this.handleInput} class="w-100 h125 style2-textarea p-3 form-control" placeholder="Message"/>
                                        </div>
                                        <div class="form-check text-left mt-3 float-left md-mb-2">
                                            <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1"/>
                                            <label class="form-check-label font-xsss text-grey-500 fw-500" for="exampleCheck1">I agree to the term of this <a href="#" class="text-grey-600 fw-600">Privacy Policy</a></label>
                                        </div>
                                        <div class="form-group"><input type='submit' class="rounded-lg style1-input bg-primary text-decoration-none float-right bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w175" value="Submit"/></div>
                                    </div>
                                </div>
                                
                            </form>
                            {(this.state.error) ? (
                                         <div class="alert alert-dark text-center mt-1" role="alert">
                                {this.state.error}
                            </div>
                                    ) : (
                                        <div className=""></div>
                                    )}
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        
    </div>
  )}
}

export default Contact