import { computed, ref } from 'vue';

export const userCounter = (initialValue: number) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    squareCounter,
  };
};
