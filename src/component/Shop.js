import React from 'react'
import './shop.css'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const Shop = ({ shop, Filter, allcatefilter,addtocart }) => {
    return (
        <>
            <div className='shop'>
                <div className='container4'>
                    <div className='left_box4'>
                        <div className='category'>
                            <div className='header'>
                                <h2>All Categories</h2>
                            </div>
                            <div className='box4'>
                                <ul>

                                    <li><NavLink onClick={() => Filter('tv')}>TV</NavLink></li>
                                    <li><NavLink onClick={() => Filter('laptop')}>Laptop</NavLink></li>
                                    <li><NavLink onClick={() => Filter('watch')}>Watch</NavLink></li>
                                    <li><NavLink onClick={() => Filter('speaker')}>Speaker</NavLink></li>
                                    <li><NavLink onClick={() => Filter('electronics')}>Electonics</NavLink></li>
                                    <li><NavLink onClick={() => Filter('headphone')}>Headphones</NavLink></li>
                                    <li><NavLink onClick={() => Filter('phone')}>Phones</NavLink></li>

                                </ul>
                            </div>
                        </div>
                        <div className='banner4'>
                            <div className='img_box4'>
                                <img src='image/shop_left.avif'></img>
                            </div>
                        </div>
                    </div>
                    <div className='right_box4'>
                        <div className='banner4'>
                            <div className='img_box4'>
                                <img src='image/shop_top.webp' alt='#' />
                            </div>
                        </div>
                        <div className='container mt-5'>

                            <div className='row' >
                                {

                                    shop.map((ele) => {
                                        return (
                                            <div className='col-md-4'>

                                                <div class="card m-2" style={{ width: "15rem" }}>
                                                    <img src={ele.image} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{ele.Name}</h5>
                                                        <p>Price: ${ele.price}</p>
                                                        <button className='btn btn-warning' onClick={()=>addtocart (ele)}>Add to cart</button>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className='btn btn-outline-primary text-center' onClick={() => allcatefilter('')}><span><FaArrowLeft /></span>
                                Go Back</button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Shop