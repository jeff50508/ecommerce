var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 建立一個空陣列來保存多筆資料


router.get('/express',async function(req,res,next) {
  // API URL
  const results = [];
  console.log(req.query);
  const { zip_code } = req.query;
  const apiUrl = `https://api.opencube.tw/twzipcode/?zip_code=${zip_code}`;
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 發送 API 請求
  // const express1 = await axios.get(apiUrl)
  // console.log(express1.data)
  // res.json(express1.data)// API URL
  try {
    // 發送 API 請求
    const response = await axios.get(apiUrl);
    console.log(response)
    const data = response.data;

    // 將取得的資料存入結果陣列
    results.push(data);

    // 回傳整個結果陣列
    res.json({ data: results });
  } catch (error) {
    console.error("API 請求錯誤", error);
    res.status(500).json({ error: error.message });
  }

})

router.get('/express1',async function(req,res,next) {
  // API URL
  // const results = [];
  const apiUrl = `https://api.opencube.tw/twzipcode`;

  res.setHeader('Access-Control-Allow-Origin', '*');
  // 發送 API 請求
  // const express1 = await axios.get(apiUrl)
  // console.log(express1.data)
  // res.json(express1.data)// API URL
  try {
    // 發送 API 請求
    const response = await axios.get(apiUrl);
    console.log(response)
    const data = response.data;
    console.log(data)
    // 將取得的資料存入結果陣列
    // results.push(data);

    // 回傳整個結果陣列
    // res.json({ data: results });
    res.json({data});
  } catch (error) {
    console.error("API 請求錯誤", error);
    res.status(500).json({ error: error.message });
  }

})

module.exports = router;
