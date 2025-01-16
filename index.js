/**
 * ライブラリの読み込み
 */
const express = require('express');
const path = require('path');
const cors = require('cors');

/**
 * ルーティングの読み込み
 */
const appRouter = require('./app');

/**
 * Expressサーバーの起動
 */
const app = express();
const PORT = process.env.PORT ?? 3000;
app
  .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
  })
  .on('error', (error) => {
    // エラーの処理
    throw new Error(error.message);
  });

/**
 * テンプレートエンジンの読み込み
 */
app.set("views", path.join(__dirname, "views"));
app.set('view engine','ejs');

  /**
 * CORSの設定
 * 全て許可する
 */
app.use(cors());

/**
 * ルーティング
 */
app.use('/', appRouter);


app.all('*',(_req,res)=>{
  res.status("404").send("ページが見つかりません")
})