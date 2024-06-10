import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
// import { SlLogin } from "react-icons/sl";
// import { SlLogout } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import './nav.css'
const Nav = ({search,setSearch,searchproduct}) => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();


    return (
        <>
            <div className='header'>
                <div className='top_header'>
                    <div className='icon'>
                        <MdLocalShipping />
                    </div>
                    <div className='info'>
                        <p>Free Shipping When Shopping upto $1000</p>
                    </div>
                </div>
                <div className='mid_header'>
                    <div className='logo'>
                        <img src="image/logo.png" alt='logo' />
                    </div>
                    {/* Search Bar */}
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
                        <button  onClick={searchproduct}><BsSearch /></button>
                    </div>
                    {
                        isAuthenticated ?
                            // Logout option
                            <div className='user'>
                                
                                <div className='btn'>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} ><FaArrowLeft />  Logout</button>
                                </div>
                            </div>
                            :
                            // login option
                            <div className='user'>
                                
                                <div className='btn'>
                                    <button onClick={() => loginWithRedirect()} ><FaRegUserCircle /> Login</button>
                                </div>
                            </div>
                    }

                </div>
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            // User Profile 
                            isAuthenticated ?
                                <>
                                    <div className='icon'>
                                        <FaRegCircleUser />

                                    </div>
                                    <div className='info'>
                                        <h2>{user.name}</h2>
                                        <p>{user.email}</p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='icon'>
                                        <FaRegCircleUser />

                                    </div>
                                    <div className='info'>
                                        <p>Please Login</p>
                                    </div>
                                </>
                        }
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><NavLink to={'/'} className="link">Home</NavLink></li>
                            <li><NavLink to={'/shop'} className="link">Shop</NavLink></li>
                            <li><NavLink to={'/about'} className="link">About</NavLink></li>
                            <li><NavLink to={'/contact'} className="link">Contact</NavLink></li>
                            <li ><NavLink to={'/cart'} className="link"><FaCartPlus /> Cart</NavLink></li>
                        </ul>
                    </div>
                    <div className='offer'>
                        <p>Flat 10% over all iphone</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Nav