const express = require('express');
const router = express.Router(); 

// @route GET api/users/test 
// @desc tests post route 
// @access private route
router.get('/test', (req, res) => res.json( {msg:"user working"} ));

module.exports = router; 