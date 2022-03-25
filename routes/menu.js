const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')

// Getting all
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find()
    res.json(menus)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getMenu, (req, res) => {
  res.json(res.menu)
})

// Creating one
router.post('/', async (req, res) => {
  const menu = new Menu({
    item: req.body.item,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  })
  try {
    const newMenu = await menu.save()
    res.status(201).json(newMenu)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getMenu, async (req, res) => {
  if (req.body.item != null) {
    res.menu.item = req.body.item
  }
  if (req.body.description != null) {
    res.menu.description = req.body.description
  }
  try {
    const updatedMenu = await res.menu.save()
    res.json(updatedMenu)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getMenu, async (req, res) => {
  try {
    await res.menu.remove()
    res.json({ message: 'Deleted Item' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getMenu(req, res, next) {
  let menu
  try {
    menu = await Menu.findById(req.params.id)
    if (menu == null) {
      return res.status(404).json({ message: 'Cannot find item' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.menu = menu
  next()
}

module.exports = router