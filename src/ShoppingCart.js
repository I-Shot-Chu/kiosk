import { useCartStore } from "./store"; // Zustand store
import { useState } from "react";

const ShoppingCart = () => {
    const { cartItems, removeFromCart, clearCart, updateItemCount } = useCartStore(); // Zustand actions
    const [itemCounts, setItemCounts] = useState({}); // Local state to handle item counts

    // Remove an item from the cart
    const handleRemove = (menuCode) => {
        removeFromCart(menuCode);
    };

    // Update item count and sync with Zustand store
    const handleCountChange = (menuCode, newCount) => {
        setItemCounts((prev) => ({
            ...prev,
            [menuCode]: newCount
        }));
        updateItemCount(menuCode, newCount); // Update count in Zustand store
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, menu) => {
        const count = itemCounts[menu.menuCode] || 1; // Default count is 1 if not yet set
        const pricePerItem = menu.finalTotalPrice || menu.menuPrice || 0;
        return acc + pricePerItem * count;
    }, 0);

    return (
        <>
            <button onClick={clearCart}>장바구니 비우기</button>
            <h1>장바구니</h1>
            <div>
                {cartItems.length > 0 ? (
                    cartItems.map((menu, index) => (
                        <MenuItem
                            key={menu.menuCode} // <= 141 ? index : menu.menuCode}
                            menu={menu}
                            onRemove={handleRemove}
                            onCountChange={handleCountChange}
                            count={itemCounts[menu.menuCode] || 1} // Default count is 1
                        />
                    ))
                ) : (
                    <span>장바구니가 비어있습니다.</span>
                )}
            </div>
            <h2>총 가격: {totalPrice}원</h2>
        </>
    );
};

const MenuItem = ({ menu, onRemove, onCountChange, count }) => {
    const pricePerItem = menu.finalTotalPrice || menu.menuPrice || 0;

    // Increment item count
    const increment = () => {
        const newCount = count + 1;
        onCountChange(menu.menuCode, newCount);
    };

    // Decrement item count
    const decrement = () => {
        const newCount = count > 1 ? count - 1 : 1; // Minimum count is 1
        onCountChange(menu.menuCode, newCount);
    };

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
                <button onClick={() => onRemove(menu.menuCode)}>X</button>
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
            </div>
            <h3>{pricePerItem * count}원 (개당 가격: {pricePerItem}원)</h3>
            <br></br><br></br>
        </div>
    );
};

export default ShoppingCart;
