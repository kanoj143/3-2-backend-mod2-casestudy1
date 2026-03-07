const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON payload
app.use(bodyParser.json());

// Mock database (in-memory array)
let items = [
    { id: 1, name: 'Item One', description: 'This is the first item' },
    { id: 2, name: 'Item Two', description: 'This is the second item' }
];

// Helper to generate a new sequential ID
const generateId = () => {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
};

// 1. GET (Read all items)
app.get('/api/items', (req, res) => {
    res.status(200).json(items);
});

// 2. GET (Read a specific item by ID)
app.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// 3. POST (Create a new item)
app.post('/api/items', (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }

    const newItem = {
        id: generateId(),
        name,
        description
    };
    
    items.push(newItem);
    res.status(201).json(newItem);
});

// 4. PUT (Update an existing item)
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;

    const itemIndex = items.findIndex(i => i.id === id);

    if (itemIndex !== -1) {
        items[itemIndex] = {
            id,
            name: name || items[itemIndex].name,
            description: description || items[itemIndex].description
        };
        res.status(200).json(items[itemIndex]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// 5. DELETE (Delete an item)
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === id);

    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1);
        res.status(200).json({ message: 'Item deleted successfully', deletedItem: deletedItem[0] });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
