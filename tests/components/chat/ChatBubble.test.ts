import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble />', () => {
  test('should render own message correctly', () => {
    const message = 'Hola Mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('should render received message correctly', () => {
    const message = 'Hola Mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBeFalsy();
  });

  test('should render received message correctly with image', () => {
    const message = 'Hola Mundo';
    const image = 'http://example.jpg';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
