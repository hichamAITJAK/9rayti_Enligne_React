import React from 'react'

const SearchBar = () => {
    return (
        <div className="search-wrap position-relative " style={{"top":"-50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="card rounded-lg p-3 border-0 bg-no-repeat bg-white shadow-lg">
                            <div className="card-body w-100 p-0">
                                <div className="form-group mt-0 p-2 mb-0 bg-white rounded-lg">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="form-group icon-input mb-0">
                                                <i className="ti-search font-xs text-grey-400"></i>
                                                <input type="text" className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500" placeholder="Search online courses.." />
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="form-group icon-input mb-0">
                                                <i className="ti-package font-xs text-grey-400"></i>
                                                <select className="style1-select bg-transparent border-0 pl-5">
                                                     <option value="">All Categories</option>
                                                     <option value="151781441596 ">Fashion</option>
                                                     <option value="139119624252 ">- Men</option>
                                                     <option value="139118313532 ">- Women</option>
                                                     <option value="139360141372 ">Electronics</option>
                                                     <option value="152401903676 ">Home &amp; Garden</option>
                                                     <option value="138866720828 ">- Decor</option><option value="138866917436 ">- Lighting</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <a href="default-search.html" className="w-100 d-block btn bg-current bg-primary text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase ">Search</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar