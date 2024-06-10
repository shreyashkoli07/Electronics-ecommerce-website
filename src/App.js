import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Nav from './component/Nav';
import { BrowserRouter } from 'react-router-dom'
import Rout from './component/Rout';
import Footer from './component/Footer';
import Homeproduct from './component/Homeproduct';
const App = () => {
 

  // add to cart
  const [cart,setCart]=useState([])
  // shop page product
  const [shop,setShop] = useState(Homeproduct)
  const [home,setHome] = useState(Homeproduct)
 
  
  // category filter
  const Filter = (e) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === e
    }) 
    setShop (catefilter)

  }
  const allcatefilter =()=>{
    setShop(Homeproduct)
  }
   // search filter
   const [search,setSearch]=useState('')
   const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("Please Search Something !")
    setShop(Homeproduct)
  }
  else
  {
    
      const searchfilter = Homeproduct.filter((x) => 
      {
        return x.cat === search
      })
      setShop(searchfilter)
      setHome(searchfilter)
  }

}
// Add to cart 
const addtocart = (product) =>
{
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if(exist)
  {
    alert("This product is alleardy added in cart")
  }
  else
  {
    setCart([...cart, {...product, qty:1}])
    alert("Added To cart")
  }
}
 console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
        <Rout setCart={setCart} cart={cart}shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App