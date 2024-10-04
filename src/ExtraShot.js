import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import drinkMenus from "./json/drink.json"
import dessertMenus from "./json/dessert.json"
import { getMenuDetail } from "./main-menu-page/MenuAPI";

const ExtraShot = ({addCart}) => {


    const navigate = useNavigate();

    const {menuCode} = useParams();

    const [menu, setMenu] = useState({
        menuName : '',
        menuPrice : 0,
        detail : {description:'', image:''}
    });

    const [extramenu,setExtraMenu] = useState({  //추가메뉴(샷,휘핑)
        shotOption : '',
        totalPrice : 0
    });

/*
    "menuCode":1,
    "menuName":"밤밤 크리미 슈페너",
    "menuPrice":4500,
    "categoryName":"커피",
    "isOrderable":true,
    "detail": {
       "description": "갓 담근 열무김치를 착즙한 순도 100% 열무김치와 대관령 목장에서 방금 짜낸 싱싱한 우유의 조합",
       "image": "/images/1.jpg"
    }
*/

    useEffect(() => {
    try {
        const menuDetail = getMenuDetail(menuCode);
        setMenu(menuDetail);
        setExtraMenu(prevState => ({
            ...prevState,
            totalPrice: menuDetail.menuPrice
        }));
    } catch (error) {
        console.error("Failed to fetch menu detail:", error);
    }
}, [menuCode]);

    const handleOptionSelect = (option, price) => {
        setExtraMenu(prevState => ({
            ...prevState,
            shotOption: option,
            totalPrice: menu.menuPrice + price
    }));
    };

    const onClickHandler = () => {
        addCart({
            ...menu,
            extramenu
        });
    };
    
    const onClickHandler2 = () => {
        navigate(`/idle`);
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
            <button onClick={onClickHandler}>주문담기</button><button onClick={onClickHandler2}>취소</button>
            <div>
                <h3>농도(선택, 단일선택)</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div onClick={()=>handleOptionSelect('연하게', 0)} 
                    style={{ border: extramenu.shotOption === '연하게' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                    <img src="연하게_이미지_경로" alt="연하게" style={{width:50}}/>
                    <p>연하게</p>
                    <p>+0원</p>
                    </div>
                    <div onClick={()=>handleOptionSelect('샷 추가', 500)} 
                    style={{ border: extramenu.shotOption === '샷 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                    <img src="샷_추가_이미지_경로" alt="샷추가" style={{width:50}}/>
                    <p>샷 추가</p>
                    <p>+500원</p>
                    </div>
                    <div onClick={()=>handleOptionSelect('2샷 추가', 1000)} 
                    style={{ border: extramenu.shotOption === '2샷 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                    <img src="2샷_추가_이미지_경로" alt="2샷추가" style={{width:50}}/>
                    <p>2샷 추가</p>
                    <p>+1,000원</p>
                    </div>
                 </div>
            </div>
            <h3>총 가격: {extramenu.totalPrice}원</h3>
            <button onClick={onClickHandler}>주문담기</button>
            <button onClick={onClickHandler2}>취소</button>
        </>
    );
}

export default ExtraShot;

/*
 * ExtraShot.js
 * 상세정보 페이지
 * 각각의 음료에 대한 상세 옵션 추가(샷 추가 등)
 * 동작 완료 후 확인(담기) 버튼 클릭 시 메인 메뉴로 이동
 * 및 장바구니에 추가한 옵션까지 출력되도록 구현할 것
 */