import { defineStore } from 'pinia'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),

  persist: import.meta.client
  ? {
      storage: localStorage
    }
  : false,

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  },

  actions: {
    // Dodawanie do koszyka
    addToCart(product: Omit<CartItem, 'quantity'>) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    // Odejmowanie z koszyka
    removeOneFromCart(productId: number) {
      const item = this.items.find((item) => item.id === productId)
      if (!item) return
      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(productId)
      }
    },

    // Całkowite usunięcie
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId)
    },

    // Czy produkt już w koszyku
    isInCart(productId: number) {
      return this.items.some((item) => item.id === productId)
    }
  }
})
