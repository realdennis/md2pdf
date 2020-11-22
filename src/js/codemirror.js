import "@vanillawc/wc-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/darcula.css";
import "codemirror/mode/gfm/gfm.js";

// In case we can not pass options in html
// Hard coding pass here
import {codemirrorComponent} from './utils/elements'
codemirrorComponent.editor.setOption("lineWrapping", true);
