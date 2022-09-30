import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
// import Currency from '../interfaces/currency';

export const useMainStore = defineStore('main', {
  state: () => ({
    key: '',
    currencies: [],
  }),
  getters: {
    getKey: (state) => state.key,
    getCurrencies: (state) => state.currencies,
  },
  actions: {
    setKey(potentialKey: string) {
      this.key = potentialKey;
    },
    clearKey() {
      this.key = '';
    },
    setCurrencies(newCurrencies: any) {
      this.currencies = newCurrencies;
    },
  },
});
