
# Project REST-Rant

REST-Rant is an app where users can review restaurants.

### Places Routes
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

### Database
#### Places
| Field | Data Type |
| :--- | :--- |
|  _id | Object ID |
|  name | STRING |
|  city | STRING |
|  state | STRING |
|  cuisines | STRING |
|  pic | STRING |

#### Rants
| Field | Data Type |
| :--- | :--- |
|  _id | Object ID |
|  place_id | ref(places) Object_id |
|  rant | Boolean |
|  rating | Number |
|  comment | STRING |
|  reviewer | STRING |


## Image References:
Photo by <a href="https://unsplash.com/@jae462?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Antol</a> on <a href="https://unsplash.com/photos/body-of-water-during-sunset-Xbf_4e7YDII?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@kobbymendez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kobby Mendez</a> on <a href="https://unsplash.com/photos/doughnut-with-toppings-q54Oxq44MZs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
 Photo by <a href="https://unsplash.com/@cravethebenefits?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brenda Godinez</a> on <a href="https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

 Photo by <a href="https://unsplash.com/@ricardofrantz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ricardo frantz</a> on <a href="https://unsplash.com/photos/photo-of-blue-and-green-peacock-GvyyGV2uWns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>



## Other References:
A list of United States for an HTML select/option tag (drop-down list): <a href="https://alvinalexander.com/blog/post/jsp/states-for-html-select-option-tag-drop-down-list/"</a>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.css">