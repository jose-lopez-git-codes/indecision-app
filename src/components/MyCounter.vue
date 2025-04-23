<template name="component-name">
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn-increment" @click="counter++">+1</button>
      <button class="btn-decrement" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { userCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();
const { counter, squareCounter } = userCounter(props.value);
</script>

<style scoped>
@reference 'tailwindcss';
.btn-increment {
  @apply ml-2 p-2 bg-blue-500 rounded hover:bg-blue-700;
}
.btn-decrement {
  @apply ml-2 p-2 bg-red-500 rounded mr-2 hover:bg-red-700;
}
</style>
