# Setup prettier

- Install the "Prettier" Visual Studio Code extension with millions of downloads
- Navigate to the GitLab repo root directory in your terminal and run `npm install`
- Open your VS Code settings JSON and add:
  ```js
  "editor.formatOnSave": true,
  "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
        "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
  ```

# Write the below function

Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

Ex:
Input: "noon"
Output: true

Input: "horse"
Output: false

Input: "racecar"
Output: true
