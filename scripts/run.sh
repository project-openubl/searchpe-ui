#!/bin/bash
DIR="$PWD"
PARENT_DIR="$(dirname -- "$DIR")"
echo "$PARENT_DIR"

echo "==============================================================================="
echo "Start you project using:"
echo "$ yarn start"
echo "Open your brower in https://ci.foo.redhat.com:1337/insights/starter/samplepage"
echo "==============================================================================="

# insights-proxy (you should run the command inside the insights-proxy directory)
SPANDX_CONFIG=./profiles/local-frontend.js bash $PARENT_DIR/insights-proxy/scripts/run.sh
