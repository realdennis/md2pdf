import React from 'react';
import uploadFile from '../../Lib/uploadFile.js';

export default props => {
  const onChange = e => {
    const files = e.currentTarget.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = loadEvent => { 
        if (loadEvent.target.readyState !== 2) return;
        if (loadEvent.target.error) {
          alert('Error while reading file');
          return;
        }
        const content = loadEvent.target.result;
        uploadFile(content);
      };
      reader.readAsText(e.target.files[0]);
    }
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
