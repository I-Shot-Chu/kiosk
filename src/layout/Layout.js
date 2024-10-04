
import { Outlet } from "react-router-dom";
import Nav from "../navbar/Nav";
import Coffee from "../main-menu-page/drink/Coffee";



const Layout = ()=>{

    return(

        <>  
            <Nav/>
            <Outlet/>
        </>
    )
}

export default Layout;