import Propiedad from './Propiedad.js'
import Categoria from './Categoria.js'
import Usuario from './Usuario.js'
import Mensaje from './Mensaje.js'
import Credito from './Credito.js'
import Documento from './Documento.js'
import Departamento from './Departamento.js'
import Provincia from './Provincia.js'
import Ciudad from './Ciudad.js'



//Precio.hasOne(Propiedad) //Propiedad tiene un precio
//Propiedad.belongsTo(Precio, {foreignKey: 'precioId'})
Propiedad.belongsTo(Categoria, {foreignKey: 'categoriaId'})
Propiedad.belongsTo(Departamento, {foreignKey: 'departamentoId'})
Propiedad.belongsTo(Usuario, {foreignKey: 'usuarioId'})
Propiedad.hasMany(Mensaje, {foreignKey: 'propiedadId'})
Propiedad.hasMany(Credito, {foreignKey: 'propiedadId'})

Departamento.belongsTo(Provincia, {foreignKey: 'provinciaId'})
Provincia.belongsTo(Ciudad, {foreignKey: 'ciudadId'})

Mensaje.belongsTo(Propiedad, {foreignKey: 'propiedadId'})
Mensaje.belongsTo(Usuario, {foreignKey: 'usuarioId'})


Usuario.hasMany(Credito, { foreignKey: 'usuarioId' })
Usuario.belongsTo(Documento, {foreignKey: 'DocumentoId'})



export {
    Propiedad,
    Categoria,
    Usuario,
    Mensaje,
    Departamento,
    Documento
}