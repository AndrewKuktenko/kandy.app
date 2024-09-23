import contextCursor from "../libs/context-cursor/contextCursor";

var mq = window.matchMedia("(min-width: 640px)");
if (mq.matches) {
  contextCursor({
    radius: 25,
  });
}
