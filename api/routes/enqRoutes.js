const express = require('express')
const router = express.Router()
const { createEnquiry, deleteEnquiry, getEnquiries, getEnquiry, updateEnquiry } = require('../controllers/enqCtr')

router.get('/', getEnquiries)
router.post('/', createEnquiry)
router.get('/:id', getEnquiry)
router.put('/:id', updateEnquiry)
router.delete('/:id', deleteEnquiry)

module.exports = router