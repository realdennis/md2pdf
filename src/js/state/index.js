import currentTextTask from "./tasks/currentText";
window.md2pdf = {
  state: {},
};
window.md2pdf.state = new Proxy(
  {},
  {
    set(obj, prop, value) {
      switch (prop) {
        case "currentText":
          currentTextTask(obj, prop, value);
        // Update the previewer here

        default:
          break;
      }

      obj[prop] = value;
      return true;
    },
  }
);
export default window.md2pdf.state;
