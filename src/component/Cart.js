import React from 'react'
import './cart.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Cart = ({ cart, setCart }) => {
    // Increasing functionality
    const incqty = (product) => {
        const exist = cart.find((e) => {
            return e.id === product.id
        })
        setCart(cart.map((ele) => {
            return ele.id === product.id ? { ...exist, qty: exist.qty + 1 } : ele
        }))
    }
    // Decreasing functionality
    const decqty = (product) => {
        const exist = cart.find((e) => {
            return e.id === product.id
        })
        setCart(cart.map((ele) => {
            return ele.id === product.id ? { ...exist, qty: exist.qty - 1 } : ele
        }))
    }
    // Remove Functionality
const removeproduct=(product)=>{
const exist=cart.find((e)=>{
return e.id===product.id
})
if(exist.qty > 0){
    setCart(cart.filter((ele)=>{
        return ele.id !==product.id
    }))
}
}
// Total price 
const total= cart.reduce((price,item)=> price+item.qty * item.price,0)
    return (
        <>
            <div className='cart'>
                <h3><FaShoppingCart />Cart</h3>
                {
                    cart.length === 0 &&
                    <>
                        <div className='empty_cart'>
                            <img src='image/undraw_empty_cart_co35.svg'/>
                            <h2>OOps Your Cart Is Empty...........!</h2>
                            <NavLink to={'/shop'}><button className='btn btn-success'>Shop Now <FaLongArrowAltRight /></button></NavLink>
                        </div>
                    </>
                }
               
                <div className='container mt-5 '>

                    <div className='row '>
                        {

                            cart.map((ele) => {
                                return (
                                    <div className='col-md-4'>
                                        <div class="card m-8" style={{ width: "15rem" }}>
                                            <div className='icon'>
                                                <NavLink onClick={()=>removeproduct(ele)}><MdDeleteForever /></NavLink>
                                            </div>
                                            <img src={ele.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{ele.Name}</h5>
                                                <h4>{ele.cat}</h4>
                                                <p>Price: ${ele.price}</p>
                                                <div className='quantity d-flex'>
                                                    <button onClick={() => incqty(ele)}>+</button>
                                                    <input type='number' value={ele.qty}></input>
                                                    <button onClick={() => decqty(ele)}>-</button>
                                                </div>
                                               
                                            </div>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>


                </div>
                <div className='bottom'>
                    {
                        cart.length > 0 && 
                        <>
                        
                        </>
                    }
                    <div className='total'>
                        <h2>Total Amount:${total}</h2>
                        <button className='order'>Place Order</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Cart