const postcss = require('postcss');

const getRows = str => str.match(/"[^"]*"/g);
const preformat = str => getRows(str).join('\n');

module.exports = postcss.plugin('postcss-grid-kiss-preformat', function () {
    return function (root, result) {
      root.walkDecls('grid-kiss', function (decl) {
        decl.value = preformat(decl.value);
    });
  }
});
