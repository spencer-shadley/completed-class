# Inquirer Users

In this activity, you will build a simple command line application that accepts user input and writes it to a `.json` file. The application will ask the user for their name, "Ada Lovelace", for example, and generate a file in this format: `adalovelace.json`. It will then prompt the user for the layers of the stack they know, for example: HTML, CSS, JavaScript (and beyond!). Lastly, it will prompt users for their preferred method of communication, "email", "phone" or "telekinesis". 

## Instructions

* Initialize your repository and install the `inquirer` dependency.

* Is there another dependency you will need? 

* Set up your `prompt` array with objects for the following:

    * "What is your name?"

    * "How much of the stack do you know?"

    * What is your preferred method of communciation?"

* _Then_ write the user response to a file. 


## Hint(s)

* You will need to use `JSON.stringify()`.

* You will need to consult the `inquirer` documentation on how to prompt users for checkboxes and lists.


## Bonus

* How would you format your JSON?

* Can you generate the name of your user file from their input?
