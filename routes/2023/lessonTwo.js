const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
const cors = require('cors');

router.post('/', cors(), (_request, response) => {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const data = {
    statusCode: 200,
    message: '正常なレスポンス',
    result: {
      updateTimeStamp: now,
    },
  };
  response.status(200).json(data);
});

module.exports = router;