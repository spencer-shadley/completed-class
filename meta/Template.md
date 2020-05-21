# <center> Homework

## Great Students:

---

## -

-

## Great work on this application

---

- Application fully uploaded to GitHub and deployed via Heroku.
- Application is fully functional.
- The code is generally clean.
- Repository contains proper folder/file structure including a `package.json` / .`.gitignore` / and NO `node_modules`.
- Clear and concise README.
- Overall aesthetic looks very clean and polished.
- Included `alt` attribute for greater accessibility.

### Changes

---

** Node Modules **

- Your repository should NOT include node_modules. This should be prevented using a .gitignore file in main.

** Package.json **

- Your application is missing a package.json file. This is important because it lists the dependency and dev-dependencies required for the application.
- Remember to always create a package.json by running `npm init`.
- With a package.json file, a person can clone your repository and just run npm i to load all necessary npm.
- Without, the person needs to look at each individual dependency and install it manually. (This results in a frustrated TA)

** Console.log **

- The console log should be used to debug and test your code as you progress.
- When you are ready to commit your work it's best to delete them from your project or, if they have longer term value, wrap them behind a debugging condition.

** README **

- The `README` should always be all uppercase
- Your `README` references a file that does not exist. The `README` is the most exposed part of the code so it's important to make sure that it does not have any errors.
- Your `README` could be a more descriptive. It may not seem important in these simple early projects, but will grow in importance as the complexity of your project grows.
- Instilling good habits early is key.
- [README](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

** Hungarian Notation **

- Opinion: Naming variables based on their underlying type is often considered an anti-pattern. There are differing opinions on this preference but it should generally be avoided unless there is a special case in your code that merits the name.

** Commented out Code **

- Before committing code make sure you remove all commented out code. We try to optimize code readability as much as possible because code tends to be "write a few times, read a hundred times". These commented out lines of code distract from reading the real code.

** File Naming Conventions **

- There is a mix of camelCase, hyphen-case and snake_case in the files. Consistency is important for readability and predictability, particularly as the project grows larger.

** Script Ordering **

- To optimize the speed in which your page is able to display _something_ any `script` includes in your HTML should be placed at the end of your `<body>`.

** Image Include **

- The image referenced has the data of the image placed inline. This may prevent caching the image and makes reading the code distracting because so much of the file becomes the contents of the image. Instead, it is a best practice to reference an image file.

** Indentation **

- Some indentation was not correctly aligned. Adding a beatifier like `prettier` or a linter like `eslint` can help prevent any potential indentation issues.

** Errors **

- When loading the page there are a number of errors. It's important to always have your `console` open while developing to quickly detect when things aren't working.
  - `/favicon.ico:1 Failed to load resource: the server responded with a status of 404 (Not Found)`
    - This is because a `favicon` (the icon displayed in the tab) is expected at the root of your `public` repo. [More info](https://www.w3.org/2005/10/howto-favicon).

** Fit and Finish **

- There are a few fit-and-finish type things that could be added to make this an even more polished app. For example, on the signup page the "Phone" option could have a `type` of `tel` ([more info](https://www.w3schools.com/tags/att_input_type_tel.asp)).

** Structure **

- The code is very well structured and organized. For example, every component is in its own directory with a `js` and `css` file for that specific component. The backend and frontend have clear separation and it's all easy to navigate.

** UML **

Nice job including a UML diagram in your README! This helps people more quickly understand your code architecture at a high level and shows that you truly thought about how each piece fits together.

** PWA **

- It's great that you got a full PWA working! I'm able to install it and it works offline! This demonstrates a great understanding of those pieces and is a nice thing to add to your resume and gives you more talking points when discussing this.

---

# Commands to get stats

- `git shortlog -s -n --all --no-merges`

  - Number of commits by each author

- `git rev-list HEAD --count`

  - Total number of commits

- `git ls-files | xargs -n1 git blame --line-porcelain | sed -n 's/^author //p' | sort -f | uniq -ic | sort -nr`

  - Number of lines of code by each author

- `git ls-files | xargs cat | wc -l`

  - Total number of lines of code
