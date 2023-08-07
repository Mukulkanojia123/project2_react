import React from 'react'
import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

 const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onLineStatus = useOnlineStatus();
  // console.log("Header render");
        // if their is no dependency array then useEffect called at every render
        // if the dependency array is empty => [] then useEffect called at initial render() just ones
        // if the dependency array is something it like =>[btnNameReact] then its render when the btnNameReact is updated
  //  useEffect(()=>{
            // console.log("header ")
    //  },[btnNameReact])

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg mt-2'>
        <div className='logo-container'>
            <img className="w-56" src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'/>
        </div>
        <div className='flex items-center'>
            <ul className='flex p-4 m-4'>
              <li className='px-4'>onLine status : {onLineStatus ? "✅" : "🔴"}</li>
                <li className='px-4'><Link to={"/"}>Home</Link></li>
                <li className='px-4'><Link to={"/about"}>About Us</Link></li>
                <li className='px-4'><Link to="/contact">Contact Us</Link></li>
                <li className='px-4'><Link to="/grocery">Grocery</Link></li>
                <li className='px-4'>Cart</li>
                <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
            </ul>
        </div>
      {/* {console.log("header return")} */}
    </div>
  )
}
export default Header;