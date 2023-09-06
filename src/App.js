import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { New, NewOther, Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import "./pages/shop/shop.css"

// export const Person = (props) => {
//   return (
//     <div>
//       <h1>Name : {props.name}</h1>
//       <h1>Age : {props.age}</h1>
//     </div>
//   )
// }

function App() {
  return (
    // <div>
    //  <New/>
    //  <NewOther/>
     
    // </div>
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
