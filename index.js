import express from 'express'
import appRoutes from './routes/appRoutes.js'

const app = express()

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('./public'))

app.use('/', appRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server Runnig in the PORT ${port}`)
})

