import {BrowserRouter, Route, Routes} from "react-router-dom";
import IdlePage from "./IdlePage";
import Redirect from "./Redirect";
import Layout from "./layout/Layout";
import Coffee from "./main-menu-page/drink/Coffee";
import Tea from "./main-menu-page/drink/Tea";
import AdeandJuice from "./main-menu-page/drink/Ade-juice";
import SmoothieandFrappe from "./main-menu-page/drink/Smoothie-frappe";
import Decaffein from "./main-menu-page/drink/Decaffein";
import NewDrinks from "./main-menu-page/drink/New-drinks";
import Dessert from "./main-menu-page/drink/Dessert";
import NewDessert from "./main-menu-page/drink/New-dessert";
import { useState } from "react";
import { Point } from "./Point";
import ExtraShot from "./ExtraShot";
import ShoppingCart from "./ShoppingCart";


function App()
{
   const [cart, setCart] = useState([]);

 const addCart = (menuItem) => {
     setCart((prevMenu) => [...prevMenu, menuItem])
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Redirect/>}/>
        <Route path = "/idle" element ={<IdlePage/>}/>
        <Route path="/menu" element={<Layout/>}>
          <Route path="/menu/hotcoffee" element={<Coffee/>} >
            <Route path =":menucode" element={<ExtraShot addCart={addCart}/>}/>
            <Route path="shoppingcart" element={<ShoppingCart cart={cart}/>}/>
         </Route>
                    <Route path="/menu/icecoffee">
            <Route index element={<Coffee/>}/>
          </Route>
          <Route path="/menu/hottea">
            <Route index element={<Tea/>}/>
          </Route>
          <Route path="/menu/icetea">
            <Route index element={<Tea/>}/>
          </Route>
          <Route path="/menu/ade&juice">
            <Route index element={<AdeandJuice/>}/>
          </Route>
          <Route path="/menu/smoothie&frappe">
            <Route index element={<SmoothieandFrappe/>}/>
          </Route>
          <Route path="/menu/hotdecaf">
            <Route index element={<Decaffein/>}/>
          </Route>
          <Route path="/menu/icedecaf">
            <Route index element={<Decaffein/>}/>
          </Route>
          <Route path="/menu/newdrinks">
            <Route index element={<NewDrinks/>}/>
          </Route>
          <Route path="/menu/dessert">
            <Route index element={<Dessert/>}/>
          </Route>
          <Route path="/menu/newdessert">
            <Route index element={<NewDessert/>}/>
          </Route>
          <Route path="/menu/point">
            <Route index element={<Point/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;