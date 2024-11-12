import React, { useContext } from 'react'
import { StoreContext } from '../../content/StoreContext'
import './PlaceOrder.css'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order container mx-auto px-1 flex felx items-start justify-between gap-4 mt-24'>
      <div className="place-order-left w-full max-[width:30%]">
        <p className="title text-3xl font-bold mb-14">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='FirstName'/>
          <input type="text"  placeholder='LastName'/>
        </div>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text"  placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text"  placeholder='Country'/>
        </div>
        <input type="Phone" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2 className="font-bold">Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total Amount:</b>
              <b>${getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder