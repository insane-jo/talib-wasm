#!/bin/sh

export CFLAGS="-s SINGLE_FILE=1 -s LINKABLE=1 -s EXPORT_ALL=1 -s -s WASM=1 -O3"
export LDFLAGS="-s SINGLE_FILE=1 -s LINKABLE=1 -s EXPORT_ALL=1 -s -s WASM=1 -O3"

emcc $(find node_modules/talib/src/lib/src/ta_func/*.c) node_modules/talib/src/lib/src/ta_common/ta_global.c -Inode_modules/talib/src/lib/include/ -Inode_modules/talib/src/lib/src/ta_common/ -s SINGLE_FILE=1 -s LINKABLE=1 -s EXPORT_ALL=1 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'cwrap']" -Oz -o build/talib.html -o build/talib.js

echo "function makeModule() { " > build/talib.wrapped.js
cat ./build/talib.js >> build/talib.wrapped.js
echo ";" >> build/talib.wrapped.js
cat ./src/talib-wrap-helper.js >> build/talib.wrapped.js
echo " return Module.ready; } module.exports = makeModule;" >> build/talib.wrapped.js

node_modules/.bin/uglifyjs ./build/talib.wrapped.js -o ./build/talib.wrapped.min.js -c -m
