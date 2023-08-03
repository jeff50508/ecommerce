var express = require('express');
var router = express.Router();
var axios = require('axios')
var cors = require('cors'); 
var mysql = require('mysql2');
/* GET home page. */
router.use(cors());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  console.log('efs')
  res.setHeader('Access-Control-Allow-Origin', '*');
  const connection = req.dbConnection;
  connection.query('SELECT * FROM products_table', function(err, rows, fields) {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      return res.status(500).send('Error executing MySQL query');
    }
    // 將查詢結果傳遞到視圖以呈現
    res.json({ products: rows });
  });
});

// Implement a new API route to update product quantity
router.post('/products/:id/updateQuantity', function(req, res, next) {
  const productId = req.params.id;
  const quantity = req.body.quantity;

  const connection = req.dbConnection;
  connection.query('UPDATE product_inventory SET quantity = ? WHERE id = ?', [quantity, productId], function(err, result) {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      return res.status(500).send('Error executing MySQL query');
    }

    // Return success message
    res.json({ message: 'Product quantity updated successfully' });
  });
});

module.exports = router;
