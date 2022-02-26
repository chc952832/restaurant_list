// 載入套件
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')  // require express-handlebars
const restaurantList = require('./restaurant.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 載入靜態資料
app.use(express.static('public'))

// 設定路由
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// 設定show頁面路由
app.get('/restaurants/:restaurant_id', (req, res) => {
  // 用params和find方法, 比對餐廳清單找到使用者點選的餐廳
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

// 設定搜尋頁面路由
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase().trim()
  const restaurants = restaurantList.results.filter(restaurant =>
    (restaurant.name.toLowerCase().trim().includes(keyword)) ||
    (restaurant.category.toLowerCase().trim().includes(keyword)))
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})