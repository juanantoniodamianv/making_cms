'use-strict';

var htmlMinifier = require('html-minifier').minify;

module.exports = {
  minify: minify
};

function minify(content) {
  return htmlMinifier(content.fn(this), {
    removeComments: true,
    collapseWhiteSpace: true,
    minifyJS: true
  });
}
