import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'nonaction';
import { TextContainer } from '../../Container';
import Markdown from './index.js';
// afterEach(cleanup);
// duplicate of setupTests.js
test('<Markdown /> Previewer lazy load should work', async () => {
  const { container } = render(
    <Provider inject={[TextContainer]}>
      <Markdown />
    </Provider>
  );
  const Previewer = await waitForElementToBeRemoved(() =>
    container.querySelector('#suspense-loading')
  );
  // Test Lazy load component using `waitforElement`!
  // const Content = Previewer.querySelector('span');
  expect(Previewer.textContent !== '').toEqual(true);
  //Test Lazy load
});

// const Editor = container.querySelector('.CodeMirror');
// Editor.CodeMirror.setValue should make editor change.

// Cause jest dom did not have createTextRange(maybe codemirror fallback IE API)
// so, we could not test for codemirror (like. setValue)...
// bellow is the exception message when codemirror onChange trigger
// TypeError: range(...).getClientRects is not a function
