import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdlePage from "./IdlePage";
import Redirect from "./Redirect";
import Result from "./Result";
import Layout from "./layout/Layout";
import { useReducer } from "react";
import { HotCoffee, IceCoffee } from "./main-menu-page/drink/Coffee";
import { HotTea, IceTea } from "./main-menu-page/drink/Tea";
import { HotDecaf, IceDecaf } from "./main-menu-page/drink/Decaffein";
import NewDrinks from "./main-menu-page/drink/NewDrinks";
import Dessert from "./main-menu-page/dessert-md/Dessert";
import NewDessert from "./main-menu-page/dessert-md/NewDessert";
import { Point } from "./Point";
import Purchase from "./Purchase";
import MenuDetail from "./MenuDetail"; 
import ShoppingCart from "./ShoppingCart"; 
import { UserPoint } from "./UserPoint"; 
import { Cupon } from "./Cupon"; 
import cartReducer, { initialState } from "./cartReducer"; 
import AdeAndJuice from "./main-menu-page/drink/AdeAndJuice";
import SmoothieAndFrappe from "./main-menu-page/drink/SmoothieAndFrappe";
import { HotDrinks, IceDrinks } from "./main-menu-page/drink/Drinks";
import MdProduct from "./main-menu-page/dessert-md/Md";

function App() {
  
  const [state, dispatch] = useReducer(cartReducer, initialState);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/idle" element={<IdlePage />} />
        <Route path="/menu" element={<Layout />}>
          {/* 메뉴별 라우트 설정 */}

          <Route path="hotcoffee" element={<HotCoffee/>} />
          <Route path="icecoffee" element={<IceCoffee/>} />
          <Route path="hottea" element={<HotTea />} />
          <Route path="icetea" element={<IceTea />} />
          <Route path="ade&juice" element={<AdeAndJuice />} />
          <Route path="smoothie&frappe" element={<SmoothieAndFrappe />} />
          <Route path="hotdecaf" element={<HotDecaf />} />
          <Route path="icedecaf" element={<IceDecaf />} />
          <Route path="hotdrinks" element={<HotDrinks />} />
          <Route path="icedrinks" element={<IceDrinks />} />
          <Route path="newdrinks" element={<NewDrinks  />} />
          <Route path="dessert" element={<Dessert />} />
          <Route path="newdessert" element={<NewDessert />} />
          <Route path="md" element={<MdProduct />} />
          <Route path="point" element={<Point />} />

          {/* 추가 메뉴 상세 옵션 */}
          <Route path=":menuCode" element={<MenuDetail dispatch={dispatch} />}/>
          <Route path="shoppingcart" element={<ShoppingCart state={state} dispatch={dispatch} />} />
        </Route>
        <Route path="/point" element={<Point />} />
        <Route path="/userpoint" element={<UserPoint />} />
        <Route path="/cupon" element={<Cupon />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      
    </BrowserRouter>
  );
};


export default App;