import { useState } from 'react';
import PersistHook from 'persist-hook';

import { initialText } from './InitialText.js';
const config = { key: '$$editor_text' };
const usePersistText = (initialValue = initialText) => {
  const { setPersist, getPersist } = PersistHook(config);
  const [state, setState] = useState(getPersist(initialValue));
  setPersist(state); // it will synchronize state and localstorage
  return [state, setState];
};
export default usePersistText;
