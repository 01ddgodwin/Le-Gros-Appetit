const express = require('express')
const router = express.Router()
const Staff = require('../models/staff')
const bcrypt = require('bcrypt')

// Getting all
router.get('/', async (req, res) => {
    try {
        const staffs = await Staff.find()
        res.json(staffs)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

// Getting One
router.get('/:id', getStaff, (req, res) => {
    res.json(res.staff)
})

// Creating one
router.post('/', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const staff = new Staff({
        name: req.body.name,
        position: req.body.position,
        username: req.body.username,
        password: hashedPassword,
        image: req.body.image
    });
    try {
        const newStaff = await staff.save()
        res.status(201).json(newStaff)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

//Login
router.post('/login', getStaffByName, async (req, res) => {
    //const staff = await staff.find(staff => staff.name === req.body.name)
    if (res.staff == null) {
        return res.status(400).send('Cannot find employee')
    }
    try {
        if (await bcrypt.compare(req.body.password, res.staff.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

// Updating One
router.patch('/:id', getStaff, async (req, res) => {
    if (req.body.name != null) {
        res.staff.name = req.body.name
    }
    if (req.body.position != null) {
        res.staff.position = req.body.position
    }
    try {
        const updateStaff = await res.staff.save()
        res.json(updateStaff)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

// Deleting One
router.delete('/:id', getStaff, async (req, res) => {
    try {
        await res.staff.remove()
        res.json({
            message: 'Deleted Employee'
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

async function getStaff(req, res, next) {
    let staff
    try {
        staff = await Staff.findById(req.params.id)
        if (staff == null) {
            return res.status(404).json({
                message: 'Cannot find employee'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    res.staff = staff
    next()
}

async function getStaffByName(req, res, next) {
    let staff
    try {
        staff = await staff.find(staff => staff.name === req.body.name)
        if (staff == null) {
            return res.status(404).json({
                message: 'Cannot find employee'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    res.staff = staff
    next()
}

module.exports = router