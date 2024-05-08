const express = require('express')
const router = express.Router()
const { createColor, deleteColor, getColors, getColor, updateColor } = require('../controllers/colorCtr')
router.get('/', getColors)
router.post('/', createColor)
router.put('/:id', updateColor)
router.get('/:id', getColor)
router.delete('/:id', deleteColor)

module.exports = router