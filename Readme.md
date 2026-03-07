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
