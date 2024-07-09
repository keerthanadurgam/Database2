const express=require('express');
const router = express.Router();
import Book from '../models/Books';


router.get('/', async (req, res) => {
    try {
        
        const books = await Book.findAll();
        if (books.length === 0) return res.status(404).json({ message: "Books not found" });
        res.json({Books: books});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "Book Not Found" });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedBook = await Book.findByPk(req.params.id);
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Delete a book
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Book.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;
 