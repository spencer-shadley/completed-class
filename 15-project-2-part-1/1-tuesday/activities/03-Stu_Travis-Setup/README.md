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

### Part 2: Add Travis

- Navigate to <https://github.com/marketplace/travis-ci>.

- Scroll to "Pricing and setup" and choose the "Open Source" (\$0) option

- Click "Install it for free" and then on the next page click "Complete order and begin installation".

- Choose to setup with all repositories

- Click the "Install" button to complete the process.
