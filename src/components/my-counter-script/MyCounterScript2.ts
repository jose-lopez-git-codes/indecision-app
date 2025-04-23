import { userCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = userCounter(props.value);
    return {
      counter,
      squareCounter,
    };
  },
});
