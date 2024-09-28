import { check, validationResult } from "express-validator"
import { Usuario } from "../models/index.js"
import { generarID, generarJWT } from "../helpers/token.js"



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

const autenticationRegistro = async(req, res) =>{
    await check('nombre').notEmpty().withMessage('El campo no puede estar vacio').run(req)
    await check('apellido').notEmpty().withMessage('El campo no puede estar vacio').run(req)
    await check('email').isEmail().withMessage('El email no es valido').run(req)
    await check('password').isLength({min: 6}).withMessage('La contraseña debe tener minimo 6 caracteres').run(req)
    await check('confirmPassword').equals(req.body.password).withMessage('Las contraseña no son iguales').run(req)

    let result = validationResult(req)

    if(!result.isEmpty())
    {
        return res.render('auth/registro.pug',{
            errores: result.array(),
            csrfToken: req.csrfToken(),
            
        })
    }

    const existUser = await Usuario.findOne({ where: {email: req.body.email} })

    if(existUser)
    {
        return res.render('auth/registro.pug',{
            csrfToken: req.csrfToken(),
            errores: [{msg: 'El Email ya se Encuentra Registrado'}],
        })
    }

    const usuario = await Usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        token: generarID(),
    })

    res.render('auth/login.pug',{
    })

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