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
  
    // Add item to cart
    addToCart: (item) => set((state) => (
    {
        cartItems: [...state.cartItems, item],
    })),
  
    // Remove item from cart
    removeFromCart: (menuCode) => set((state) => (
    {
        cartItems: state.cartItems.filter((item) => item.menuCode !== menuCode),
    })),
  
    // Clear the cart
    clearCart: () => set({ cartItems: [] }),
  
    // Update item count
    updateItemCount: (menuCode, newCount) => set((state) => (
    {
        cartItems: state.cartItems.map((item) => item.menuCode === menuCode ? { ...item, count: newCount } : item),
    })),
})));