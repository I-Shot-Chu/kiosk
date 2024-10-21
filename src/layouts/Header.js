import { useNavigate } from "react-router-dom";
import { language } from "../store/store";
<<<<<<< HEAD
import './Header.css';
=======
import "./Header.css";
>>>>>>> e04aab92cc0bf821cbed55b99ae8ef6b82fb81b4


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
<<<<<<< HEAD
                <button onClick = {onClickHandler2}>{lang ? "뒤로가기" : "Back"}</button>
                <img src = {require("../assets/images/logo2.png")} alt="logo" width="20%"/>
                <button onClick={onClickHandler}>
=======
                <button onClick = {onClickHandler2} className="header_back_button">
                    <img src = {require("../assets/images/back.png")} className = "header_back_img" alt = "back"/>
                </button>
                <img src = {require("../assets/images/logo.png")} alt="logo" width="40%"/>
                <button onClick={onClickHandler} className="header_lang_button">
>>>>>>> e04aab92cc0bf821cbed55b99ae8ef6b82fb81b4
                    <img src = {lang ? require("../assets/images/images_idle/flag3dusa.png") : require("../assets/images/images_idle/flag3dkor.png")} className = "header_lang_img" alt = "lang"/>
                    </button>
            </div>
        </header>
    )
}

export default Header;