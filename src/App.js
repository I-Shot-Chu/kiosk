import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import IdlePage from "./pages/Idle/Idle";
import Redirect from "./components/Redirect/redirect";
import Result from "./pages/Result/Result";
import Layout from "./layouts/Layout";
import { Point } from "./pages/Point/PointStorage";
import Purchase from "./pages/Payment/Payment";
import MenuDetail from "./pages/option/ShowExtraOptions";
import ShoppingCart from "./store/ShoppingList";
import { UserPoint } from "./pages/Point/UserPoint";

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
import { Coupon } from "./pages/Coupon/Coupon";


function App()
{

 

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
          <Route path="newdrinks" element={<NewDrinks />}/>

          {/* Dessert and MD Routes */}
          <Route path="dessert" element={<Dessert/>}/>
          <Route path="newdessert" element={<NewDessert/>}/>
          <Route path="md" element={<MdProduct/>}/>

          {/* Menu Detail and Shopping Cart */}
          <Route path=":menuCode" element={<MenuDetail/>}/>
          <Route path="shoppingcart" element={<ShoppingCart />}/>
        </Route>

        {/* Additional Pages */}

        <Route path="/menu/point" element={<Point />}/>
        <Route path="/menu/userpoint" element={<UserPoint/>}/>
        <Route path="/coupon" element={<Coupon/>}/>
        <Route path="/payment" element={<Purchase/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/card" element={<Card/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
