# Self-Closing Tags

* What is a self-closing tag?

Tags which do not require a closing / inside the tag but it can be preferable to add it, as some frameworks require it.

* Give examples of self-closing tags.

    * `<br/>`
    * `<hr/>`
    * `<img/>`
    * `<meta/>`
    * `<link/>`
    * `<input/>`

* What differentiates these elements from others?

Self-closing tags are used for what are called void elements like horizontal rules and line breaks. These are called void elements because they inherently cannot have content. There is no way to add text to a line break, so there is no need for an opening and closing set of tags. Similarly, you can't add text to a horizontal rule, so there is no need for an opening and closing set of tags. In general, any tag that can't hold text can be self-closing.

TL;DR - They can't contain additional content.

# What are common git commands and common git workflows?

## Commands

* `git clone <link>` - The initial command needed to reference a "remote" repository. To use git you must be inside of a git directory so a common next step is to `cd` into that generated directory.
* `git status` - See the current state of your local git repository. Do you have changes staged? Do you need to commit? etc. Run this all the time, between pretty much every git command.
* `git add -A` - This "stages" all of your changes. This marks each file you have modified as being one that you would like to be included in your changeset. Alternatively you can use `git add <filename>` to add only a specific file.
* `git commit -m "my cool message"` - This "commits" to a new version of the codebase. It is your statement that everything has been staged correctly and the current set of files should be considered a new version of the code.
* `git push` - This takes your local code versions and uploads it to your tracked remote repository in GitHub, GitLab, etc.
* `git pull` - This downloads any new changes from the remote repository.

## Flow

### First change

1. Clone a remote repository
2. Make changes
3. Stage each change you make and want considered for a new version
4. Commit to a new version of the code base
5. Push your changes

### Subsequent changes

1. `git pull`
2. \<make changes\>
3. `git add -A`
4. `git commit -m "my cool message"`
5. `git push`
