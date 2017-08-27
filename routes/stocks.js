const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/data', (req, res, next) => {
  const ticker = req.body.ticker;
  let stock = ''

  request(`http://finance.google.com/finance/info?client=ig&q=%3A${ticker}`, (err, r, body) => {
    if (err) throw err;
    let data = {};
    try {
      data = JSON.parse(body.substring(5, body.length - 2));
      res.json({ success:true, stock:data });
    } catch (SyntaxError) {
      res.json({ success:false, stock:undefined });
    }
  });

});

module.exports = router;