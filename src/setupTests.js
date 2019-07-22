import '@testing-library/react/cleanup-after-each';
global.document.body.createTextRange = () => {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {}
  };
};