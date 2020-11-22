import "@vanillawc/wc-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/darcula.css";
import "codemirror/mode/gfm/gfm.js";
import { codemirrorComponent } from "./utils/elements";
import globalState from "./state/index";
// In case we can not pass options in html
// Hard coding pass here
codemirrorComponent.editor.setOption("lineWrapping", true);

// Listen codemirror change and pass value to state.
codemirrorComponent.editor.on("change", (cm) => {
  const value = cm.getValue();
  globalState.currentText = value;
});
