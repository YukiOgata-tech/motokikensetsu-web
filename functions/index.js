// functions/index.js
const functions = require('firebase-functions');
const next = require('next');

// 本番ビルド用
const dev = false;
const app = next({
  dev,
  // distDir: ルートプロジェクトの `.next` ディレクトリのパス
  conf: { distDir: './.next' }
});
const handle = app.getRequestHandler();

// オプション：グローバルインスタンス設定（既存記述もOK）
const { setGlobalOptions } = require("firebase-functions");
setGlobalOptions({ maxInstances: 10 });

// Next.js SSRハンドラをエクスポート
exports.nextApp = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
