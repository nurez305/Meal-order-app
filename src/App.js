import {Fragment, useState} from 'react'
import Cart from './component/Cart/Cart';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals'


function App() {
const [cartIsShown, setCartIsShown] = useState(false)

function showCartHandler(){
  setCartIsShown(true)
}

function hideCartHandler(){
setCartIsShown(false)
}
  return (
    <Fragment>
      {cartIsShown && <Cart onCarthide={hideCartHandler}/>}
      <Header onCartshown={showCartHandler}  />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
