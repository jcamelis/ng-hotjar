
# Clean up previous distributions

rm -rf dist
rm -rf build

# Variable pointing to Angular Compiler

NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
$NGC -p src/tsconfig-build.json
# Rollup simple-ui-lib.js
$ROLLUP build/ng-hotjar.js -o dist/ng-hotjar.js

# Repeat the process for es5 version
$NGC -p src/tsconfig-es5.json

$ROLLUP build/ng-hotjar.js -o dist/ng-hotjar.es5.js

# Copy non-js files from build
rsync -a --exclude=*.js build/ dist

# Copy library package.json and README.md
cp src/package.json dist/package.json
cp README.md dist/README.md
