import React, { useState } from 'react'


const Sponsors = () => {
    const [Brands ,setBrand]=useState([1,2,3,4,5,6])
  return (
    <div class="brand-wrapper overflow-scroll pt-7" id='Brandig'>
        <div class="container">
            <div class="row " style={{width:"100%"}}>
                <div class="col-lg-12">
                    <div class="brand-slider owl-carousel owl-theme overflow-visible dot-none">
                        {Brands.map(item=>(
                        <div class="owl-items text-center"><img src={`images/b-${item}.png`} alt="icon" class="w75 ml-auto mr-auto"/></div>
                        ))}
                       
                       </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Sponsors;
