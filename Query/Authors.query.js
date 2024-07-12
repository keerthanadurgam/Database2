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
//Transaction 
const transactions = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const Authors2 = await Authors.create({
            id: 3,
            name: 'kaloji',
            birthyear: 1914,
            nationality: 'India'
        }, {
            transaction: t
        });
        await t.commit();
        res.status(200).json('ok');
    } catch (e) {
        await t.rollback();
        res.status(500).json({ error: e.message }); // Sending error response
    }
};
module.exports= transactions;