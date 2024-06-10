import React, { useEffect, useState } from 'react'
import './home.css'
import { NavLink } from 'react-router-dom';
import Homeproduct from './Homeproduct';
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const Home = ({addtocart}) => {
 
  const [newProduct, setNewProduct] = useState([])
  const [featuredProduct, setFeaturedProduct] = useState([])
  const [topProduct, setTopProduct] = useState([])
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  // /filtering functon
  const filtercate = (e) => {
    const filterproduct = Homeproduct.filter((ele) => {
      return ele.type === e
    })
    setTrendingProduct(filterproduct)
  }
  // Trending Products functionality
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct)
  }
  // Product Type
  useEffect(() => {
    productcategory()
  })
  const productcategory = () => {
    const newcategory = Homeproduct.filter((ele) => {
      return ele.type === 'new'
    })
    setNewProduct(newcategory)

    // featured product
    const featuredcategory = Homeproduct.filter((ele => {
      return ele.type === 'featured'
    }))
    setFeaturedProduct(featuredcategory)

    // top products
    const topcategory = Homeproduct.filter((ele => {
      return ele.type === 'top'
    }))
    setTopProduct(topcategory)

  }
  
  return (
    <>
  
      <div className='home'>
        <div className='top_banner'>
          <div className='contant'>
            <h3>silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first order</p>
            <button className='btn btn-success'><NavLink to='/shop' className='link'>Shop Now</NavLink></button>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <button className="btn btn-dark" onClick={() => allTrendingProduct()}>Trending Products</button>
                </div>
                <div className='cate'>
                  <button className="btn btn-light" onClick={() => filtercate('new')}>New</button>
                  <button className="btn btn-light" onClick={() => filtercate('featured')}>Featured</button>
                  <button className="btn btn-light" onClick={() => filtercate('top')}>top selling</button>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((ele) => {
                      return (
                        <>
                          <div className='box'>
                            <div className='img_box'>
                              <img src={ele.image} />
                              <div className='icon'>
                                <div className='icon_box'>
                                  <FaEye />

                                </div>
                                <div className='icon_box1'>

                                  <FaHeart />
                                </div>
                                <div className='icon_box2'>
                                  <FaStar />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{ele.Name}</h3>
                              <p>${ele.price}</p>
                             
                              <button className='btn btn-warning' id='btn1' onClick={() => addtocart (ele)}s>Add to cart</button>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>
              <div className='text-center mt-5'>
                <div className='btn btn-info'>Show more</div>
              </div>
            </div>
            <div className='right_box'>
              <img src='image/bb1.jpg' />
              <button className='btn btn-primary mt-4'>Learn more</button>
              <div className='flexbox'>
                <img src='image/bb3.jpg' />
                <button className='btn btn-primary mt-4'>Learn more</button>
                <img src='image/bb5.jpg' />
                <button className='btn btn-primary mt-4'>Learn more</button>
              </div>
              <div className='newsletter'>
                <div className='head'>
                  <h3>NEWSLETTER</h3>
                </div>
                <div className='form'>
                  <p>join our malling</p>
                  <input type='email' placeholder='E-mail' />
                  <button className='btn btn-danger'>Subscribe</button>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners1'>
          <div className='container1'>
            <div className='left_box1'>
              <div className='box1'>
                <img src='image/Multi-Banner-1.avif' />
              </div>
              <div className='box1'>
                <img src='image/Multi-Banner-2.avif' />
              </div>
            </div>
            <div className='right_box1'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt=''></img>
                <img src='image/Multi-Banner-4.avif' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container2'>
            <div className='box2'>
              <div className='header2'>
                <h2>New Products</h2>
              </div>
              {
                newProduct.map((ele) => {
                  return (
                    <>
                      <div className='productbox2'>
                        <div className='img-box2'>
                          <img src={ele.image} />
                        </div>
                        <div className='detail2'>
                          <h3>{ele.Name}</h3>
                          <p>${ele.price}</p>
                          <div className='icon'>
                            <button><FaEye /></button>
                            <button><FaHeart /></button>
                            <button onClick={() => addtocart (ele)}><FaCartPlus /></button>
                          </div>
                        </div>

                      </div>

                    </>
                  )
                })
              }

            </div>
            <div className='box2'>
              <div className='header2'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((ele) => 
                {
                  return(
                    <>
                    <div className='productbox2'>
                      <div className='img-box2'>
                        <img src={ele.image} alt=''/>
                      </div>
                      <div className='detail2'>
                        <h3>{ele.Name}</h3>
                        <p>$ {ele.price}</p>
                        <div className='icon'>
                        <button><FaEye /></button>
                            <button><FaHeart /></button>
                          <button onClick={() => addtocart (ele)}><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box2'>
              <div className='header2'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((ele) => 
                {
                  return(
                    <>
                    <div className='productbox2'>
                      <div className='img-box2'>
                        <img src={ele.image} alt=''/>
                      </div>
                      <div className='detail2'>
                        <h3>{ele.Name}</h3>
                        <p>$ {ele.price}</p>
                        <div className='icon'>
                        <button><FaEye /></button>
                            <button><FaHeart /></button>
                          <button onClick={() => addtocart (ele)}><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Home