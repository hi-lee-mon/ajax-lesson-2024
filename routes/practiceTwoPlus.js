const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  // キャッシュの有効期間を10時間に設定
  response.set('Cache-Control', 'public, max-age=36000');
  if (request.query.employeeNumber === '001') {
    // 従業員番号が001の場合は編集権限ありでレスポンス
    response.status(200).json({
      statusCode: 200,
      message: '正常なレスポンス',
      results: [
        {
          name: '山田太郎',
          employeeNumber: '001',
          birthMonth: '3',
          skills: ['javaScript', 'java'],
        },
      ],
    });
  } else {
    // 従業員番号が001以外の場合は編集権限なしでレスポンス
    response.status(403).json({
      statusCode: 403,
      message: '編集権限がありません',
      results: [],
    });
  }
});

module.exports = router;