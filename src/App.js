import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import RequireAuth from './Api/RequireAuth';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <ToastContainer toastStyle={{backgroundColor :"rgb(59, 50, 50)", color:"white"}} />
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignUp />}/>
      <Route path='/store' element={<RequireAuth><Dashboard /></RequireAuth>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App










































// import { useState} from 'react'
// import Cart from './component/Cart/Cart';
// import Footer from './component/Footer/Footer';
// import Header from './component/Layout/Header';
// import Meals from './component/Meals/Meals'
// import CartProvider from './store/CartProvider';


// function App() {
// const [cartIsShown, setCartIsShown] = useState(false)

// function showCartHandler(){
//   setCartIsShown(true)
// }

// function hideCartHandler(){
// setCartIsShown(false)
// }
//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onCarthide={hideCartHandler}/>}
//       <Header onCartshown={showCartHandler}  />
//       <main>
//         <Meals />
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </CartProvider>
//   );
// }

// export default App;


