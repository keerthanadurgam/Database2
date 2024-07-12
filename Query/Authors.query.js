import express from 'express';
import Authors from '../models/Authors';
import Books from '../models/Books';

const router = express.Router();

router.get('/books-by-author/:authorId', async (req, res) => {
    const authorId = req.params.authorId;

    try {
        const author = await Authors.findByPk(authorId, {
            include: {
                model: Books,
            },
        });
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }

        const books = author.Books;
        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});