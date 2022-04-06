const esbuild = require("esbuild");
const path = require("path");

const pkg = require(path.join(path.resolve("./"), `package.json`));

// bundle, but set dependencies as external
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const banner = {
  js: `/**
 * @name ${pkg.name}
 * @fileoverview ${pkg.description}
 * @version ${pkg.version}
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/${pkg.name}/}
 */
`,
};

// ESM
esbuild.buildSync({
  entryPoints: [path.join(path.resolve("./"), "src/main.ts")],
  platform: "node",
  format: "esm",
  bundle: true,
  define: { DEV: !!process.env.DEV },
  minify: !process.env.DEV,
  sourcemap: false,
  target: ["esnext"],
  outfile: path.join(path.resolve("./"), `dist/${pkg.name}.esm.js`),
  // pure,
  banner,
  external,
});

// CJS
esbuild.buildSync({
  entryPoints: [path.join(path.resolve("./"), "src/main.ts")],
  platform: "node",
  format: "cjs",
  bundle: true,
  define: { DEV: !!process.env.DEV },
  minify: !process.env.DEV,
  sourcemap: false,
  target: ["esnext"],
  outfile: path.join(path.resolve("./"), `dist/${pkg.name}.cjs.js`),
  // pure,
  banner,
  external,
});
