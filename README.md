# Project-1
Description: A wellness/calendar/map app that features a calendar where you can add to-do's in a calendar/list. the app gives motivational quotes and also has a map that shows parks, nature trails, etc. near your current location.

User Story: AS A user with an urge to increase mental wellness
I WANT to add self-care to-do's to a daily planner
AND find local parks, trails, etc.
AND see motivational quotes on the screen
SO THAT I can feel mentally refreshed and motivated


GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the planner along with a motivational quote
WHEN I scroll down
THEN I am presented with timeblocks for all hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage and another motivational quote is displayed at the top of the planner
WHEN I refresh the page
THEN the saved events persist

GIVEN I am using the map to find nature walks
When I open the map
THEN the current location is shown along with parks and trails near me
WHEN I select a park, trail, or nature reserve
I see information about the location

APIs to be used:
Quotes API: https://www.freecodecamp.org/forum/t/free-api-inspirational-quotes-json-with-code-examples/311373
Google Maps API: https://developers.google.com/maps/documentation/embed/start

Rough Breakdown of Tasks:
-Create HTML for task scheduler
-Create CSS for task scheduler
-Create Javascript for task scheduler
-Create HTML for global elements (quotes div, navbar, jumbotron, footer, etc.)
-Create CSS for global elements
-Create Javascript for global elements
-Pull in quotes from API
-Create HTML for map block
-Create CSS for map block
-Embed Map
-Show all closest park/trail/nature reserves to user's location
-Create HTML for About page
-Create CSS for About page