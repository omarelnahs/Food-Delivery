import { useState } from 'react'
import './Login.css'
import {assets} from '../../assets/assets'

const Login = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login w-full h-full grid absolute z-10 bg-gray-500 bg-opacity-50 '>
      <form className='place-self-center mx-auto flex flex-col gap-4 p-8 rounded-lg bg-white'>
        <div className=''>
          <div className="flex justify-between py-4 mb-4 items-center">
            <h2 className='font-bold text-2xl'>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="close" />
          </div>
          <div className="inputs flex flex-col gap-10 py-4 mb-2">
            {currState === "Sign Up" && <input className='px-4 py-2 rounded-xl border-b-2 border-red-400' type="text" placeholder='Username'  required/>}
            <input className='px-4 py-2 rounded-xl border-b-2 border-red-400' type="text" placeholder='Email' required />
            <input className='px-4 py-2 rounded-xl border-b-2 border-red-400' type="text" placeholder='Password' required />
            <button className='btn text-white w-fit py-3 px-6 self-center rounded-xl' onClick={() => setCurrState("Sign In")}>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
          </div>
          <div className="popup-condition flex gap-1 items-center mb-2">
            <input type="checkbox" required/>
            <p>By Continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          <div className='swap'>
            {currState === "Login"
            ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Sign Up</span></p>
            : <p>Already have an account? <span onClick={()=> setCurrState("Login")}>Login Here</span></p>
          }
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login