var express = require('express');
var router = express.Router();
// This is the first request, we ask the form to be rendered
router.get('/main', async (request, response)  => {
    return response.render('main');
});

module.exports = router;