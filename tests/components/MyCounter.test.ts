import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snaptshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 10,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });

  test('increments counter when +1 button is clicked ', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });

    const btnIncrement = wrapper.find('button.btn-increment');

    await btnIncrement.trigger('click');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value + 1}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${(value + 1) * (value + 1)}`,
    );
  });

  test('decrements counter when -1 button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });

    const btnDecrement = wrapper.find('button.btn-decrement');
    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value - 2}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${(value - 2) * (value - 2)}`,
    );
  });
});
