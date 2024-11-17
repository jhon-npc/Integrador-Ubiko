import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Provincia = db.define('provincias', {
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

})

export default Provincia