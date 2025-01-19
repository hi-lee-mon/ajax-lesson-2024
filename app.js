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
const lessonOne = require('./routes/2023/lessonOne');
const lessonTwo = require('./routes/2023/lessonTwo');
const lessonThree = require('./routes/2023/lessonThree');

/**
 * ルーティング
 */
router.get('/', (req, res) => {
  res.render('home', {title:'ホーム'});
});
router.use('/practiceOne', practiceOne);
router.use('/practiceTwo', practiceTwo);
router.use("/practiceTwoPlus", practiceTwoPlus);
router.use('/lessonOne', lessonOne);
router.use('/lessonTwo', lessonTwo);
router.use('/lessonThree', lessonThree);
router.all('*',(_req,res)=>{
  res.status(404).render('404',{title:'404'});
})

module.exports = router;