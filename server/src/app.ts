import express from 'express'

const app = express();

const PORT = process.env.PORT || 5500

app.use(express.static('build')) // 서버에서 build 폴더 사용 가능

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(PORT, () => {
  console.log('server is running!')
})