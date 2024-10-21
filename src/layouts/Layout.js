import { Outlet } from "react-router-dom";
import Nav from "../components/Navigation/Navigation";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ()=>{

    return(
        <>  
            <Header/>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    )
}


export default Layout;