import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { DeleteCourFromCart,DeleteAllCourFromCart} from '../context/SaveitemReducer';

const Cart = () => {
    const [CartCourses,SetCartCourses] = useState([])
    const [TotalOrder , setTotalOrder] = useState(0)
    const [Clicked,SetClicked] = useState("")
    const dispatch = useDispatch();

    
    const MyUser = JSON.parse(localStorage.getItem("user1"))
    const MyuserLog = MyUser.userDetails


    useEffect(()=>{
        
        fetch('http://localhost:3100/CartCourses')
        .then((response)=>response.json())
        .then((data)=>{           
            SetCartCourses(data.filter(item => item.MyuserID.id_etudiant === MyuserLog.id_etudiant))
            setTotalOrder(CartCourses.reduce((total, item) => total + item.Mycourse.price, 0))
        })        
},[Clicked,CartCourses]) 


const DeleteItemByClick = (Mycourse)=>{    
    console.log("to delete : " , Mycourse)
    dispatch(DeleteCourFromCart(Mycourse))
    SetClicked("clicked")
}


const DeleteAllItemsByClick = ()=>{
    dispatch(DeleteAllCourFromCart( CartCourses))
    SetClicked("clicked")
}

  return (
    <div className='mt-5 pt-5'>
    <div class="page-nav bg-lightblue pt-lg--7 pb-lg--7 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center"><h1 class="text-grey-800 fw-700 mont-font display4-size display4-md-size">Cart</h1></div>
            </div>
        </div>
    </div>
    <div class="cart-wrapper pt-lg--7 pt-5 pb-lg--7 pb-5">
        <div class="container mw-75">
            <div class="row">
                <div class="col-lg-8 mb-3">
                    <div class="table-content table-responsive">
                        <table class="table text-center">
                            <thead class="bg-greyblue rounded-lg">
                                <tr>
                                    <th class="border-0 p-4 text-left">Saved Courses</th>
                                    <th class="border-0 p-4">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {(CartCourses.length == 0) ? (
                                         <h1>Ooups aucun cours saved!!! </h1>
                                    ) : (
                                        
                                           <> {CartCourses.map((item)=>(                                           
                                            <tr key={item.id}>
                                            <td>
                                                <div class="card course-card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="card-image float-left w-100 mb-0">
                                                                <a href="default-course-details.html" class="video-bttn position-relative d-block"><img src="images/v-3.png" alt="image" class="w-100" /></a>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="card-body pt-0 w-100 float-left pt-3 pl-0 pr-0 pb-0">
                                                                <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">Bootstrap</span>
                                                                <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span class="font-xsssss">$</span> {item.Mycourse.price}</span>
                                                                <h4 class="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" class="text-decoration-none text-dark text-grey-900">{item.Mycourse.discription}</a></h4>
                                                                <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 14 Lesson </h6>
                                                                <ul class="memberlist mt-3 mb-2 ml-0 d-block">
                                                                    <li><a href="#"><img src="images/user-6.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                    <li><a href="#"><img src="images/user-7.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                    <li><a href="#"><img src="images/user-8.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                    <li><a href="#"><img src="images/user-3.png" alt="user" class="w30 d-inline-block" /></a></li>
                                                                    <li class="last-member"><a href="#" class="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                                                                    <li class="pl-4 w-auto"><a href="#" class="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="product-remove text-center"><button  onClick={()=>{DeleteItemByClick(item)}} className='border-0 bg-transparent'><i class=" ti-trash font-xs text-grey-500"></i></button></td>
                                    </tr> 
                                            ))}</>
                                        )}
                                

                                {/* */}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={()=>{DeleteAllItemsByClick()}} class="text-decoration-none update-cart bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w175 p-3 text-center ls-3">Delete All</button>
                </div>
                <div class="col-lg-4">
                    <div class="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                        <div class="cart-totals">
                            <h4 class="mont-font fw-600 font-lg mb-5">Cart totals</h4>
                            <div class="table-content table-responsive">
                                <table class="table order-table">
                                    <tbody>
                                        <tr>
                                            <td class="fmont pt-2 fw-600">Subtotal</td>
                                            <td class="fmont pt-2 text-right">${TotalOrder}.00</td>
                                        </tr>
                                        <tr>
                                            <td class="fmont pt-2 fw-600">Service :</td>
                                            <td class="fmont pt-2 text-right">
                                                <span>Prix fixe: $2.00</span>
                                            </td>
                                        </tr>
                                        <tr class="order-total">
                                            <td class="fmont pt-2 fw-600">Total</td>
                                            <td class="fmont pt-2 text-right">
                                                <span class="product-price-wrapper">
                                                    <span class="money fmont">${TotalOrder + 2}.00</span>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    {(TotalOrder < 3) ? (
                                    <button class="text-decoration-none bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w-100 p-3 text-center ls-3" disabled>Proceed To Checkout</button>
                                    ) : (
                                    <Link to="/Check_out" class="text-decoration-none bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w-100 p-3 text-center ls-3">Proceed To Checkout</Link>
                                    )}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cart