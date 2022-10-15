import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Forget from '../Pages/Forget/Forget';
import Reset from '../Pages/Reset/Reset';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Components/Home/Home';
import Quickview from '../Components/QuickView/QuickView';
import Header from '../Components/Header/Header';
import MyCart from '../Components/MyCart/MyCart';
import OrderPlaced from '../Components/OrderPlaced/OrderPlaced';
import Wishlist from '../Wishlist/Wishlist';
import MyOrder from '../Components/Order/MyOrder';

function RouterComponent() {

    const [currentBook, setCurrentBook] = React.useState({})
    //const [view, setView] = React.useState(false)

    const openBook = (book) => {
        console.log(book)
        setCurrentBook(book)
        //setView(true)
    }
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Home" element={<Home openBook={openBook}/>} />
          <Route path='/Header' element={<Header />}></Route>
          <Route path="/Forget" element={<Forget/>} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/QuickView" element={<Quickview />} />
          <Route path='/MyCart' element={<MyCart />}></Route>
          <Route path='/MyOrder' element={<MyOrder/>}></Route>
          <Route path='/OrderPlaced' element={<OrderPlaced />}></Route>
          <Route path='/Wishlist' element={<Wishlist />}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default RouterComponent