import { useNavigate } from "react-router-dom";
import { language } from "../store/store";
import "./Header.css";


const Header = () =>
{
    const { lang, setLang } = language();

    const navigate = useNavigate();

    const onClickHandler = () => 
    {        
        setLang();
    }

    const onClickHandler2 = () =>
    {
        navigate(-1);
    }

    return (
        <header>
            <div className="header">
                <button onClick = {onClickHandler2} className="header_back_button">
                    <img src = {require("../assets/images/back.png")} className = "header_back_img" alt = "back"/>
                </button>
                <img src = {require("../assets/images/logo.png")} alt="logo" width="40%"/>
                <button onClick={onClickHandler} className="header_lang_button">
                    <img src = {lang ? require("../assets/images/images_idle/flag3dusa.png") : require("../assets/images/images_idle/flag3dkor.png")} className = "header_lang_img" alt = "lang"/>
                    </button>
            </div>
        </header>
    )
}

export default Header;