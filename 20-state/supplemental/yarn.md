# Yarn

## About

Yarn is a package manager which improves on npm, created by a combination of companies like Facebook and Google. It still uses a `package.json`, `node_modules`, etc. but builds in extra features such as generating a `yarn.lock`.

Many features of `yarn` have been being added to `npm`.

## Why yarn over npm

- Yarn is faster

  - it caches each package it downloads

  - parallelizes downloads

- security

  - additional security by generating checksums to verify integrity of installed package. This will ensure that the module has not been modified.

- reliable

  - generates a `yarn.lock` to ensure installs run the same regardless of system or install order

  - works offline by utilizing its cache

  - download requests are retried upon failure

- flexible

  - supports registries other than `NpmJS`

- avoids duplicate dependencies

  - flat dependency structure (instead of nested dependency structure) avoids duplicate dependencies and minimizes conflicts

## Setup

- Install yarn

  `npm install -g yarn`

- Create a `package.json`

  `yarn init`

- Add dependencies

  `yarn add [package]`

## yarn commands

| Yarn                            | about                                                                        | npm                                     |
| ------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| `yarn init`                     | interactively creates or updates a package.json file                         | `npm init`                              |
| `yarn` or `yarn install`        | installs all dependencies from `package.json`                                | `npm install`                           |
| `yarn add [package]`            | add a new package as a regular dependency                                    | `npm install [package] --save`          |
| `yarn add [package] --dev`      | add a new package as a peer dependency                                       | `npm install [package] --save-dev`      |
| `yarn add [package] --peer`     | add a new package as a peer dependency                                       | N/A                                     |
| `yarn add [package] --optional` | add a new package as an optional dependency                                  | `npm install [package] --save-optional` |
| `yarn add [package] --exact`    | add a new package using an exact version                                     | `npm install [package] --save-exact`    |
| `yarn add [package] --tilde`    | add a new package with an approximate version (matches latest patch version) | N/A                                     |
| `yarn global add [package]`     | install a package globally                                                   | `npm install [package] --global`        |
| `yarn global upgrade`           | updates packages to their latest version based on specified version range    | `npm update --global`                   |
| `yarn remove [package]`         | uninstalls and removes a package from `package.json`                         | `npm uninstall [package]`               |
| `yarn link`                     | create a symlink use a local module instead of `node_modules`                | `npm link`                              |
| `yarn unlink`                   | remove the symlink for a local module                                        | `npm unlink`                            |
| `yarn cache clean [package]`    | clears cache for [package]                                                   | `npm cache clean`                       |
| `yarn upgrade`                  | upgrades packages to their latest version based on the specified range       | `rm -rf node_modules && npm install`    |

## Resources

- https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm
