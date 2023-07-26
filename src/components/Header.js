import React from 'react'
import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

 const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header render");
        // if their is no dependency array then useEffect called at every render
        // if the dependency array is empty => [] then useEffect called at initial render() just ones
        // if the dependency array is something it like =>[btnNameReact] then its render when the btnNameReact is updated
   useEffect(()=>{
            console.log("useEffect called")
     },[btnNameReact])

  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'/>
        </div>
        <div className='Nav-items'>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
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
    </div>
  )
}
export default Header;