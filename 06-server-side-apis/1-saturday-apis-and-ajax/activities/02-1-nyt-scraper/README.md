# 02-1-nyt-scraper

## Instructions

- Go to the following link: [NYT Scraper](http://nyt-mongo-scraper.herokuapp.com/)

- Open the Chrome Developer Tools

- Click on the "Network" tab

- Click "Scrape New Articles!" (articles should appear at the bottom with a "Save" button)

- Next, visit the following link: [NYT Scraper API](http://nyt-mongo-scraper.herokuapp.com/api/headlines)

- "beneath the hood" the application is storing each headline as an entry in a JavaScript Object. Just like with the CustomerObject example, this JavaScript is holding a mix of various data types to store information such as the article's id, headline, summary, date, and whether it is saved or not.

- This approach of using JavaScript Objects (JSON) as a data transmission method is a very common one.
