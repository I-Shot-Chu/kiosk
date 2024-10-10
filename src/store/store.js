import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const language = create(persist((set) => (
    {
        lang: true,  
        setLang: () => set((state) => ({ lang: !state.lang }))
    }),
    {
        name: 'lang-storage',
        getStorage: () => localStorage
    }
));



export const useCartStore = create(persist((set) => (
{
    cartItems: [],
    
    // Add item to cart with unique ID
    addToCart: (item) => set((state) => (
    {
        cartItems: [...state.cartItems, { ...item, id: Date.now() }], // Assign a unique id to each item
    })),
    
    // Remove item from cart using unique id
    removeFromCart: (id) => set((state) => (
    {
        cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
    
    // Clear the cart
    clearCart: () => set({ cartItems: [] }),
    
    // Update item count using unique id
    updateItemCount: (id, newCount) => set((state) => (
    {
        cartItems: state.cartItems.map((item) => item.id === id ? { ...item, count: newCount } : item),
    })),
}),
{
    name: 'cart-storage', 
    getStorage: () => localStorage
}));


export const usePriceStore = create((set) => ({
    finaltotalPrice: 0,  // 총 가격을 관리하는 상태
    addToTotalPrice: (price) => set((state) => ({
        finaltotalPrice: state.finaltotalPrice + price  // 가격을 더함
    })),
    subtractFromTotalPrice: (price) => set((state) => ({
        finaltotalPrice: state.finaltotalPrice - price  // 가격을 뺌
    })),
    clearTotalPrice: () => set(() => ({ finaltotalPrice: 0 })), // 총 가격 초기화
    setTotalPrice: (price) => set(() => ({ finaltotalPrice: price }))// 총 가격을 매개변수로 설정
  }));