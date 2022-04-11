# tsd-extract-noesm

> Extract any definition from TS definitions file

<div class="package-badges">
  <a href="https://www.npmjs.com/package/tsd-extract-noesm" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-npm-blue?style=flat-square" alt="page on npm">
  </a>
  <a href="https://codsen.com/os/tsd-extract-noesm" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-codsen-blue?style=flat-square" alt="page on codsen.com">
  </a>
  <a href="https://github.com/codsen/codsen/tree/main/packages/tsd-extract-noesm" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-github-blue?style=flat-square" alt="page on github">
  </a>
  <a href="https://npmcharts.com/compare/tsd-extract-noesm?interval=30" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/npm/dm/tsd-extract-noesm.svg?style=flat-square" alt="Downloads per month">
  </a>
  <a href="https://prettier.io" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg?style=flat-square" alt="Code style: prettier">
  </a>
  <img src="https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
  <a href="https://liberamanifesto.com" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/badge/libera-manifesto-lightgrey.svg?style=flat-square" alt="libera manifesto">
  </a>
</div>

## Install

This program is not pure-ESM. For pure-ESM, use [`tsd-extract`](https://www.npmjs.com/package/tsd-extract) instead. Both have the same API and the same features.

```bash
npm i tsd-extract-noesm
```

## Quick Take

```js
import { strict as assert } from "assert";
import { extract } from "tsd-extract-noesm";

const { value } = extract(
  `interface Opts1 { foo: boolean };
interface Opts2 { bar: boolean };`,
  "Opts2"
);

assert.equal(value, "interface Opts2 { bar: boolean };");
```

## Documentation

This is a clone of [`tsd-extract`](https://www.npmjs.com/package/tsd-extract) but in non-ESM configuration.

We needed it because [`mdx-bundler`](https://www.npmjs.com/package/mdx-bundler) (as of v9) uses [`@esbuild-plugins/node-resolve`](https://www.npmjs.com/package/@esbuild-plugins/node-resolve) which in turn, uses [`resolve`](https://www.npmjs.com/package/resolve) which does not support ESM packages which have `exports` pointing to anything else than `index.js`.

Please [visit codsen.com](https://codsen.com/os/tsd-extract-noesm/) for a full description of the API.

## Contributing

To report bugs or request features or assistance, [raise an issue](https://github.com/codsen/codsen/issues/new/choose) on GitHub.

## Licence

MIT License

Copyright (c) 2010-2022 Roy Revelt and other contributors

<img src="https://codsen.com/images/png-codsen-ok.png" width="98" alt="ok" align="center"> <img src="https://codsen.com/images/png-codsen-1.png" width="148" alt="codsen" align="center"> <img src="https://codsen.com/images/png-codsen-star-small.png" width="32" alt="star" align="center">
