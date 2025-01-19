const express = require('express');
const dayjs = require('dayjs');
const sleep = require("../util/sleep")
const router = express.Router();

const validation = (query) => {
  if (!query.password && !query.employeeNumber) return '1';
  if (!query.employeeNumber) return '2';
  if (!query.password) return '3';
};

router.get('/', async(request, response) => {
  // キャッシュの有効期間を10時間に設定
  response.set('Cache-Control', 'public, max-age=36000');
  // 2秒待機(フロント側のロード表示を見たいのでsleep)
  await sleep(2000);
  const validationResult = validation(request.query);
  console.log("validationResult=>",validationResult);
  if (validationResult === undefined) {
    // 正常なレスポンス
    const now = dayjs().format('YYYY/MM/DD HH:mm:ss');
    response.status(200).json({
      statusCode: 200,
      message: '正常なレスポンス',
      result: {
        id: crypto.randomUUID(), // 勤怠開始ID
        employeeNumber: request.query.employeeNumber,
        startTime: now,
      },
    });
  } else {
    // エラーなレスポンス
    response.status(400).json({
      statusCode: 400,
      message: 'Bad Request',
      result: {
        id: '',
        employeeNumber: request.query.employeeNumber,
      },
      ngCode: validationResult,
    });
  }
});

module.exports = router;