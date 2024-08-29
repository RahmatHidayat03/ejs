const path = require('path')
const express =  require ('express')
const app = express()

const tagsData = require('./data.json')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')) 
// kegunaan code di atas untuk tidak error saat dipanggil diluar folder
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/t/:tag', (req, res) => {
    const { tag } = req.params
    const data = tagsData[tag]
    if (data) {
        res.render('tag', { data })
    } else {
        res.render('notfound', { tag })
    }
})

app.get('/animals', (req, res ) => {
    const animals = [
        'anjing',
        'tongket',
        'harimau'
    ]
    res.render('animals', { animals })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', {random: num})
})

app.listen(8080, () => {
    console.log(`listening on host http://localhost:8080`)
})