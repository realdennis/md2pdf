import 'react-testing-library/cleanup-after-each';
global.document.body.createTextRange = () => {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {}
  };
};