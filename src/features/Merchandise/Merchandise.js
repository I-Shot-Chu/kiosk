import { useEffect, useState } from "react";
import {  MdItem } from "../ShowItems";
import { mdProduct } from "../getMenuDetails";

const MdProduct = ()=>{

    const [md, setMd] = useState([]);

    useEffect(()=>{
        setMd(mdProduct())
    },[]);

    return(
        <>
        <div>
            {md.map(mdItem => <MdItem key={mdItem.menuCode} mdProduct={mdItem}/>)}
        </div>
        </>
    )
}

export default MdProduct;