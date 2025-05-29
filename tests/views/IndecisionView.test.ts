import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages</div>',
};

describe('<IndecisionView />', () => {
  test('should render ChatMessages and MessageBox correctly', () => {
    const wrapper = mount(IndecisionView);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(ChatMessages).exists()).toBeTruthy();
    expect(wrapper.findComponent(MessageBox).exists()).toBeTruthy();
  });

  test('should call onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });
    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('sendMessage', 'Hola Mundo');
    await new Promise((r) => setTimeout(r, 150));
    expect(wrapper.html()).toMatchSnapshot();
  });
});
