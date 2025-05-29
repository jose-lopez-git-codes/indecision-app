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

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);
    return {
      counter,
      squareCounter,
    };
  },
});
</script>

<style scoped>
@reference 'tailwindcss';
.btn-increment {
  @apply ml-2 p-2 bg-green-500 rounded hover:bg-green-700;
}
.btn-decrement {
  @apply ml-2 p-2 bg-sky-500 rounded mr-2 hover:bg-sky-700;
}
</style>
