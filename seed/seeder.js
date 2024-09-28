import db from "../config/db.js";
import {Usuario, SuperUser, Product, Shopping} from "../models/index.js"

const importarDatos = async () => {
    try {
        //Autenticar BD
        await db.authenticate();

        //Generar las Columnas para la BD
        await db.sync();
        console.log("Datos Importados Correctamente")
        process.exit(0);

    }
    catch (error) {
        console.log(error); 
        process.exit(1);
    }
}

const elimilarDatos = async () => {
    try {
        await db.sync({force: true})

        console.log('Datos Eliminados Correctamente');
        process.exit();
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}


if (process.argv[2] === "-i") {
    importarDatos();
}

if (process.argv[2] === "-e") {
    elimilarDatos();
}