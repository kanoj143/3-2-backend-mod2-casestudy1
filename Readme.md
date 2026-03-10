Here are the step-by-step instructions to test your new Express API endpoints using Postman.

Since your server is currently running on http://localhost:3000, you can open Postman and follow these steps for each operation:

1. Test "GET All Items" (Read)
This endpoint fetches the list of all items currently in your mock database.

Open Postman.
Click the + (New tab) button to create a new request.
Set the HTTP method dropdown to GET.
Enter the URL: http://localhost:3000/api/items
Click Send.
Result: In the response area at the bottom, you should see a 200 OK status and a JSON array containing the initial two items: [ { "id": 1, ... }, { "id": 2, ... } ].
2. Test "POST a New Item" (Create)
This endpoint lets you add a new item to the database.

Create a new request tab in Postman.
Change the HTTP method dropdown to POST.
Enter the URL: http://localhost:3000/api/items
Just below the URL bar, click on the Body tab.
Select the raw radio button.
Look for the "Text" dropdown right next to it (or at the end of that row) and change it to JSON.
In the text area, paste the following JSON data:
json
{
    "name": "kanoj",
    "description": "This is a brand new item created via Postman!"
}
Click Send.
Result: You should get a 201 Created status, and the response body will show your new item with an auto-generated id (e.g., "id": 3).
3. Test "GET a Single Item" (Read)
Now let's fetch the specific item you just created.

Create a new request tab.
Leave the HTTP method as GET.
Enter the URL: http://localhost:3000/api/items/3 (assuming the newly created item was assigned ID 3).
Click Send.
Result: You should get a 200 OK status, and the response will show only the JSON data for "Item Three".
4. Test "PUT to Update an Item" (Update)
This endpoint modifies an existing item. Let's update the description of the item with ID 1.

Create a new request tab.
Change the HTTP method dropdown to PUT.
Enter the URL: http://localhost:3000/api/items/1
Go to the Body tab, select raw, and change the format to JSON.
Paste the data you want to update. For example:
json
{
    "name": "Item One Updated",
    "description": "I just updated this item's details."
}
Click Send.
Result: You should get a 200 OK status, and the response body will show the item with ID 1 containing your updated name and description.
5. Test "DELETE an Item" (Delete)
Finally, let's delete an item, for example, the item with ID 2.

Create a new request tab.
Change the HTTP method dropdown to DELETE.
Enter the URL: http://localhost:3000/api/items/2
Click Send.
Result: You should get a 200 OK status with a message saying "Item deleted successfully".


npm init -y
npm install express cors axios mongose
npm start


1️⃣ Start Your Server

First run your project.

node app.js

You should see:

Server is running on http://localhost:3000

Base URL:

http://localhost:3000/api/items
2️⃣ Open Postman

Open Postman

Create a New Collection

Example Collection Name:

CRUD Items API
3️⃣ Test Case 1 — GET All Items
Request

Method:

GET

URL

http://localhost:3000/api/items
Steps

Open Postman

Select GET

Enter URL

Click Send

Expected Response
[
  {
    "id": 1,
    "name": "Kanoj",
    "description": "This is the first item"
  },
  {
    "id": 2,
    "name": "Hari",
    "description": "This is the second item"
  }
]

Status Code:

200 OK
4️⃣ Test Case 2 — GET Item by ID
Request

Method

GET

URL

http://localhost:3000/api/items/1
Steps

Select GET

Enter the URL

Click Send

Expected Response
{
  "id": 1,
  "name": "Kanoj",
  "description": "This is the first item"
}

Status Code

200 OK
5️⃣ Test Case 3 — GET Item (Invalid ID)

URL

http://localhost:3000/api/items/10
Expected Response
{
  "message": "Item not found"
}

Status Code

404 Not Found
6️⃣ Test Case 4 — POST Create New Item
Request

Method

POST

URL

http://localhost:3000/api/items
Body

Select

Body → raw → JSON
{
  "name": "Ravi",
  "description": "Third Item"
}
Steps

Select POST

Go to Body

Choose raw

Select JSON

Paste JSON

Click Send

Expected Response
{
  "id": 3,
  "name": "Ravi",
  "description": "Third Item"
}

Status Code

201 Created
7️⃣ Test Case 5 — POST Validation Error

Body

{
  "name": "Test"
}
Expected Response
{
  "message": "Name and description are required"
}

Status Code

400 Bad Request
8️⃣ Test Case 6 — PUT Update Item
Request

Method

PUT

URL

http://localhost:3000/api/items/1

Body

{
  "name": "Updated Kanoj",
  "description": "Updated description"
}
Expected Response
{
  "id": 1,
  "name": "Updated Kanoj",
  "description": "Updated description"
}

Status Code

200 OK
9️⃣ Test Case 7 — PUT Item Not Found

URL

http://localhost:3000/api/items/20

Expected Response

{
  "message": "Item not found"
}

Status Code

404 Not Found
🔟 Test Case 8 — DELETE Item
Request

Method

DELETE

URL

http://localhost:3000/api/items/2
Expected Response
{
  "message": "Item deleted successfully",
  "deletedItem": {
    "id": 2,
    "name": "Hari",
    "description": "This is the second item"
  }
}

Status Code

200 OK
1️⃣1️⃣ Test Case 9 — DELETE Invalid Item

URL

http://localhost:3000/api/items/50

Expected Response

{
  "message": "Item not found"
}

Status Code

404 Not Found

