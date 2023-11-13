import React, { useState,useEffect } from 'react'


const Check_out = () => {


    const [CartCourses,SetCartCourses] = useState([])

    const MyUser = JSON.parse(localStorage.getItem("user1"))
    const MyuserLog= MyUser.userDetails




    useEffect(()=>{
        
        fetch('http://localhost:3100/CartCourses')
        .then((response)=>response.json())
        .then((data)=>{
           
            SetCartCourses(data.filter(item => item.MyuserID.id_etudiant === MyuserLog.id_etudiant))
            
        })        
},[]) 

const CalculeTotal = ()=>{
    const total = CartCourses.reduce((total, item) => total + item.Mycourse.price, 0)
     return total
}


    return (
        <>
            <div className='mt-5 pt-4'>
                <div class="page-nav bg-lightblue pt-lg--7 pb-lg--7 pt-5 pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h1 class="text-grey-800 fw-700 mont-font display4-size display4-md-size">Checkout</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-wrapper pt-lg--7 pb-lg--7 pb-5 pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="page-title">
                                    <h4 class="mont-font fw-600 font-md mb-5">Billing address</h4>
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-lg-6 mb-3">
                                                <div class="form-gorup">
                                                    <label class="mont-font fw-500 font-xsss">Full Name</label>
                                                    <input type="text" name="comment-name" class="form-control" value={MyuserLog.nomComplet} />
                                                </div>
                                            </div>

                                            
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6 mb-3">
                                                <div class="form-gorup">
                                                    <label class="mont-font fw-500 font-xsss">Email</label>
                                                    <input type="text" name="comment-name" class="form-control" placeholder='Example@gmail.com' value={MyuserLog.email} />
                                                </div>
                                            </div>

                                            <div class="col-lg-6 mb-3">
                                                <div class="form-gorup">
                                                    <label class="mont-font fw-500 font-xsss">Phone</label>
                                                    <input type="text" name="comment-name" class="form-control" placeholder='+2126-332-255' value={MyuserLog.tel} />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-12 mb-3">
                                                <div class="form-gorup">
                                                    <label class="mont-font fw-500 font-xsss">Country</label>
                                                    <input type="text" name="comment-name" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="col-lg-12 mb-3">
                                                <div class="form-gorup">
                                                    <label class="mont-font fw-500 font-xsss">Card number</label>
                                                    <input type="text" name="comment-name" class="form-control" placeholder='1111 2222 3333 4444' />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6 mb-3">
                                                <div class="form-gorup">
                                                    <label class="mont-font fw-500 font-xsss">Expiry</label>
                                                    <input type="text" name="comment-name" class="form-control" placeholder='MM / YYYY' />
                                                </div>
                                            </div>

                                            <div class="col-lg-6 mb-3">
                                                <div class="form-gorup">
                                                    <label class="mont-font fw-500 font-xsss">CVV</label>
                                                    <input type="text" name="comment-name" class="form-control" placeholder='123' />
                                                </div>
                                            </div>

                                            <div class="col-lg-12 mb-3">
                                                <div class="card shadow-none border-0">
                                                    {/* <a href="#"
                                    class="text-decoration-none w-100 p-3 mt-3 font-xsss text-center text-white bg-primary rounded-lg text-uppercase fw-600 ls-3">Place
                                    Order</a> */}
                                                    <input type='submite' className='border-0 w-100 shadow p-3 mt-3 font-xsss text-center text-white bg-primary rounded-lg text-uppercase fw-600 ls-3' value={"Confirm Order"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                </div>
                            </div>
                            <div class="col-xl-5 offset-xl-1 col-lg-6">
                                <div class="order-details">
                                    <h4 class="mont-font fw-600 font-md mb-5">Order Details</h4>
                                    <div class="table-content table-responsive mb-5 card border-0 bg-greyblue p-5">
                                        <table class="table order-table order-table-2 mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="border-0">Courses</th>
                                                    <th class="text-right border-0">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <> {CartCourses.map((item)=>(                                           
                                            <tr>
                                                        <th class="text-grey-500 fw-500 font-xsss ">
                                                        {item.Mycourse.discription}
                                                        </th>
                                                        <td class="text-right text-grey-500 fw-500 font-xsss">${item.Mycourse.price}.00</td>
                                                    </tr>
                                           ))}</>
                                                
                                               
                                            </tbody>
                                            <tfoot>
                                                <tr class="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td class="text-right text-grey-900 font-xss fw-600">${CalculeTotal()}.00</td>
                                                </tr>
                                                <tr class="order-total">
                                                    <th>Order Total</th>
                                                    <td class="text-right text-grey-900 font-xss fw-600"><span
                                                        class="order-total-ammount">${CalculeTotal() + 2}.00</span></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                                        <form action="#" class="payment-form">
                                            <div class="payment-group mb-4">
                                                <div class="payment-radio">
                                                    <input type="radio" value="bank" name="payment-method" id="bank" checked="" />
                                                    <label class="payment-label fw-600 text-grey-900 ml-2" for="cheque">Direct
                                                        Bank Transfer</label>
                                                </div>
                                                <div class="payment-info" data-method="bank" >
                                                    <p class="font-xsss text-grey-500 pl-4">Make your payment directly into our
                                                        bank account. Please use your Order ID as the payment reference. Your
                                                        order will not be shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Check_out