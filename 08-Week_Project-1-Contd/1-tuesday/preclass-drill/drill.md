# git branch

Create a new "branch" with git! This is a powerful tool in git.

This drill will be reviewed at the beginning of class (not before class.)

## Instructions

- In your terminal navigate to a `git` repository

- Check what branch you're on (`git branch`) (should be "master")

- Create a new branch (`git checkout -b my-cool-new-branch`) (the `-b` is a flag that creates a new branch)

- Check what branch you're on (`git branch`) (should be "my-cool-new-branch")

- Make a change (modify a file, create a file, etc.)

- Commit your change (`git status`, `git add -A`, `git commit -m "made a change on my new branch"`)

- Change your branch back to master (`git checkout master`)

- Look for your changes - they should be gone!

- Change your branch back to your new branch (`git checkout my-cool-new-branch`)

- Look for your changes - they should be back!

- Change back to master (`git checkout master`)

- "merge" your changes into master (`git merge my-cool-new-branch`)

- Check that your changes made it into master and then commit (`git status`, `git add -A`, `git commit -m "merged my-cool-new-branch"`)

- Delete "my-cool-new-branch" (`git branch -d my-cool-new-branch`)

- `git push` (remember, everything so far has been local since we haven't pushed anything)

## Command Cheatsheet

- `git branch` - check the current branch

- `git checkout <branch-name>` - switch to branch-name

- `git checkout -b <branch-name>` - create and then switch to branch-name

- `git merge <branch-name>` - merge the changes from "branch-name" into the current branch

- `git branch -d <branch-name>` - delete "branch-name"

## Resources

| Site                                                                                                                     | Description                                                                |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [git overview](https://rogerdudler.github.io/git-guide/)                                                                 | The basics of git                                                          |
| [Use cases for git branching](https://thenewstack.io/dont-mess-with-the-master-working-with-branches-in-git-and-github/) | As always W3Schools has just about the best tutorial for a web technology. |
| [Atlassian git branch tutorial](https://www.atlassian.com/git/tutorials/using-branches)                                  | An overview of git branch and commands                                     |
| [Interactive git branch tutorial](https://learngitbranching.js.org/?locale=en_US)                                        | An interactive terminal to try out git commands                            |
