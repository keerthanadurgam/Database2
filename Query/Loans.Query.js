import express from 'express';
import Loans from '../models/Loans';
import Books from '../models/Books'; 

const router = express.Router();

router.get('/loans-for-book/:bookId', async (req, res) => {
    const bookId = req.params.bookId;

    try {
        const loans = await Loans.findAll({
            where: { bookId },
            include: Books, // Include the Books model to get book details
        });

        if (loans.length === 0) {
            return res.status(404).json({ message: "No loans found for this book" });
        }

        res.json(loans);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

export default router;