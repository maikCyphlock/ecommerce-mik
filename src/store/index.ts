import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IProducts } from "@/interfaces";

export interface CartItem extends IProducts {
  count: number;
}

type CartStore = {
  reduceCountFromCart: any;
  cartItems: CartItem[];
  addToCart: (product: IProducts) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, count: item.count + 1 }
                  : item,
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...product, count: 1 }],
            };
          }
        });
      },
      removeFromCart: (id) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        }));
      },
      reduceCountFromCart: (id) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id && item.count > 1
              ? { ...item, count: item.count - 1 }
              : item,
          ),
        }));
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
