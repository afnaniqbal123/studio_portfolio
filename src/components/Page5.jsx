import React from 'react'
import "../styles/Style.css"

const Page5 = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center priceCard  ">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-danger">
          <div class="card-header py-3 border-danger">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 days Membership</li>
              <li>1 Demo included</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-danger">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-danger">
          <div class="card-header py-3 border-danger">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$120  <small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
            <li>1 month Membership</li>
              <li>5 Demo/Month included</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" style={{backgroundColor:'#FE320A'}}>Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-danger">
          <div class="card-header py-3 text-white border-danger"  style={{backgroundColor:'#FE320A'}}>
            <h4 class="my-0 fw-normal" >Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$899<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
            <li>365 days Membership</li>
              <li>Unlimited Demo included</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" style={{backgroundColor:'#FE320A'}}>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page5
