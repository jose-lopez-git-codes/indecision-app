import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);
  test('should render input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button svg').exists()).toBeTruthy();
  });

  test('should emit sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola Mundo';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('should emit sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hola Mundo';
    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('should emit sendMessage event when keypress.enter is triggered with message value', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');
    await input.trigger('keypress.enter');
    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
