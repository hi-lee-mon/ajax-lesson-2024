const express = require('express');
const router = express.Router();

router.get('/', (_request, response) => {
  const data = {
    statusCode: 200,
    message: '正常なレスポンス',
    result: {
      name: 'デフォルトネーム',
      email: 'defaultMail@exsample.com',
      password: '12345678',
      sex: 'man',
      questions: 'java',
      birth: '1',
    },
  };
  response.status(200).json(data);
});

module.exports = router;