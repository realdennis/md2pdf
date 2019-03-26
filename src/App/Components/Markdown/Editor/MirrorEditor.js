import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/gfm/gfm.js';
import { initialText } from '../../../Container/Hooks/InitialText';
const Editor = ({ className, setText }) => {
  return (
    <CodeMirror
      className={className}
      value={initialText}
      options={{
        mode: 'gfm',
        theme: 'darcula',
        lineNumbers: true,
        lineWrapping: true
      }}
      onChange={(editor, data, value) => {
        setText(value);
      }}
    />
  );
};
export default styled(Editor)`
  height: 100%;
  .CodeMirror {
    height: 100%;
    line-height: 1.5;
  }
`;
