# thisopenspace challenge

## Overview

We have a JSON endpoint that displays information on spaces here https://thisopenspace.com/lhl-test?page=(x) where the (x) is a page number. 

We want to have a UI where we can easily see all the listings, through pagination controls or infinite scrolling. It should not show all the spaces all at once. 

The UI can be done in any form, even command-line if you are more comfortable with back-end.  

Stretch Goals (Can take extra time to complete or resubmit at any time):

- Have sorting features that can sort through all the data at once.

- Show spaces that have similar properties as other spaces. For example it can be based on price, square footage, or a combination thereof.  

## Evaluation

- Code/component organization

- Code maintainability

- If things actually work

- Library choice - do you choose libraries that you don't need? 

## Instructions

Node.js is used to serve this webpage:

1. Clone this repository
2. Navigate to the directory of the downloaded repository
3. Run `npm install`
4. Run `node app.js`
5. Open `localhost` in browser

## Description

This solution uses Vue.js to render a reactive grid of open spaces. I chose Vue.js as it is the most recent JavaScript framework I have used.

I did consider the idea of using no framework and got as far as listing all spaces without it, but I decided a framework would help glue the data and logic to the UI.

Spaces are loaded recursively by requesting data from the provided endpoint and using the 404 status as an exit strategy (when the page has no data, thisopenspace returns a 404).

Spaces that have a significant number of views have a small flame icon next to their title to indicate the popularity of the space.

This solution took 3.5-4 hours to complete. Once I got into the swing of the work it came together quite quickly. Initially choosing how to approach the task took the most time.
 