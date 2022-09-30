<script setup lang="ts">
import { ref, watch } from 'vue';
import { request, generateRequest } from '../services/axiosService';
// The currency code used here is passed via props
const props = defineProps<{ currencyCode: string }>();
// Rate is a ref for reactivity
const rate = ref(0.0);

// When the props for this component (intended currency code) get modified,
// a request needs to be made for the information necessary to display in this component:
watch(props, async (newProps) => {
  const requestGet = generateRequest('get', '/latest.json', {
    base: 'USD',
    symbols: newProps.currencyCode,
    show_alternative: 'false',
  });
  await request(requestGet).then((response) => {
    rate.value = response.data.rates[newProps.currencyCode];
  });
});
</script>

<template>
  <div id="currency-conversion-rate">
    <div id="currency-conversion-title">$1 USD is equal to:</div>
    <div id="currency-conversion-rate" v-if="currencyCode.length > 0">
      {{ rate }} {{ currencyCode }}
    </div>
  </div>
</template>

<style>
#currency-conversion-title {
  margin: auto;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  text-decoration: overline underline;
  font-style: italic;
  letter-spacing: 2px;
  font-size: 2rem;
  padding-bottom: 2rem;
}
#currency-conversion-rate {
  color: var(--vt-c-indigo);
  font-size: 1rem;
}
</style>
