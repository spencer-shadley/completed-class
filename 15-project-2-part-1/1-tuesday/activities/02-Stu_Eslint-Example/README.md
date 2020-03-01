# Eslint Example

In this example we will setup ESLint.

## Instructions

- Install the [VS Code Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

- Open the [Unsolved](Unsolved) directory and run `npm install` from your terminal to install dependencies.

- Delete each comment disabling a rule at the top of the file

  - If the above setup was correct you should start seeing red squiggles each time you delete a comment

### Bonus

- Run `npm run lint`

- Setup `eslint` to automatically fix all issues on save

- add a `.eslintignore` to exclude some files ([example](../../../../14-full-stack/.eslintignore))

- Try changing the quote style to enforce single-quotes instead of double-quotes.

- Try switching to the more complete eslint rules used in the previous unit [here](../../../../14-full-stack/.eslintrc.json)

  - Experiment with breaking and fixing rules

### Hints

- If you're unsure about what an eslint rule is asking for, type it into Google for examples.

- [tutorial](https://scotch.io/tutorials/linting-and-formatting-with-eslint-in-vs-code)
