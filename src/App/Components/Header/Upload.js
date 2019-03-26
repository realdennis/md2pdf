import React from 'react';
import useEventTarget from 'use-event-target';
import { useProvided } from 'nonaction';
import { FileTextContainer } from '../../Container';

const useReader = useEventTarget(new FileReader());

export default props => {
  const [, setFileText] = useProvided(FileTextContainer);
  const [reader] = useReader('load', evt => {
    if (evt.target.readyState !== 2) return;
    if (evt.target.error) {
      alert('Error while reading file');
      return;
    }
    const content = evt.target.result;
    setFileText(content);
  });
  const onChange = e => {
    const files = e.currentTarget.files;
    files.length > 0 && reader.readAsText(files[0]);
  };
  return (
    <p {...props} style={{ position: 'relative' }}>
      <input
        id="mdFile"
        type="file"
        style={{ display: 'none' }}
        onChange={onChange}
        accept=".md"
      />
      <label
        htmlFor="mdFile"
        style={{
          position: 'absolute',
          opacity: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          cursor: 'pointer'
        }}
      />
      <span role="img" aria-label="upload">
        📁
      </span>
      <span>Choose</span>
    </p>
  );
};
