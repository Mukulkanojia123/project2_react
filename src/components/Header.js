import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onLineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext); 
  console.log(loggedInUser);
  // console.log("Header render");
        // if their is no dependency array then useEffect called at every render
        // if the dependency array is empty => [] then useEffect called at initial render() just ones
        // if the dependency array is something it like =>[btnNameReact] then its render when the btnNameReact is updated
  //  useEffect(()=>{
            // console.log("header ")
    //  },[btnNameReact])

    // subscribing the store with the use of useselector
    const cartItems = useSelector((store) =>store.cart.items)
    console.log(cartItems)

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg mt-2'>
      <div className='logo-container'>
        <img className="w-56" src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' alt="Logo" />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>onLine status : {onLineStatus ? "✅" : "🔴"}</li>
          <li className='px-4'><Link to={"/"}>Home</Link></li>
          <li className='px-4'><Link to={"/about"}>About Us</Link></li>
          <li className='px-4'><Link to="/contact">Contact Us</Link></li>
          <li className='px-4'><Link to="/grocery">Grocery</Link></li>
          <li className='px-4 font-bold text-xl'><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
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
          <li className='px-4'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
