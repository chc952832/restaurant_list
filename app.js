// 載入套件
const express = require('express')
const app = express()
const port = 3000

// 設定路由
app.get('/', (req, res) => {
  res.send('This is restaurant list built with Express.')
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})