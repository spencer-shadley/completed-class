- data structures
- algorithms
- code coverage (`coveralls`)
- animations (GSAP requested)
- VS Code

  - ~~live share~~
  - extensions
    - bookmarks

- more webpack plugins

  ```js
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: "my-domain-cache-id",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
    }),
  ```
