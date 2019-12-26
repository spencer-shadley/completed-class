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

## More Info

- https://www.atlassian.com/git/tutorials/using-branches

- https://learngitbranching.js.org/?locale=en_US

- https://rogerdudler.github.io/git-guide/

- https://thenewstack.io/dont-mess-with-the-master-working-with-branches-in-git-and-github/
