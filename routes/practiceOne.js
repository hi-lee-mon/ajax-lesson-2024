const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  res.set('Cache-Control', 'public, max-age=36000');
  res.status(200).json({
    musicians: [
      {
        name: 'Mr.Children',
        representativeSong: 'Tomorrow never knows',
        members: ['桜井和寿', '田原健一', '中川敬輔', '鈴木英哉'],
      },
      {
        name: '嵐',
        representativeSong: 'Love so sweet',
        members: ['大野智', '櫻井翔', '相葉雅紀', '二宮和也', '松本潤'],
      },
      {
        name: '宇多田ヒカル',
        representativeSong: 'First Love',
        members: ['宇多田ヒカル'],
      },
      {
        name: 'ピーナッツくん',
        representativeSong: 'グミ超うめぇ',
        members: ['ピーナッツくん'],
      },
      {
        name: "B'z",
        representativeSong: 'ultra soul',
        members: ['稲葉浩志', '松本孝弘'],
      },
      {
        name: 'GLAY',
        representativeSong: '誘惑',
        members: ['TERU', 'TAKURO', 'HISASHI', 'JIRO'],
      },
      {
        name: '浜崎あゆみ',
        representativeSong: 'evolution',
        members: ['浜崎あゆみ'],
      },
      {
        name: '倉木麻衣',
        representativeSong: 'Secret of my heart',
        members: ['倉木麻衣'],
      },
      {
        name: '桑田佳祐',
        representativeSong: '明日晴れるかな',
        members: ['桑田佳祐'],
      },
      {
        name: '山下達郎',
        representativeSong: 'Christmas Eve',
        members: ['山下達郎'],
      },
      {
        name: 'SMAP',
        representativeSong: 'ありがとう',
        members: ['木村拓哉', '中居正広', '稲垣吾郎', '草彅剛', '香取慎吾'],
      },
    ],
  });
});

module.exports = router;