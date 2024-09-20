import express from 'express'
import appRoutes from './routes/appRoutes.js'
import usuarioRoutes from './routes/userRoutes.js'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import db from './config/db.js'

const app = express()

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'pug')
app.set('views', './views')

app.use(cookieParser())

app.use( csrf({cookie:true}))

app.use(express.static('./public'))

app.use('/', appRoutes)
app.use('/auth', usuarioRoutes)


//BASE DE DATOS
try{
    await db.authenticate();
    db.sync();
    console.log('Coneccion Realizada')
}
catch(error)
{
    console.log(error);
}


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server Runnig in the PORT ${port}`)
})

