const express = require('express');
const router = express.Router();

router.all('*',(_req,res)=>{
  res.status(404).render('404',{title:'404'});
})

module.exports = router;