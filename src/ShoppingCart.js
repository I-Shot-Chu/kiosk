import { useReducer, useState } from "react";
import {  useNavigate } from "react-router-dom";

const ShoppingCart = ({ state = {}, dispatch, setFinalTotalPrice }) => {
    const { cart = [], itemCounts = {} } = state;

    const handleRemove = (menuCode) => {
        dispatch({ type: "REMOVE_ITEM", payload: menuCode });
    };

    const handleCountChange = (menuCode, newCount) => {
        dispatch({ type: "UPDATE_COUNT", payload: { menuCode, count: newCount } });
    };

    const totalPrice = cart.reduce((acc, menu) => {
        const count = itemCounts[menu.menuCode] || 0;
        const pricePerItem = menu.finalTotalPrice || menu.menuPrice;
        return acc + pricePerItem * count;
    }, 0);

    const go  = useNavigate();

    const submit = () => {
        setFinalTotalPrice(prev => prev + totalPrice); // 총 가격을 UserPoint로 전달
        console.log(totalPrice);
        go("/userpoint");

    }
    const submit2 = () => {
        setFinalTotalPrice(prev => prev + totalPrice); // 총 가격을 UserPoint로 전달
        console.log(totalPrice);
        go("/point");

    }

    return (
        <>
            <h1>장바구니</h1>
            <div>
                {
                cart.length > 0 ? (
                    cart.map(menu => (
                        <MenuItem
                            key={menu.menuCode}
                            menu={menu}
                            onRemove={handleRemove}
                            onCountChange={handleCountChange}
                        />
                    ))
                ) : (
                    <span>선택한 커피가 없습니다.</span>
                )}
            </div>
            <h2>총 가격: {totalPrice}원</h2>
            <button onClick={submit}>가격제출</button>
            <button onClick={submit2}>포인트적립</button>

        </>
    );
};

const MenuItem = ({ menu, onRemove, onCountChange }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(menu.menuCode, newCount);
    };

    const decrement = () => {
        const newCount = count > 0 ? count - 1 : 0;
        setCount(newCount);
        onCountChange(menu.menuCode, newCount);
    };

    const reset = () => {
        setCount(0);
        onCountChange(menu.menuCode, 0);
    };

    const pricePerItem = menu.finalTotalPrice || menu.menuPrice;

    return (
        <div>
            <li>{menu.menuName}</li>
            <h4>추가 메뉴:</h4>
            {menu.extraMenu && menu.extraMenu.length > 0 ? (
                <ul>
                    {menu.extraMenu.map((extra, index) => (
                        <li key={index}>
                            {extra.option} - {extra.price}원
                        </li>
                    ))}
                </ul>
            ) : (
                <p>선택한 추가 메뉴가 없습니다.</p>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
            </div>
            <button onClick={reset}>초기화</button>
            <h3>{pricePerItem * count}원 (단가: {pricePerItem}원)</h3>
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