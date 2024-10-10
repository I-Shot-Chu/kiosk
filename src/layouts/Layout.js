import { Outlet } from "react-router-dom";
import Nav from "../components/Navigation/Navigation";
import Header from "./Header";
import Footer from "./Footer";
import Timer from "./Timer";

const Layout = ()=>{

    return(
        <>  
            <Header/>
            <Nav/>
            <Outlet/>
            {/* <Timer/> */}
            <Footer/>
        </>
    )
}

export default Layout;