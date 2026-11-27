import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import contextCursor from "../libs/context-cursor/contextCursor";

// context-cursor animates with TweenLite, which needs CSSPlugin to move DOM
// elements. gsap registers it as a side effect of its main entry, but declares
// "sideEffects": false, so Vite 8 tree-shakes the registration away.
gsap.registerPlugin(CSSPlugin);

var mq = window.matchMedia("(min-width: 640px)");
if (mq.matches) {
  contextCursor({
    radius: 25,
  });
}
