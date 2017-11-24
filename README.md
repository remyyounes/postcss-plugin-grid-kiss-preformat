# PLUGIN_TITLE [![Build Status][ci-img]][ci]

[PostCSS] plugin that preformats the string values of grid-kiss declarations.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/GITHUB_NAME/postcss-grid-kiss-preformat.svg
[ci]:      https://travis-ci.org/GITHUB_NAME/postcss-grid-kiss-preformat

```css
.foo {
  grid-kiss: "+--150px---+  +----- auto -----+      "
"| .sidebar |  |      main      | auto " "+----------+  +----------------+      "
}
```

```css
.foo {
  /* Output example */
  grid-kiss:
"+--150px---+  +----- auto -----+      "
"| .sidebar |  |      main      | auto "
"+----------+  +----------------+      "
}
```

## Usage

```js
postcss([
  require('postcss-grid-kiss'),
  require('postcss-grid-kiss-preformat')
])
```

See [PostCSS] docs for examples for your environment.
