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

