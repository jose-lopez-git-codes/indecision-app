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

<script lang="ts" src="./MyCounterScript2"></script>

<style scoped>
@reference 'tailwindcss';
.btn-increment {
  @apply ml-2 p-2 bg-yellow-500 rounded hover:bg-yellow-700;
}
.btn-decrement {
  @apply ml-2 p-2 bg-orange-500 rounded mr-2 hover:bg-orange-700;
}
</style>
