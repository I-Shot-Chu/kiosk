import useStore from "./countstore";


const ShoppingCart = ( {cart} ) => {

    const {count, increment, decrement, reset} = useStore();


    return(
      <>
        <h1>장바구니</h1>      
        <div>
            {cart.length > 0 ? (cart.map(menu => (
                <div key={menu.menuCode}>
                    <li>{menu.menuName}</li> 
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                    <button onClick={reset}>초기화</button>
                    <span>{menu.menuPrice}원</span>
                </div>
            ))
        ) : (
            <span>선택한 커피가 없습니다.</span>
        )}
        </div>
      </>      
    );
};

export default ShoppingCart;
/*
 * ShoppingCart.js
 * 장바구니
 * 메인 메뉴 좌측 하단에서 동작할 기능으로,
 * 메인메뉴와 상세정보에서 선택한 정보를 취합하여 최종적으로 주문할 항목 출력
 */