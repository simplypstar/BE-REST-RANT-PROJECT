
# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Places Routes
| Method | Path | Purpose |
| :--- | :--- | :--- |
| GET |  / | Homepage |
| GET |  * | 404 page (matches any undefined route) |
| GET |  /places | Index page listing all places |
| GET |  /places/new | Form to create a new place |
| POST |  /places | Create a new place |
| GET |  /places/:id | Show page containing details for a specific place (including a comment) |
| GET |  /places/:id/edit | Edit form for a place |
| PUT |  /places/:id | Make changes to an existing place |
| DELETE |  /places/:id | Delete an existing place |
| POST |  /places/:id/rant | Post a rant (comment) about a specific place |
| DELETE |  /places/:id/rant/:id | Delete an existing rant (comment) 

## Places Database
| Place | Data Type |
|  _id | Object |
|  name | STRING |
|  city | STRING |
|  state | STRING |
|  cuisines | STRING |
|  pic | STRING |
