import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type Item = {
  id: number;
  title: string;
  price: number;
};
type CartStore = {
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          
          const itemExists = state.cart.some((cartItem) => cartItem.id === item.id);
          
         
          if (!itemExists) {
            toast.success('Documento adicionado ao carrinho!', {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              
              });
            return { cart: [...state.cart, item] };
          }
          toast.warn('Este já foi adicionado ao carrinho!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          
            })
         
          return state;
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "cart-storage", 
    }
  )
);
