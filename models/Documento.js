import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Documento = db.define('documentos', {
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

})

export default Documento