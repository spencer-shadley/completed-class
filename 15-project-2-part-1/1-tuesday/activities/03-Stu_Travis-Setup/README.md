# Travis Setup

In this activity we will set up the project repo with Travis CI to ensure that linting passes on all changes before they can be merged into master.

## Instructions

- Only the owner of the project repo should drive this activity, other group members should navigate.

### Part 1: Protecting Master

- Before we can set up Travis, we must configure the project repo to protect the master branch

- Navigate to the repo's page, then click the "Settings" tab.

- Select "Branches" from the left sidebar.

- Under "Branch protection rules", choose "master" from the dropdown.

- Check off the following options:

  - "Protect this branch"

  - "Require pull request reviews before merging"

  - "Include administrators"

  - "Require status checks to pass before merging"

  - "Require branches to be up to date before merging"

- Click "Save changes"

### Part 2: Activate Travis on GitHub

- Navigate [here](https://github.com/marketplace/travis-ci)

- Scroll to "Pricing and setup" and choose the "Open Source" (\$0) option

- Click "Install it for free" and then on the next page click "Complete order and begin installation".

- Choose to setup with all repositories

- Click the "Install" button to complete the process.

### Part 3: Add Scripts

- Run `npm init`, if you haven't already, in your project repo

- Add a `lint` script (`"lint": "eslint . ./**/*.js"`)

- Add a `test` script (`"test": "jest"`)

  - Add `jest` as a dependency

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

### Part 4: Add Travis to your Project 2 Repo

- Create a `.travis.yml` file on the root of your repo

  - This will tell Travis CI what you want to happen for its integration

  - Use the [.travis.yml](./.travis.yml) file as a starting point
