const express = require('express');
const app = express();

const { transactions } = require('../Query/Authors.query');
app.post('/create-author', async (req, res) => {
    try {
        await transactions(req, res); 
    } catch (error) {
        console.error('Error in creating author:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
