import {useParams} from "react-router-dom";
import {useState, useEffect, useReducer} from "react";
import {useNavigate} from "react-router-dom";
import { drinkgetMenuDetail,dessertgetMenuDetail,mdgetMenuDetail } from "./main-menu-page/MenuAPI";
import { ExtraIce, ExtraShot, ExtraSugar, ExtraTopping } from "./option/Option";
import Modal from 'react-modal';
import ShoppingCart from "./ShoppingCart";
import { initialState, cartReducer } from "./cartReducer";

// 리듀서 정의

const MenuDetail = () => {
    
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const navigate = useNavigate();

    const {menuCode} = useParams();

    const [menu, setMenu] = useState({
        menuName : '',
        menuPrice : 0,
        detail : {description:'', image:''}
    });

    const [extraMenu,setExtraMenu] = useState([  //추가메뉴(샷,휘핑)
    ]);

    const [modal, setModal] = useState(false);


    useEffect(() => {
        const drinkMenuDetail = drinkgetMenuDetail(menuCode);
        const dessertMenuDetail = dessertgetMenuDetail(menuCode);
        const mdMenuDetail = mdgetMenuDetail(menuCode);

        // 메뉴 상세 정보가 있는 것을 우선으로 설정
        const selectedMenuDetail = drinkMenuDetail || dessertMenuDetail || mdMenuDetail;

        setMenu(selectedMenuDetail || {
            menuName: '',
            menuPrice: 0,
            detail: { description: '', image: '' }
        });
    }, [menuCode]);


    const handleOptionSelect = (option, price) => {
        setExtraMenu((prevExtraMenu) => [
            ...prevExtraMenu,
           {option,price}
        ]);             
    };
    
    // 총 옵션 가격 계산
    const totalExtraPrice = extraMenu.reduce((acc, item) => acc + item.price, 0);
    const finalTotalPrice = menu.menuPrice + totalExtraPrice;


    const onClickHandler = () => {
        dispatch({ type: "ADD_ITEM", payload: {
            ...menu,
            extraMenu,
            finalTotalPrice
        }});
        //navigate("/menu/shoppingcart");
        setModal(true);
    };

    const onClickHandler2 = () => {
        navigate(`/menu/newdrinks`);
    }

    return(
        <>
            <h2>선택하신 상품의 옵션상품을 모두 선택해주세요</h2>
            
            
            {menu.menuName ? (
                <>
            <img src={menu.detail.image} style={{maxWidth:300}} alt={menu.menuName}/>
            <h3>{menu.menuName}</h3>
            <h3>{menu.menuPrice}원</h3>
            <p>{menu.detail.description}</p>
                </>
            ) : (
                <p>메뉴를 불러오는 중 입니다..</p>
            )}
            {<ExtraShot extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraSugar extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraIce extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraTopping extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            <h3>총 가격: {finalTotalPrice}원</h3>
            <button onClick={onClickHandler}>주문담기</button>
            <Modal isOpen = {modal} ariaHideApp={false} onRequestClose={onClickHandler2}>
                <ShoppingCart state={state} dispatch={dispatch}/>
                <button onClick={onClickHandler2}>닫기</button>
            </Modal>
            <button onClick={onClickHandler2}>취소</button>
        </>
    );
}

export default MenuDetail;

/*
 * ExtraShot.js
 * 상세정보 페이지
 * 각각의 음료에 대한 상세 옵션 추가(샷 추가 등)
 * 동작 완료 후 확인(담기) 버튼 클릭 시 메인 메뉴로 이동
 * 및 장바구니에 추가한 옵션까지 출력되도록 구현할 것
 */