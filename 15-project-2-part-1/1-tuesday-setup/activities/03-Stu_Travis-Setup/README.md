# Travis Setup

In this activity we will set up the project repo with Travis CI to ensure that linting passes on all changes before they can be merged into master.

## Instructions

- Only the owner of the project repo should drive this activity, other group members should navigate.

### Part 1: Protecting Master

- Before we can set up Travis, we must configure the project repo to protect the master branch

- Navigate to the repo's page, then click the "Settings" tab.

- Select "Branches" from the left sidebar

  - If you do not see "Branches", clone your repo, make a change (such as adding a README) and then push

- Click "Add rule"

  - Branch name pattern: master

  - check "Require pull request reviews before merging"

    - Check "Require review from Code Owners"

  - Check "Require status checks to pass before merging"

    - Check "Require branches to be up to date before merging"

  - Check "Include adminstrators"

  - "Save"

### Part 2: Activate Travis on GitHub

- Navigate [here](https://github.com/marketplace/travis-ci)

- Scroll to "Pricing and setup" and choose the "Open Source" (\$0) option

- Click "Install it for free" and then on the next page click "Complete order and begin installation".

- Choose to setup with all repositories

- Click the "Install" button to complete the process.

### Part 3: Add Scripts

Hint: Example repo [here](https://github.com/spencer-shadley/test-travis)

- Run `npm init`, if you haven't already, in your project repo

- Add `node_modules` to your `.gitignore`

- Add a `lint` script

  - install `eslint` as a dev-dependency

  - add a `.eslintrc` file to your repo with several rules

  - add a `.eslintignore` file with the contents as `node_modules` to exclude running the linter on modules

  - update `package.json` to include the `script` `"lint": "eslint . ./**/*.js"`

- Setup `jest`

  - Update your `test` script to `jest`

  - Add `jest` as a dev-dependency

  - Add a `test/foo.test.js` file which runs a test, feel free to copy/paste the below

    ```js
    describe(`jest test`, () => {
      it(`should pass`, () => {
        expect(1 + 2).toEqual(3);
      });

      it('should fail', () => {
        expect('1' + '1').toEqual(2);
      });
    });
    ```

  - hint: look at any preclass drill for examples of working `jest` scripts

### Part 4: Add Travis to your Project 2 Repo

- Create a `.travis.yml` file on the root of your repo

  - This will tell Travis CI what you want to happen for its integration

  - [example](https://github.com/spencer-shadley/test-travis/blob/master/.travis.yml)

### Part 5: Test out a Pull Request

- Create a new branch

- Ensure at least one test is failing and your linter is failing

- Make a pull request

- This should fail and you can see the output at https://travis-ci.com (specifically, https://travis-ci.com/username/branch-name)

  - [Example failing PR](https://github.com/spencer-shadley/test-travis/pull/1)

    - Details on why the above failed can be found [here](https://travis-ci.com/spencer-shadley/test-travis/builds/151279919)

- Fix the errors

- Have someone approve the Pull Request

- Merge!

### Part 6: Start Brainstorming!

- Once complete, begin activity [04-brainstorm](../04-brainstorm/README.md)
