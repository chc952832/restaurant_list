// 載入套件
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')  // require express-handlebars

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 載入靜態資料
app.use(express.static('public'))

// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})