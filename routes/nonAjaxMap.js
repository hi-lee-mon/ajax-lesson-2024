const express = require('express');
const router = express.Router();

router.get('/one', (_request, response) => {
  response.render('nonAjaxMapOne', {title:'nonAjax地図001'});
});

router.get('/two', (_request, response) => {
  response.render('nonAjaxMapTwo', {title:'nonAjax地図002'});
});

router.get('/three', (_request, response) => {
  response.render('nonAjaxMapThree', {title:'nonAjax地図003'});
});

module.exports = router;