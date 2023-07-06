#!/bin/sh
rm -r build >> /dev/null
/usr/local/bin/npm i react-scripts
/usr/local/bin/npm run build
exit 0