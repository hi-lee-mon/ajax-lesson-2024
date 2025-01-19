/**
 * ライブラリの読み込み
 */
const express = require('express');
const router = express.Router();

/**
 * ルーティングの読み込み
 */
const practiceOne = require('./routes/practiceOne');
const practiceTwo = require('./routes/practiceTwo');
const practiceTwoPlus = require('./routes/practiceTwoPlus');

/**
 * ルーティング
 */
router.get('/', (req, res) => {
  res.render('home', {title:'ホーム'});
});
router.use('/practiceOne', practiceOne);
router.use('/practiceTwo', practiceTwo);
router.use("/practiceTwoPlus", practiceTwoPlus);
router.all('*',(_req,res)=>{
  res.status(404).render('404',{title:'404'});
})

module.exports = router;