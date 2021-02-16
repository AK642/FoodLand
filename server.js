
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//set Templete engine
app.use(expressLayout)
// app.set('src', path.join(__dirname, 'src'))
app.set('view engine', 'ejs')

app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`)
})