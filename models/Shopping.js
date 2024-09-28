import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Shopping = db.define('shopping', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
})

export default Shopping;