import React from 'react';
import {
  render,
  fireEvent,
  waitForElement
} from 'react-testing-library';
import { Provider } from 'nonaction';
import { TextContainer } from '../../Container';
import Markdown from './index.js';
// afterEach(cleanup);
// duplicate of setupTests.js 
test('<Markdown /> Editor type & previewer work', async () => {
  const { container } = render(
    <Provider inject={[TextContainer]}>
      <Markdown />
    </Provider>
  );
  const Editor = container.querySelector('textarea#editor');
  const Previewer = await waitForElement(() =>
    container.querySelector('.preview')
  );
  // Test Lazy load component using `waitforElement`!
  const Content = Previewer.querySelector('span');
  fireEvent.change(Editor, { target: { value: '# work' } });
  expect(Content.innerHTML).toEqual('<h1>work</h1>\n');
});
