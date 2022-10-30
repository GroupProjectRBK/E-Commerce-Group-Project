import {BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Posts from "./components/pages/Posts"
import Products from "./components/pages/Products"
import SingleProduct from "./components/pages/SingleProduct"
import Error from "./components/pages/Error"
import MainLayout from "./components/pages/MainLayout"
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tech from "./components/pages/Tech"
import AddProduct from "./components/pages/AddProduct"
import Login from "./components/pages/Login"
import Register from "./components/pages/register"
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header/>
      <Routes>
<Route path="login" element={<Login/>}></Route>
<Route path="register" element={<Register/>}></Route>
<Route path="add" element={<AddProduct/>}/>        
<Route path="tech" element={<Tech/>}/>                      
<Route path="index element" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="products" element={<Products/>}/>
<Route path="products/:productId" element={<SingleProduct/>}/>
<Route path="posts" element={<Posts/>}/>
<Route path="*" element={<Error/>}/>
      </Routes>
      <Cart/>
    <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
