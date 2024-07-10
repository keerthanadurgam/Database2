const express=require('express');
const router = express.Router();
import Loans from '../models/Loans';

router.get('/', async (req, res) => {
    try {
        const loans = await Loans.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No loans Found" });
        res.json({Loans: loans});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


router.get('/:id', async (req, res) => {
    try {
        const loan = await Loans.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(loan);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


router.post('/', async (req, res) => {
    try {
        const loan = await Loans.create(req.body);
        res.json(loan);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Loans.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedLoan = await Loans.findByPk(req.params.id);
            res.json(updatedLoan);
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Loans.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;