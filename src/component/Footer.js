import React from 'react'
import './footer.css'
import { MdSavings } from "react-icons/md";
import { FcShipped } from "react-icons/fc";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container3'>
                    <div className='left-box3'>
                        <div className='box3'>
                            <div className='icon_box3'>
                                <MdSavings />
                            </div>
                            <div className='detail3'>
                                <h3>Great Saving</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className='box3'>
                            <div className='icon_box3'>
                                <FcShipped />
                            </div>
                            <div className='detail3'>
                                <h3>free delivery</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className='box3'>
                            <div className='icon_box3'>
                                <MdOutlineHeadsetMic />
                            </div>
                            <div className='detail3'>
                                <h3>24X7 support</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className='box3'>
                            <div className='icon_box3'>
                                <CiWallet />
                            </div>
                            <div className='detail3'>
                                <h3>money back</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                    </div>
                    <div className='right_box3'>
                        <div className='image'>
                            <img src='image/logo.png'/>
                        </div>
                        <div className='icon_box'>
                    <div className='icon'>
                      <FaFacebookF />

                    </div>
                    <div className='icon'>
                      <FaSquareInstagram />

                    </div>
                    <div className='icon'>
                      <FaTwitter />

                    </div>
                    <div className='icon'>
                      <FaYoutube />

                    </div>

                  </div>


                        <div className='bottom3'>
                            <div className='box3'>
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>sales</li>
                                </ul>
                            </div>
                            <div className='box3'>
                                <h3>products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Oder</li>
                                    <li>New product</li>
                                    <li>old product</li>
                                </ul>
                            </div>
                            <div className='box3'>
                                <h3>contact us</h3>
                                <ul>
                                    <li>4005, Silver Business PointIndia</li>
                                    <li>+(012)99999999</li>
                                    <li>info@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='copy'>
                All Copyrights &copy;2024 Akash Electronic
                </div>
        </>
    )
}

export default Footer