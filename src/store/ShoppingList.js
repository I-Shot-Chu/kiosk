import { useNavigate } from "react-router-dom";
import { language, useCartStore ,usePriceStore} from "./store"; // Zustand store
import { useState } from "react";


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
             <button onClick={submit}>go</button> 


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

    return (
        <div>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                {isModalOpen ? null : <button onClick={() => onRemove(menu.id)}>X</button>}
                &nbsp;
                {index}
                &nbsp;&nbsp;&nbsp;
                {lang ? `${menu.menuName}` : `${menu.enName}`}
                &nbsp;&nbsp;&nbsp;
                {isModalOpen ? null : <button onClick={decrement}>-</button>}
                <h3>{count} {lang ? "개" : "pcs"}</h3>
                {isModalOpen ? null : <button onClick={increment}>+</button>}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h3>{pricePerItem * count}{lang ? "원" : " Won"}</h3>
            </div>
            {menu.extraMenu && menu.extraMenu.length > 0 ? (
                <ul>
                    {menu.extraMenu.map((extra, index) => (
                        <li key={index}>
                            {extra.option} - {extra.price}원
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default ShoppingCart;
