import throttle from "lodash-es/throttle";
import { viewerEl } from "../../utils/elements";

const currentTextTask = (_obj, _prop, value) => {
  console.log(0);
  viewerEl.innerHTML = value;
};

// Using throttle
export default throttle(currentTextTask, 50);
