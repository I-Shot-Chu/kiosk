import { useState } from "react";

const ShoppingCart = ( {cart, setCart} ) => {
    const handleRemove = (menuCode) => {
        setCart((prevCart) => prevCart.filter((menu) => menu.menuCode !== menuCode));
      };

    return(
      <>
        <h1>장바구니</h1>      
        <div>
            {cart.length > 0 ? (cart.map(menu => (
               <MenuItem key = {menu.menuCode} menu={menu} onRemove={handleRemove}/>
            ))
        ) : (
            <span>선택한 커피가 없습니다.</span>
        )}
        </div>
      </>      
    );
};

const MenuItem = ({menu, onRemove}) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    const reset = () => setCount(0);

    return (
        <div>
            <li>{menu.menuName}</li>
            <div style={{ display : "flex", alignItems: "center", gap: "5px"}}>
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
            </div>
            <button onClick={reset}>초기화</button>
            <h3>{menu.menuPrice}원</h3>
            <button onClick={() => onRemove(menu.menuCode)}>삭제</button>
        </div>
    );
};

export default ShoppingCart;
/*
 * ShoppingCart.js
 * 장바구니
 * 메인 메뉴 좌측 하단에서 동작할 기능으로,
 * 메인메뉴와 상세정보에서 선택한 정보를 취합하여 최종적으로 주문할 항목 출력
 */