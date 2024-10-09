
import { Outlet } from "react-router-dom";
import Nav from "../components/Navigation/Navigation";


const Layout = ()=>{

    return(
        <>  
            <Nav/>
            <Outlet/>
        </>
    )
}

export default Layout;