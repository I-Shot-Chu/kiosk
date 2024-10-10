import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import IdlePage from "./pages/Idle/Idle";
import Redirect from "./pages/Redirect/redirect";
import Result from "./pages/Result/Result";
import Layout from "./layouts/Layout";
import { Point } from "./pages/Point/Point";
import Purchase from "./pages/Payment/Payment";
import MenuDetail from "./pages/option/ShowExtraOptions";
import ShoppingCart from "./store/ShoppingList";
import { UserPoint } from "./pages/Point/UserPoint";
import { Cupon } from './pages/Coupon/Coupon';

// Drink Pages
import { HotCoffee, IceCoffee } from "./features/Drinks/Coffee";
import { HotTea, IceTea } from "./features/Drinks/Tea";
import { HotDecaf, IceDecaf } from "./features/Drinks/Decaffein";
import NewDrinks from "./features/Drinks/NewDrinks";
import AdeAndJuice from "./features/Drinks/AdeAndJuice";
import SmoothieAndFrappe from "./features/Drinks/SmoothieAndFrappe";
import { HotDrinks, IceDrinks } from "./features/Drinks/Drinks";

// Dessert and MD Pages
import Dessert from "./features/Desserts/Dessert";
import NewDessert from "./features/Desserts/NewDessert";
import MdProduct from "./features/Merchandise/Merchandise";
import { Card } from "./pages/Card/Card";
import { useEffect, useState } from "react";

function App()
{

  const [finalTotalPrice,setFinalTotalPrice] =useState(0);

  useEffect(()=>{
    console.log(finalTotalPrice)
  },[finalTotalPrice])


  return (
    <BrowserRouter>
      <Routes>
        {/* Root Redirect */}
        <Route path="/" element={<Redirect/>}/>

        {/* Idle Page */}
        <Route path="/idle" element={<IdlePage/>}/>

        {/* Main Menu Layout with Nested Routes */}
        <Route path="/menu" element={<Layout/>}>
          {/* Drink Routes */}
          <Route path="hotcoffee" element={<HotCoffee/>}/>
          <Route path="icecoffee" element={<IceCoffee/>}/>
          <Route path="hottea" element={<HotTea/>}/>
          <Route path="icetea" element={<IceTea/>}/>
          <Route path="ade&juice" element={<AdeAndJuice/>}/>
          <Route path="smoothie&frappe" element={<SmoothieAndFrappe/>}/>
          <Route path="hotdecaf" element={<HotDecaf/>}/>
          <Route path="icedecaf" element={<IceDecaf/>}/>
          <Route path="hotdrinks" element={<HotDrinks/>}/>
          <Route path="icedrinks" element={<IceDrinks/>}/>
          <Route path="newdrinks" element={<NewDrinks  setFinalTotalPrice={setFinalTotalPrice}/>}/>

          {/* Dessert and MD Routes */}
          <Route path="dessert" element={<Dessert/>}/>
          <Route path="newdessert" element={<NewDessert/>}/>
          <Route path="md" element={<MdProduct/>}/>

          {/* Menu Detail and Shopping Cart */}
          <Route path=":menuCode" element={<MenuDetail/>}/>
          <Route path="shoppingcart" element={<ShoppingCart  setFinalTotalPrice={setFinalTotalPrice}/>}/>
        </Route>

        {/* Additional Pages */}
        <Route path="/point" element={<Point finalTotalPrice={finalTotalPrice} setFinalTotalPrice = {setFinalTotalPrice} />}/>
        <Route path="/userpoint" element={<UserPoint finalTotalPrice={finalTotalPrice} setFinalTotalPrice ={setFinalTotalPrice}/>}/>
        <Route path="/coupon" element={<Cupon finalTotalPrice={finalTotalPrice} setFinalTotalPrice = {setFinalTotalPrice} />}/>
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/card" element={<Card/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
