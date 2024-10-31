import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='mt-10 pt-16 pb-4 bg-neutral-800'>
      <div className='mx-auto container px-2 flex flex-col md:flex-row justify-between pb-10 gap-2'>
        <div className="footer-content-left flex flex-col md:w-1/2 mb-4">
          <div className="image mb-4">
            <img src={assets.logo} className='logo w-32' width={"100%"} height={"100%"} alt="logo" />
          </div>
          <p className='text-gray-400 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat praesentium blanditiis ullam asperiores nesciunt mollitia eaque id.</p>
          <div className="footer-social-icons flex gap-4 justify-start items-center">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center md:w-1/4 flex flex-col text-white mb-4 ">
          <h2 className='font-bold text-lg mb-4'>COMPANY</h2>
          <ul className='flex flex-col gap-1'>
            <li className='text-gray-400'>Home</li>
            <li className='text-gray-400'>About US</li>
            <li className='text-gray-400'>Delivery</li>
            <li className='text-gray-400'>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right md:w-1/4 mb-4">
          <h2 className='font-bold text-white text-lg mb-4'>GET IN TOUCH</h2>
          <ul className='flex flex-col gap-1'>
            <li className='text-gray-400'>+20-101-347-7824</li>
            <li className='text-gray-400'>tomato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className='footer-copyright flex justify-center items-center pt-8 pb-2'>
        <p className='text-gray-400'>
        Copyright 2024 Tomato.com - All Right Reserved.
      </p>
      </div>
    </footer>
  )
}

export default Footer