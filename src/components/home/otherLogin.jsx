import React, { useState,useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserClient } from './context/userContext';

function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
    role: '',
    urlApi: '',
    error: '',
    isLoged : false,
    
  });
  const NewUser = useContext(UserClient)
  const nav = useNavigate()
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionChange = (e) => {
    setState({ ...state, role: e.target.value }, () => {
      console.log('State has been updated:', state.role);
    });
    if (e.target.value === 'Ensignant') {
      setState(
        { ...state, urlApi: 'http://127.0.0.1:8000/api/LoginEnsignantapi' },
        () => {
          console.log('changed : ', state.urlApi);
        }
      );
    } else if (e.target.value === 'Etudiant') {
      setState(
        { ...state, urlApi: 'http://127.0.0.1:8000/api/LoginEtudiantapi' },
        () => {
          console.log('changed', state.urlApi);
        }
      );
    }
  };

  const HandleForm = async (e) => {
    e.preventDefault();
    const res = await axios.post(state.urlApi, state);
  
    if (res.data.status === 200) {
      setState({
        ...state,
        email: '',
        password: '',
        role: '',
        urlApi: '',
      });
      const userDetails = res.data.result;
      const token = res.data.token;
      localStorage.setItem("user1" ,JSON.stringify({token , userDetails}))
      NewUser.setauth({ token , userDetails })
      nav('/')
    } else {
      setState({ ...state, error: res.data.result });
    }
  };


  return (
    <div className="mt-5 pt-5">
      <div className="row">
        <div
          className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
          style={{ backgroundImage: 'url(images/login-bg.jpg)' }}
        ></div>
        <div className="col-xl-7 vh-lg-100 align-items-center d-flex rounded-lg overflow-hidden">
          <div className="card col-lg-12 shadow-none border-0 ml-auto mr-auto login-card">
            <div className="card-body rounded-0 text-left">
              <h2 className="fw-700 display1-size display2-md-size mb-3">
                Login into <br></br>your account
              </h2>
              <form onSubmit={HandleForm}>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pr-0"></i>
                  <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInput}
                    className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-group icon-input mb-1">
                  <input
                    type="Password"
                    name="password"
                    value={state.password}
                    onChange={handleInput}
                    className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="Password"
                  />
                  <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                </div>
                <div className="my-2">
                  <div onChange={handleOptionChange}>
                    <input
                      className="me-2"
                      type="radio"
                      name="role"
                      value="Etudiant"
                    />
                    Etudiant
                    <input
                      className="ms-2 me-2"
                      type="radio"
                      name="role"
                      value="Ensignant"
                    />
                    Ensignant
                  </div>
                </div>
                <div className="form-check text-left mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label font-xsss text-grey-500"
                    htmlFor="exampleCheck1"
                  >
                    Remember me
                  </label>
                  <a
                    href="forgot.html"
                    className="text-decoration-none fw-600 font-xsss text-grey-700 mt-1 float-right"
                  >
                    Forgot your Password?
                  </a>
                </div>
                <div className="form-check text-center text-danger">
                  {state.error}
                </div>

                <div className="col-sm-12 p-0 text-left">
                  <input
                    type="submit"
                    className="text-decoration-none form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    value="Login"
                  />
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Dont have account{' '}
                    <Link
                      to="/Inscrire"
                      className="text-decoration-none fw-700 ml-1"
                    >
                      Register
                    </Link>
                  </h6>
                </div>
                <div className="col-sm-12 p-0 text-center mt-2">
                  <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                    Or, Sign in with your social account{' '}
                  </h6>
                  <div className="form-group mb-1">
                    <Link
                      to="#"
                      className="text-decoration-none form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                    >
                      <img
                        src="images/icon-1.png"
                        alt="icon"
                        className="ml-2 w40 mb-1 mr-5"
                      />{' '}
                      Sign in with Google
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;