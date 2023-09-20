// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create comment
router.post('/', commentController.createComment);

// Get comment
router.get('/', commentController.getComment);

// Update comment
router.put('/', commentController.updateComment);

// Delete comment
router.delete('/', commentController.deleteComment);

// Export module
module.exports = router;
