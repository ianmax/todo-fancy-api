const express = require('express');
const router = express.Router()
const todoApp = require('../controllers/todoControllers')

router.get('/', todoApp.getAll());
router.post('/', todoApp.create());
router.get('/:userid', todoApp.find_by_userid());
router.put('/:todos_id', todoApp.update());
router.delete('/:todos_id', todoApp.remove());

module.exports = router