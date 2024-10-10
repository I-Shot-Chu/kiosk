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

export const useCartStore = create(persist((set, get) => (
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

    totalPrice: () =>
    {
        const { cartItems } = get();
        return cartItems.reduce((acc, menu) =>
        {
            const count = menu.count || 1; // Default count is 1 if not yet set
            const pricePerItem = menu.finalTotalPrice || menu.menuPrice || 0;
            return acc + pricePerItem * count;
        }, 0);
    },
}),
{
    name: 'cart-storage', 
    getStorage: () => localStorage
}));