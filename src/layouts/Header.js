import { useNavigate } from "react-router-dom";
import { language } from "../store/store";


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
                <button onClick = {onClickHandler2}>{lang ? "뒤로가기" : "Back"}</button>
                <img src = {require("../assets/images/logo.png")} alt="logo"/>
                {/* <button onClick={onClickHandler}>
                    <img src = {lang ? require("../assets/images/images_idle/flag3dusa.png") : require("../assets/images/images_idle/flag3dkor.png")} className = "header_lang_img" alt = "lang"/>
                    </button> */}
            </div>
        </header>
    )
}

export default Header;