let express = require('express');
let router = express.Router();

router.get('/proof', function (req, res, next) {
  res.render('test/proof', {title: 'proof'});
});
module.exports = router;
