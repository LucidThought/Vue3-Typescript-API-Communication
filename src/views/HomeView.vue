<script setup lang="ts">
import { useMainStore } from '../stores/store';
import { ref } from 'vue';
import ConversionRate from '../components/ConversionRate.vue';

const mainStore = useMainStore();
// Retrieve the list of currencies from the store
const currencies: { code: string; name: string }[] = mainStore.getCurrencies;
const selectedCurrency = ref('');
// When the select value changes, set the ref for use in the component
function currencyChosen(event: any) {
  selectedCurrency.value = event.target.value;
}
</script>

<template>
  <div id="home">
    Currency Conversion Rates
    <div id="country-dropdown">
      <select
        id="country-codes"
        v-if="currencies.length > 0"
        @change="currencyChosen($event)"
      >
        <option :value="null" disabled selected>Select a currency</option>
        <option v-for="curr in currencies" :value="curr.code">
          {{ curr.name }}
        </option>
      </select>
      <hr class="mini-hr" />
      <div>
        <ConversionRate :currency-code="selectedCurrency" />
      </div>
    </div>
  </div>
</template>

<style>
#home {
  width: 100%;
  height: 100%;
  margin: auto;
  border: 2px solid var(--vt-c-black);
  padding: 4rem;
  border-radius: 50px;
  background-color: var(--vt-c-white);
}
</style>
