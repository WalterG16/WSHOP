import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Product = db.define('product', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    category:{
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

export default Product;