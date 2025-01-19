/**
 * ライブラリの読み込み
 */
const express = require('express');
const router = express.Router();

/**
 * ルーティングの読み込み
 */
const home = require('./routes/home');
const practiceOne = require('./routes/practiceOne');
const practiceTwo = require('./routes/practiceTwo');
const practiceTwoPlus = require('./routes/practiceTwoPlus');
const lessonOne = require('./routes/2023/lessonOne');
const lessonTwo = require('./routes/2023/lessonTwo');
const lessonThree = require('./routes/2023/lessonThree');
const nonAjaxMap = require('./routes/nonAjaxMap');

/**
 * ルーティング
 */
router.use('/', home);
router.use('/practiceOne', practiceOne);
router.use('/practiceTwo', practiceTwo);
router.use("/practiceTwoPlus", practiceTwoPlus);
router.use('/lessonOne', lessonOne);
router.use('/lessonTwo', lessonTwo);
router.use('/lessonThree', lessonThree);
router.use('/nonAjaxMap', nonAjaxMap);

router.all('*',(_req,res)=>{
  res.status(404).render('404',{title:'404'});
})

module.exports = router;