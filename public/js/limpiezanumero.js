mensaje.usuario.telefono = limpiarNumero(mensaje.usuario.telefono);

function limpiarNumero(telefono) {
    return telefono.replace(/\D/g, '');
}