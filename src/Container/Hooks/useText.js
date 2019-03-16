import  { useState } from "react";
import { initialText } from "./InitialText.js";
const useText = (initialValue = initialText) => {
  const [state, setState] = useState(initialValue);
  return [state, setState];
};
export default useText;
