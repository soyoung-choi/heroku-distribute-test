import express from 'express'

const app = express();

app.use(express.static('build')) // 서버에서 build 폴더 사용 가능

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(5500, () => {
  console.log('server is running!')
})