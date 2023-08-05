## React + Vite

for running on your local machine

 git clone the repository and then
 ```
 npm install 
 ```
to install the dependencies
run the app on your local server with 
```
npm run dev
```




## Details of the App


This project is a frontend website made with the use of React. API from "Hotels.com" is taken for the website "Hotelo". The homepage displays navigation bars, footer hotel cards fetched from different default parameters. Each hotel card component has individual properties that is fetched from the API. Entire website adheres to the Montserrat font and follows the colour pallete of Midnight blue.

Two filters on the basis of price range and hotel stars, whose working is functional one at a time is displayed on the Homepage. Both the filters giving the leverage to arrange the hotel cards in descending(high to low) and ascending(low to high) order. When the page is rendered, a loader appears, which stays till the data is fetched and displayed.

Individual hotel cards forms the product list, product list and filters come together to form the entire product component. Search bar and navigation bars placed on the display page are responsive. When the pixels of the page are brought down below laptop and desktop resolutions(tablets), display is reflected in tablet form, where the list turns into having the Website logo, searchbar and hamburger, where searchbar and hamburger are clickables.

Coming to the Product page, complete information regarding the hotels is provided from our end. A counter is enabled which allows the user to pick the "number of adults", the range of which is 1 to 5, and a button placed beside it that shall confirm the booking of the hotel. Product gallery component which displays the pictures fetched from the API, are shown in the form of classic Ecommerce website style. In tablet, product gallery view changes from default website style to click-change style.


