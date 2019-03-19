import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'nonaction';
import { TextContainer } from '../../Container';
import Markdown from './index.js';
describe('<Markdown />', () => {
  it('Editor type & preview work', () => {
    const wrapper = mount(
      <Provider inject={[TextContainer]}>
        <Markdown />
      </Provider>
    );
    wrapper
      .find('.editor')
      .find('textarea')
      .simulate('change', { target: { value: '# work' } });
    expect(
      wrapper
        .find('.preview')
        .find('span')
        .props()
        .dangerouslySetInnerHTML.__html
    ).toEqual('<h1>work</h1>\n');
  });
});
