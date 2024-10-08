import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdlePage from "./IdlePage";
import Redirect from "./Redirect";
import Result from "./Result";
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
import Purchase from "./Purchase";
import MenuDetail from "./MenuDetail"; 
import ShoppingCart from "./ShoppingCart"; 
import { UserPoint } from "./UserPoint"; 
import { Cupon } from "./Cupon"; 
import { Card } from "./Card";

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (menuItem) => {
    setCart((prevMenu) => [...prevMenu, menuItem]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/idle" element={<IdlePage />} />
        <Route path="/menu" element={<Layout />}>
          {/* 메뉴별 라우트 설정 */}
          <Route path="hotcoffee" element={<Coffee cart={cart} />} />
          <Route path="icecoffee" element={<Coffee />} />
          <Route path="hottea" element={<Tea />} />
          <Route path="icetea" element={<Tea />} />
          <Route path="ade&juice" element={<AdeandJuice />} />
          <Route path="smoothie&frappe" element={<SmoothieandFrappe />} />
          <Route path="hotdecaf" element={<Decaffein />} />
          <Route path="icedecaf" element={<Decaffein />} />
          <Route path="newdrinks" element={<NewDrinks />} />
          <Route path="dessert" element={<Dessert />} />
          <Route path="newdessert" element={<NewDessert />} />
          <Route path="point" element={<Point />} />
          {/* 추가 메뉴 상세 옵션 */}
          <Route path=":menuCode" element={<MenuDetail addCart={addCart} />} />
          <Route path="shoppingcart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
        </Route>
        <Route path="/point" element={<Point />} />
        <Route path="/userpoint" element={<UserPoint />} />
        <Route path="/cupon" element={<Cupon />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/result" element={<Result />} />
        <Route path="/card" element={<Card/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;