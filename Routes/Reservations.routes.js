const express=require('express');
const router = express.Router();
import Reservation from '../models/Reservations';

router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        if (reservations.length === 0) return res.status(404).json({ message: "No Reservations Found" });
        res.json({Reservations: reservations});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "Reservation Not Found" });
        }
        res.json(reservation);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


router.post('/', async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.json(reservation);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Reservation.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedReservation = await Reservation.findByPk(req.params.id);
            res.json(updatedReservation);
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Reservation.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Reservation Deleted" });
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;