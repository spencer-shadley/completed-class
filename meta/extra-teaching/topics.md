# General

- ~~code coverage (`coveralls`)~~
- ~~animations (GSAP requested)~~
- VS Code

  - ~~live share~~

  - more webpack plugins
  - extensions
    - bookmarks

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

- ~~pure functions (from 18.3.19)~~

  ```md
  - skip pure functions if short on time

  - pure functions

    - `src/calculations.js`

    - this is considered pure because it does not mutate the input or produce side effects (update a db, change the DOM, etc.)

    - use pure functions wherever possible

  - impure functions have side effects and tend to be less straightforward, harder to reason about and more difficult to test

    - `app.js` `submit` is impure

      - it updates the DOM - a side effect
  ```

- ~~Service worker notifications~~

  - https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications

- ~~serving a site on https~~

- ~~concurrency - 18-pwa\supplemental\service-workers.md~~

- ~~yarn~~

- 20.1 has several bonus things for hooks

- RTL

- Enzyme

- reviews - https://github.com/coding-boot-camp/checkpoint-bank/tree/master/checkpoints

- unit 22.3 bonus lectures

  - ~~big o~~

  - ~~data structures~~

  - ~~lodash~~

# Computer Science

- ~~data structures~~

- ~~algorithms~~

- ~~greedy algorithms~~

  - ~~fractional knapsack problem~~

- https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/

- HashSet

- HashTable

- ~~Set~~

- Sliding window

- ~~Divide and conquer~~

- ~~Backtracking~~

- Dijkstra

- Prim

- A\*
