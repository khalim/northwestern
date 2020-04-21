This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

==================================================================================
==================================================================================
The web interface is a simple select menu to choose between ebooks and movies available at
the iTunes store.
The results are retrieved via the iTunes API made available by Apple and parsed to show just the list of titles that have been retrieved from Apple. If nothing is found, an appropriate message is displayed.

Striping was added to ensure readability.

TODO:
  In the src/SearchResults.js file, there are two functions with nearly identical code calling for search results.
  The desire is to break out that code into a separate reusable function and have the other two call it when a search execution is required. 