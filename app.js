/**
 * ライブラリの読み込み
 */
const express = require('express');
const router = express.Router();

/**
 * ルーティングの読み込み
 */
const practiceOne = require('./routes/practiceOne');

/**
 * ルーティング
 */
router.get('/', (req, res) => {
  res.render('home');
});

router.use('/practiceOne', practiceOne);

module.exports = router;