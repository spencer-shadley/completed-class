# Bash / Terminal Commands

These are the basic commands for navigating directories in a Terminal or Git Bash window

## View information about a directory or file

### Print the current (working) directory

`pwd`

### List directories and files in the current directory

`ls`

### List directories and all files (INCLUDING HIDDEN) files in the current directory

`ls -a`

### Print contents of a file

`cat <path/to/filename>`

## Moving in directories

### Change directory

`cd <path/to/desired/directory>` (changes directory to `path/to/desired/directory`)

### Change to home directory

`cd ~`

### Move one directory up

`cd ..`

## File and directory manipulations

### Make a new file

`touch <my-cool-new-filename>`

### Make a new directory

`mkdir <my-cool-new-directory>`

### Delete a file

`rm <name-of-file-to-delete>`

### Delete a directory

`rmdir <name-of-directory-to-delete>`

(alternative command)

`rm -r <name-of-directory-to-delete>`

### Delete a NON-EMPTY directory

`rmdir -r <name-of-directory-to-delete>`

### Copy a file

`cp <filename-to-copy> <filename-to-copy-to>`

### Move or rename a file

`mv <filename-source> <filename-destination>`

## Open files and directories

### Open file or directory in Visual Studio Code

`code <FILE-OR-DIRECTORY>`

### Windows

#### Open the current directory in Windows Explorer

`explorer .`

#### Open a file

`<name-of-file-to-open>`

(alternative)

`explorer <name-of-file-to-open>`

### Mac

#### Open the current directory

`open .`

#### Open a file

`open <name-of-file-to-open>`

## Extras

* Press `tab` key once to autocomplete once you have typed a unique portion of a file name. 

* `.` is an alias for the current directory's path

* `..` is an alias for the parent directory's path

* `~` is an alias for your home directory

* Pressing `ctrl+C` while something is running in the terminal will stop whatever is running

* `up_arrow` cycles through previous commands

* `../..` contentates directories (ex. `cd ../../..` to move up three directories)
