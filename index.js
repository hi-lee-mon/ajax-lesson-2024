/**
 * ライブラリの読み込み
 */
const express = require('express');
const path = require('path');
const cors = require('cors');
const ejsMate = require('ejs-mate');

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
 * 共通レイアウト作成のためにejsMateンを使用
 */
app.engine('ejs', ejsMate)

/**
 * 静的ファイルディレクトをpublicに設定
 */
app.use(express.static(path.join(__dirname, "public")));

  /**
 * CORSの設定
 * 全て許可する
 */
app.use(cors());

/**
 * ルーティング
 */
app.use('/', appRouter);