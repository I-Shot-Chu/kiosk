import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import IdlePage from "./IdlePage";
import Redirect from "./redirect";
import Result from "./Result";
import Layout from "./layout/Layout";
import { Point } from "./Point";
import Purchase from "./Purchase";
import MenuDetail from "./MenuDetail";
import ShoppingCart from "./ShoppingCart";
import { UserPoint } from "./UserPoint";
import { Coupon } from "./Coupon";

// Drink Pages
import { HotCoffee, IceCoffee } from "./main-menu-page/drink/Coffee";
import { HotTea, IceTea } from "./main-menu-page/drink/Tea";
import { HotDecaf, IceDecaf } from "./main-menu-page/drink/Decaffein";
import NewDrinks from "./main-menu-page/drink/NewDrinks";
import AdeAndJuice from "./main-menu-page/drink/AdeAndJuice";
import SmoothieAndFrappe from "./main-menu-page/drink/SmoothieAndFrappe";
import { HotDrinks, IceDrinks } from "./main-menu-page/drink/Drinks";

// Dessert and MD Pages
import Dessert from "./main-menu-page/dessert-md/Dessert";
import NewDessert from "./main-menu-page/dessert-md/NewDessert";
import MdProduct from "./main-menu-page/dessert-md/Md";

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
          <Route path="newdrinks" element={<NewDrinks/>}/>

          {/* Dessert and MD Routes */}
          <Route path="dessert" element={<Dessert/>}/>
          <Route path="newdessert" element={<NewDessert/>}/>
          <Route path="md" element={<MdProduct/>}/>

          {/* Menu Detail and Shopping Cart */}
          <Route path=":menuCode" element={<MenuDetail/>}/>
          <Route path="shoppingcart" element={<ShoppingCart/>}/>
        </Route>

        {/* Additional Pages */}
        <Route path="/point" element={<Point/>}/>
        <Route path="/userpoint" element={<UserPoint/>}/>
        <Route path="/coupon" element={<Coupon/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
