// Ejemplo de estructura de provincias
const provincias = [
    { id: 1, nombre: 'Bagua', departamentoId: 1 },
    { id: 2, nombre: 'Bongara', departamentoId: 1 },
    { id: 3, nombre: 'Chachapoyas', departamentoId: 1 },
    { id: 4, nombre: 'Condorcanqui', departamentoId: 1 },
    { id: 5, nombre: 'Rodriguez de Mendoza', departamentoId: 1 },
    { id: 6, nombre: 'Utcubamba', departamentoId: 1 },

    { id: 7, nombre: 'Aija', departamentoId: 2 },
    { id: 8, nombre: 'Antonio Raymondi', departamentoId: 2 },
    { id: 9, nombre: 'Asunción', departamentoId: 2 },
    { id: 10, nombre: 'Bolognesi', departamentoId: 2 },
    { id: 11, nombre: 'Carhuaz', departamentoId: 2 },
    { id: 12, nombre: 'Carlos Fermín Fitzcarrald', departamentoId: 2 },
    { id: 13, nombre: 'Casma', departamentoId: 2 },
    { id: 14, nombre: 'Corongo', departamentoId: 2 },
    { id: 15, nombre: 'Huaraz', departamentoId: 2 },
    { id: 16, nombre: 'Huari', departamentoId: 2 },
    { id: 17, nombre: 'Huarmey', departamentoId: 2 },
    { id: 18, nombre: 'Huaylas', departamentoId: 2 },
    { id: 19, nombre: 'Mariscal Luzuriaga', departamentoId: 2 },
    { id: 20, nombre: 'Ocros', departamentoId: 2 },
    { id: 21, nombre: 'Pallasca', departamentoId: 2 },
    { id: 22, nombre: 'Pomabamba', departamentoId: 2 },
    { id: 23, nombre: 'Recuay', departamentoId: 2 },
    { id: 24, nombre: 'Santa', departamentoId: 2 },
    { id: 25, nombre: 'Sihuas', departamentoId: 2 },
    { id: 26, nombre: 'Yungay', departamentoId: 2 },

    { id: 27, nombre: 'Abancay', departamentoId: 3 },
    { id: 28, nombre: 'Andahuaylas', departamentoId: 3 },
    { id: 29, nombre: 'Antabamba', departamentoId: 3 },
    { id: 30, nombre: 'Aymaraes', departamentoId: 3 },
    { id: 31, nombre: 'Cotabambas', departamentoId: 3 },
    { id: 32, nombre: 'Chincheros', departamentoId: 3 },
    { id: 33, nombre: 'Grau', departamentoId: 3 },

    { id: 34, nombre: 'Arequipa', departamentoId: 4 },
    { id: 35, nombre: 'Camaná', departamentoId: 4 },
    { id: 36, nombre: 'Caravelí', departamentoId: 4 },
    { id: 37, nombre: 'Castilla', departamentoId: 4 },
    { id: 38, nombre: 'Condesuyos', departamentoId: 4 },
    { id: 39, nombre: 'La Unión', departamentoId: 4 },
    { id: 40, nombre: 'Islay', departamentoId: 4 },

    { id: 41, nombre: 'Cangallo', departamentoId: 5 },
    { id: 42, nombre: 'Huamanga', departamentoId: 5 },
    { id: 43, nombre: 'Huanta', departamentoId: 5 },
    { id: 44, nombre: 'La Mar', departamentoId: 5 },
    { id: 45, nombre: 'Lucanas', departamentoId: 5 },

    { id: 46, nombre: 'Cajabamba', departamentoId: 6 },
    { id: 47, nombre: 'Cajamarca', departamentoId: 6 },
    { id: 48, nombre: 'Celendín', departamentoId: 6 },
    { id: 49, nombre: 'Chota', departamentoId: 6 },
    { id: 50, nombre: 'Contumazá', departamentoId: 6 },
    { id: 51, nombre: 'Hualgayoc', departamentoId: 6 },
    { id: 52, nombre: 'Jaén', departamentoId: 6 },
    { id: 53, nombre: 'San Ignacio', departamentoId: 6 },
    { id: 54, nombre: 'San Marcos', departamentoId: 6 },
    { id: 55, nombre: 'San Pablo', departamentoId: 6 },
    { id: 56, nombre: 'Santa Cruz', departamentoId: 6 },

    { id: 57, nombre: 'Callao', departamentoId: 7 },

    { id: 58, nombre: 'Cusco', departamentoId: 8 },
    { id: 59, nombre: 'Acomayo', departamentoId: 8 },
    { id: 60, nombre: 'Anta', departamentoId: 8 },
    { id: 61, nombre: 'Calca', departamentoId: 8 },
    { id: 62, nombre: 'Canas', departamentoId: 8 },
    { id: 63, nombre: 'Canchis', departamentoId: 8 },
    { id: 64, nombre: 'Chumbivilcas', departamentoId: 8 },
    { id: 65, nombre: 'Espinar', departamentoId: 8 },
    { id: 66, nombre: 'La Convención', departamentoId: 8 },
    { id: 67, nombre: 'Paucartambo', departamentoId: 8 },
    { id: 68, nombre: 'Quispicanchi', departamentoId: 8 },
    { id: 69, nombre: 'Urubamba', departamentoId: 8 },

    { id: 70, nombre: 'Huancavelica', departamentoId: 9 },
    { id: 71, nombre: 'Acobamba', departamentoId: 9 },
    { id: 72, nombre: 'Angaraes', departamentoId: 9 },
    { id: 73, nombre: 'Churcampa', departamentoId: 9 },
    { id: 74, nombre: 'Tayacaja', departamentoId: 9 },

    { id: 75, nombre: 'Huánuco', departamentoId: 10 },
    { id: 76, nombre: 'Ambo', departamentoId: 10 },
    { id: 77, nombre: 'Dos de Mayo', departamentoId: 10 },
    { id: 78, nombre: 'Leoncio Prado', departamentoId: 10 },
    { id: 79, nombre: 'Pachitea', departamentoId: 10 },
    { id: 80, nombre: 'Puerto Inca', departamentoId: 10 },

    { id: 81, nombre: 'Ica', departamentoId: 11 },
    { id: 82, nombre: 'Chincha', departamentoId: 11 },
    { id: 83, nombre: 'Nasca', departamentoId: 11 },
    { id: 84, nombre: 'Palpa', departamentoId: 11 },
    { id: 85, nombre: 'Pisco', departamentoId: 11 },

    { id: 86, nombre: 'Huancayo', departamentoId: 12 },
    { id: 87, nombre: 'Chanchamayo', departamentoId: 12 },
    { id: 88, nombre: 'Chupaca', departamentoId: 12 },
    { id: 89, nombre: 'Concepción', departamentoId: 12 },
    { id: 90, nombre: 'Jauja', departamentoId: 12 },
    { id: 91, nombre: 'Junín', departamentoId: 12 },
    { id: 92, nombre: 'Satipo', departamentoId: 12 },
    { id: 93, nombre: 'Tarma', departamentoId: 12 },
    { id: 94, nombre: 'Yauli', departamentoId: 12 },

    { id: 95, nombre: 'Trujillo', departamentoId: 13 },
    { id: 96, nombre: 'Ascope', departamentoId: 13 },
    { id: 97, nombre: 'Chepén', departamentoId: 13 },
    { id: 98, nombre: 'Gran Chimú', departamentoId: 13 },
    { id: 99, nombre: 'Pacasmayo', departamentoId: 13 },
    { id: 100, nombre: 'Sanchez Carrion', departamentoId: 13 },
    { id: 101, nombre: 'Viru', departamentoId: 13 },

    { id: 102, nombre: 'Chiclayo', departamentoId: 14 },    
    { id: 103, nombre: 'Ferreñafe', departamentoId: 14 },
    { id: 104, nombre: 'Lambayeque', departamentoId: 14 },

    { id: 105, nombre: 'Lima', departamentoId: 15 },
    { id: 106, nombre: 'Barranca', departamentoId: 15 },
    { id: 107, nombre: 'Canta', departamentoId: 15 },
    { id: 108, nombre: 'Cañete', departamentoId: 15 },
    { id: 109, nombre: 'Huaral', departamentoId: 15 },
    { id: 110, nombre: 'Huarochirí', departamentoId: 15 },
    { id: 111, nombre: 'Huaura', departamentoId: 15 },

    { id: 112, nombre: 'Alto Amazonas', departamentoId: 16 },
    { id: 113, nombre: 'Loreto', departamentoId: 16 },
    { id: 114, nombre: 'Mariscal Ramón Castilla', departamentoId: 16 },
    { id: 115, nombre: 'Maynas', departamentoId: 16 },
    { id: 116, nombre: 'Requena', departamentoId: 16 },
    { id: 117, nombre: 'Ucayali', departamentoId: 16 },

    { id: 118, nombre: 'Tahuamanu', departamentoId: 17 },
    { id: 119, nombre: 'Tambopata', departamentoId: 17 },

    { id: 120, nombre: 'Ilo', departamentoId: 18 },
    { id: 121, nombre: 'Mariscal Nieto', departamentoId: 18 },

    { id: 122, nombre: 'Pasco', departamentoId: 19 },
    { id: 123, nombre: 'Daniel Alcides Carrión', departamentoId: 19 },
    { id: 124, nombre: 'Oxapampa', departamentoId: 19 },

    { id: 125, nombre: 'Piura', departamentoId: 20 },
    { id: 126, nombre: 'Ayabaca', departamentoId: 20 },
    { id: 127, nombre: 'Huancabamba', departamentoId: 20 },
    { id: 128, nombre: 'Morropon', departamentoId: 20 },
    { id: 129, nombre: 'Paita', departamentoId: 20 },
    { id: 130, nombre: 'Sullana', departamentoId: 20 },
    { id: 131, nombre: 'Talara', departamentoId: 20 },
    { id: 132, nombre: 'Sechura', departamentoId: 20 },

    { id: 133, nombre: 'Puno', departamentoId: 21 },
    { id: 134, nombre: 'Chucuito', departamentoId: 21 },
    { id: 135, nombre: 'San Antonio de Putina', departamentoId: 21 },
    { id: 136, nombre: 'San Román', departamentoId: 21 },

    { id: 137, nombre: 'Moyobamba', departamentoId: 22 },
    { id: 138, nombre: 'Bellavista', departamentoId: 22 },
    { id: 139, nombre: 'El Dorado', departamentoId: 22 },
    { id: 140, nombre: 'Huallaga', departamentoId: 22 },
    { id: 141, nombre: 'Lamas', departamentoId: 22 },
    { id: 142, nombre: 'Mariscal Cáceres', departamentoId: 22 },
    { id: 143, nombre: 'Picota', departamentoId: 22 },
    { id: 144, nombre: 'Rioja', departamentoId: 22 },
    { id: 145, nombre: 'San Martín', departamentoId: 22 },
    { id: 146, nombre: 'Saposoa', departamentoId: 22 },

    { id: 147, nombre: 'Tacna', departamentoId: 23 },
    { id: 148, nombre: 'Jorge Basadre', departamentoId: 23 },

    { id: 149, nombre: 'Tumbes', departamentoId: 24 },
    { id: 150, nombre: 'Contralmirante Villar', departamentoId: 24 },
    { id: 151, nombre: 'Zorritos', departamentoId: 24 },
    
    { id: 152, nombre: 'Pucallpa', departamentoId: 25 },
    { id: 153, nombre: 'Atalaya', departamentoId: 25 },
    { id: 154, nombre: 'Coronel Portillo', departamentoId: 25 }
];


// Suponiendo que `departamentos` y `provincias` están disponibles como arrays de objetos
// y que `departamentoId` es el ID del departamento seleccionado
function actualizarProvincias() {
    const departamentoId = document.getElementById('departamento').value;  // Obtén el ID del departamento seleccionado
    const provinciasSelect = document.getElementById('provincia');  // El select de provincias
    
    // Limpia las provincias actuales
    provinciasSelect.innerHTML = '<option value="">- Seleccione -</option>';
    
    // Filtra las provincias por el ID del departamento seleccionado
    const provinciasFiltradas = provincias.filter(provincia => provincia.departamentoId == departamentoId);
    
    // Añade las provincias filtradas al select de provincias
    provinciasFiltradas.forEach(provincia => {
        const option = document.createElement('option');
        option.value = provincia.id;
        option.textContent = provincia.nombre;
        provinciasSelect.appendChild(option);
    });
}


