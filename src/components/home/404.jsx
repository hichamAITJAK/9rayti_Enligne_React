import React from 'react'
import Footer from './Footer'

const NotFound = () => {
    return (
        <>
            <div class="vertical-wrapper pt-lg--10 pt-5 pb-lg--10 pb-5 pt-5 mt-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8 text-center default-page">
                            <div class="card border-0 text-center d-block">
                                <img src="images/bg-43.png" alt="icon" class="w200 mb-4 ml-auto mr-auto " />
                                <h1 class="fw-700 text-grey-900 display4-size display4-md-size">Oops! It looks like you're lost.</h1>
                                <p class="text-grey-500 font-xss">The page you're looking for isn't available. Try to search again or use the go to.</p>
                                <a href="index.html" class="p-3 w175 bg-primary text-decoration-none text-white d-inline-block text-center fw-600 font-xssss rounded-lg text-uppercase ls-3">Home Page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound