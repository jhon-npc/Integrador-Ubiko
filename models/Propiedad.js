import {DataTypes} from 'sequelize'
import db from '../config/db.js'

const Propiedad = db.define('propiedades', {
    titulo:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false,   
    },
    habitaciones :{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estacionamiento :{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wc :{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calle: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    lat: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lng: {
        type: DataTypes.STRING,
        allowNull:false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    visitas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    precio :{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
})

export default Propiedad;