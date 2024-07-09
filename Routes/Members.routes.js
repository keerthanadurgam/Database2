const express=require('express');
const router = express.Router();
import Member from '../models/Members';

router.get('/', async (req, res) => {
    try {
        const members = await Member.findAll();
        if (members.length === 0) return res.status(404).json({ message: "No members Found" });
        res.json({Members: members});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


router.get('/:id', async (req, res) => {
    try {
        const member = await Member.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json(member);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/', async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.json(member);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Member.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedMember = await Member.findByPk(req.params.id);
            res.json(updatedMember);
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Member.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Member Deleted" });
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;
 