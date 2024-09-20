import { check, validationResult } from "express-validator"



const login = (req, res) =>{
    res.render('auth/login.pug',{
        pagina: 'Iniciar Sesion',
        csrfToken: req.csrfToken(),
    })
}

const autentication = (req, res) =>{
    
}

const registro = (req, res) =>{
    res.render('auth/registro.pug',{
        pagina: 'Iniciar Sesion',
        csrfToken: req.csrfToken(),
    })
}

const autenticationRegistro = (req, res) =>{
    
}

const recuperacion = (req, res) =>{
    
}

const cambiarContraseña = (req, res) =>{
    
}






export{
    login,
    autentication,
    registro,
    autenticationRegistro,
    recuperacion,
    cambiarContraseña,

}