import { Outlet } from "react-router-dom";
import Nav from "../navbar/Nav";




const Layout = ()=>{
    return(





         <>
             <Nav/>


            <Outlet/>
        </>
    )
}

export default Layout;