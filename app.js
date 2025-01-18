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
  res.render('home', {title:'ホーム'});
});

router.use('/practiceOne', practiceOne);

// 404
router.all('*',(_req,res)=>{
  res.status(404).render('404',{title:'404'});
})

module.exports = router;