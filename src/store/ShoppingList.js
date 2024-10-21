import { useNavigate } from "react-router-dom";
import { language, useCartStore ,usePriceStore} from "./store"; // Zustand store
import { useState } from "react";
import './ShoppingList.css'

const ShoppingCart = ({ isModalOpen }) => {
    const { cartItems, removeFromCart, updateItemCount } = useCartStore(); // Zustand actions

    const { setTotalPrice} = usePriceStore();

    const [itemCounts, setItemCounts] = useState({}); // Local state to handle item counts

    const handleRemove = (id) => 
    {
        removeFromCart(id); // Remove using the unique id
    };
    
    const handleCountChange = (id, newCount) => 
    {
        setItemCounts((prev) => (
        {
            ...prev,
            [id]: newCount,
        }));
        updateItemCount(id, newCount); // Update count using id
    };

    // Calculate total price
    const ftotalPrice = cartItems.reduce((acc, menu) => {
        const count = itemCounts[menu.id] || 1; // Default count is 1 if not yet set
        const pricePerItem = menu.finalTotalPrice || menu.menuPrice || 0;
        return acc + pricePerItem * count;
    }, 0);

     const go  = useNavigate();

    const submit=()=>{

        setTotalPrice(ftotalPrice)
        go("userpoint");
      
     }

    return (
        <>
            <div>
                {cartItems.length > 0 ? (
                    cartItems.map((menu, index) => (
                        <MenuItem
                            key={menu.id} // Use unique id as the key
                            index={index + 1} // Pass index starting from 1
                            menu={menu}
                            onRemove={handleRemove}
                            onCountChange={handleCountChange}
                            count={itemCounts[menu.id] || 1} // Use id for local state handling
                            isModalOpen={isModalOpen}
                        />
                    ))
                ) : null}
            </div>
        </>
    );
};

const MenuItem = ({ index, menu, onRemove, onCountChange, count, isModalOpen }) => 
{
    const pricePerItem = menu.finalTotalPrice || menu.menuPrice || 0;

    const { lang } = language();

    // Increment item count
    const increment = () => {
        const newCount = count + 1;
        onCountChange(menu.id, newCount);
    };

    // Decrement item count
    const decrement = () => {
        const newCount = count > 1 ? count - 1 : 1; // Minimum count is 1
        onCountChange(menu.id, newCount);
    };

    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    return (
        <div>
            <div className="order_list">
                {isModalOpen ? null : <button onClick={() => onRemove(menu.id)} className="delete_button"></button>}
                    &nbsp;
                    <h3 className="order_menu_name">
                        {index}.
                        &nbsp;&nbsp;&nbsp;
                        {truncateText(lang ? menu.menuName : menu.enName, lang ? 20 : 25)}
                        &nbsp;&nbsp;&nbsp;
                    </h3>
                {isModalOpen ? null : <button onClick={decrement} className="decrement_button"></button>}
                <div className="order_count">{count} {lang ? "개" : "pcs"}</div>
                {isModalOpen ? null : <button onClick={increment} className="increment_button"></button>}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="order_price">{(pricePerItem * count).toLocaleString()}{lang ? "원" : " Won"}</div>
            </div>
            {menu.extraMenu && menu.extraMenu.length > 0 ? (
            <ul className="order_option">
                {menu.extraMenu.map((extra, index) => (
                    <div key={index}>
                        - {extra.option} - {extra.price}원
                    </div>
                ))}
            </ul>
            ) : null}
        </div>
    );
};

export default ShoppingCart;
