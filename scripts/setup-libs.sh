#!/bin/bash
LIBS_DIR="src/libs"
CONTEXT_CURSOR_DIR="$LIBS_DIR/context-cursor"

if [ ! -d "$CONTEXT_CURSOR_DIR" ]; then
  echo "Cloning context-cursor..."
  mkdir -p "$LIBS_DIR"
  git clone https://github.com/PavelLaptev/context-cursor.git "$CONTEXT_CURSOR_DIR"
fi
