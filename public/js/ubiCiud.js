const ciudades = [
    { id: 1, nombre: 'Bagua', provinciaId: 1 },
    { id: 2, nombre: 'Aramango', provinciaId: 1 },
    { id: 3, nombre: 'Copallín', provinciaId: 1 },
    { id: 4, nombre: 'El Parco', provinciaId: 1 },
    { id: 5, nombre: 'La Peca', provinciaId: 1 },
    { id: 6, nombre: 'Punamaca', provinciaId: 1 },

    { id: 7, nombre: 'Bongará', provinciaId: 2 },
    { id: 8, nombre: 'Chisquilla', provinciaId: 2 },
    { id: 9, nombre: 'Condorcanqui', provinciaId: 2 },
    { id: 10, nombre: 'Cocachimba', provinciaId: 2 },
    { id: 11, nombre: 'Longuita', provinciaId: 2 },
    { id: 12, nombre: 'San Carlos', provinciaId: 2 },
    { id: 13, nombre: 'San Juan', provinciaId: 2 },

    { id: 14, nombre: 'Chachapoyas', provinciaId: 3 },
    { id: 15, nombre: 'Asunción', provinciaId: 3 },
    { id: 16, nombre: 'Balsas', provinciaId: 3 },
    { id: 17, nombre: 'Chiliquín', provinciaId: 3 },
    { id: 18, nombre: 'Huancas', provinciaId: 3 },
    { id: 19, nombre: 'La Jalca', provinciaId: 3 },
    { id: 20, nombre: 'Levanto', provinciaId: 3 },
    { id: 21, nombre: 'Magdalena', provinciaId: 3 },
    { id: 22, nombre: 'Montevideo', provinciaId: 3 },
    { id: 23, nombre: 'San Nicolás', provinciaId: 3 },
    { id: 24, nombre: 'San Pablo', provinciaId: 3 },
    { id: 25, nombre: 'Tingo', provinciaId: 3 },

    { id: 26, nombre: 'Condorcanqui', provinciaId: 4 },
    { id: 27, nombre: 'Chiriaco', provinciaId: 4 },
    { id: 28, nombre: 'El Cenepa', provinciaId: 4 },
    { id: 29, nombre: 'Numpatkaim', provinciaId: 4 },
    { id: 30, nombre: 'Pampa Hermosa', provinciaId: 4 },

    { id: 31, nombre: 'Rodríguez de Mendoza', provinciaId: 5 },
    { id: 32, nombre: 'Churuja', provinciaId: 5 },
    { id: 33, nombre: 'Echarati', provinciaId: 5 },
    { id: 34, nombre: 'Las Palmas', provinciaId: 5 },

    { id: 35, nombre: 'Utcubamba', provinciaId: 6 },
    { id: 36, nombre: 'Bagua Grande', provinciaId: 6 },
    { id: 37, nombre: 'Cumba', provinciaId: 6 },
    { id: 38, nombre: 'El Milagro', provinciaId: 6 },
    { id: 39, nombre: 'La Encalada', provinciaId: 6 },
    { id: 40, nombre: 'San Carlos', provinciaId: 6 },

    { id: 41, nombre: 'Aija', provinciaId: 7 },
    { id: 42, nombre: 'Coris', provinciaId: 7 },
    { id: 43, nombre: 'Santiago de Aija', provinciaId: 7 },
    { id: 44, nombre: 'San Juan de Rontoco', provinciaId: 7 },
    { id: 45, nombre: 'San Lorenzo de Quinti', provinciaId: 7 },
    { id: 46, nombre: 'Huamachuco', provinciaId: 7 },
    { id: 47, nombre: 'La Merced', provinciaId: 7 },

    { id: 48, nombre: 'Antonio Raymondi', provinciaId: 8 },
    { id: 49, nombre: 'Pampas', provinciaId: 8 },

    { id: 50, nombre: 'Asunción', provinciaId: 9 },
    { id: 51, nombre: 'San Juan de Rontoco', provinciaId: 9 },

    { id: 52, nombre: 'Bolognesi', provinciaId: 10 },
    { id: 53, nombre: 'Cajacay', provinciaId: 10 },
    { id: 54, nombre: 'Huallanca', provinciaId: 10 },
    { id: 55, nombre: 'Jangas', provinciaId: 10 },

    { id: 56, nombre: 'Carhuaz', provinciaId: 11 },
    { id: 57, nombre: 'Crasnac', provinciaId: 11 },
    { id: 58, nombre: 'San Miguel de Aco', provinciaId: 11 },

    { id: 59, nombre: 'Carlos Fermín Fitzcarrald', provinciaId: 12 },
    { id: 60, nombre: 'San Luis', provinciaId: 12 },

    { id: 61, nombre: 'Casma', provinciaId: 13 },
    { id: 62, nombre: 'Cochato', provinciaId: 13 },
    { id: 63, nombre: 'Comandante Noel', provinciaId: 13 },
    { id: 64, nombre: 'Huambos', provinciaId: 13 },
    { id: 65, nombre: 'La Gramita', provinciaId: 13 },
    { id: 66, nombre: 'Yaután', provinciaId: 13 },

    { id: 67, nombre: 'Corongo', provinciaId: 14 },
    { id: 68, nombre: 'Acochaca', provinciaId: 14 },
    { id: 69, nombre: 'Bambas', provinciaId: 14 },
    { id: 70, nombre: 'Chiquián', provinciaId: 14 },

    { id: 71, nombre: 'Huaraz', provinciaId: 15 },
    { id: 72, nombre: 'Acclash', provinciaId: 15 },
    { id: 73, nombre: 'Cochabamba', provinciaId: 15 },
    { id: 74, nombre: 'Colcabamba', provinciaId: 15 },
    { id: 75, nombre: 'Cajacay', provinciaId: 15 },
    { id: 76, nombre: 'Cahuac', provinciaId: 15 },
    { id: 77, nombre: 'Chacas', provinciaId: 15 },
    { id: 78, nombre: 'Huandoval', provinciaId: 15 },
    { id: 79, nombre: 'San Miguel', provinciaId: 15 },

    { id: 80, nombre: 'Huari', provinciaId: 16 },
    { id: 81, nombre: 'Cajay', provinciaId: 16 },
    { id: 82, nombre: 'Cochas', provinciaId: 16 },
    { id: 83, nombre: 'San Marcos', provinciaId: 16 },

    { id: 84, nombre: 'Huarmey', provinciaId: 17 },
    { id: 85, nombre: 'Culebras', provinciaId: 17 },
    { id: 86, nombre: 'Malvas', provinciaId: 17 },

    { id: 87, nombre: 'Huaylas', provinciaId: 18 },
    { id: 88, nombre: 'Cajacay', provinciaId: 18 },
    { id: 89, nombre: 'San Luis', provinciaId: 18 },

    { id: 90, nombre: 'Mariscal Luzuriaga', provinciaId: 19 },
    { id: 91, nombre: 'Pampa de Siete Culebras', provinciaId: 19 },

    { id: 92, nombre: 'Ocros', provinciaId: 20 },
    { id: 93, nombre: 'Chacapampa', provinciaId: 20 },

    { id: 94, nombre: 'Pallasca', provinciaId: 21 },
    { id: 95, nombre: 'Conchucos', provinciaId: 21 },

    { id: 96, nombre: 'Pomabamba', provinciaId: 22 },
    { id: 97, nombre: 'Pararin', provinciaId: 22 },

    { id: 98, nombre: 'Recuay', provinciaId: 23 },
    { id: 99, nombre: 'Cotaparaco', provinciaId: 23 },

    { id: 100, nombre: 'Santa', provinciaId: 24 },
{ id: 101, nombre: 'Chimbote', provinciaId: 24 },

{ id: 102, nombre: 'Sihuas', provinciaId: 25 },
{ id: 103, nombre: 'San Juan', provinciaId: 25 },

{ id: 104, nombre: 'Yungay', provinciaId: 26 },
{ id: 105, nombre: 'Cascapara', provinciaId: 26 },
{ id: 106, nombre: 'Mancos', provinciaId: 26 },
{ id: 107, nombre: 'Shupluy', provinciaId: 26 },
{ id: 108, nombre: 'Colcabamba', provinciaId: 26 },
{ id: 109, nombre: 'Tarica', provinciaId: 26 },

{ id: 110, nombre: 'Abancay', provinciaId: 27 },
{ id: 111, nombre: 'Circa', provinciaId: 27 },
{ id: 112, nombre: 'Huaquillas', provinciaId: 27 },
{ id: 113, nombre: 'San Pedro de Cachora', provinciaId: 27 },
{ id: 114, nombre: 'Tamburco', provinciaId: 27 },
{ id: 115, nombre: 'Sayhuaya', provinciaId: 27 },
{ id: 116, nombre: 'Ccahuillay', provinciaId: 27 },
{ id: 117, nombre: 'Chacoche', provinciaId: 27 },

{ id: 118, nombre: 'Andahuaylas', provinciaId: 28 },
{ id: 119, nombre: 'Andarapa', provinciaId: 28 },
{ id: 120, nombre: 'Chalhuanca', provinciaId: 28 },
{ id: 121, nombre: 'Huancarama', provinciaId: 28 },
{ id: 122, nombre: 'Huayana', provinciaId: 28 },
{ id: 123, nombre: 'Pacobamba', provinciaId: 28 },
{ id: 124, nombre: 'San Jerónimo', provinciaId: 28 },
{ id: 125, nombre: 'San Miguel', provinciaId: 28 },

{ id: 126, nombre: 'Antabamba', provinciaId: 29 },
{ id: 127, nombre: 'Cocharcas', provinciaId: 29 },
{ id: 128, nombre: 'El Oro', provinciaId: 29 },
{ id: 129, nombre: 'La Capilla', provinciaId: 29 },
{ id: 130, nombre: 'Pampachiri', provinciaId: 29 },

{ id: 131, nombre: 'Aymaraes', provinciaId: 30 },
{ id: 132, nombre: 'Cotahuasi', provinciaId: 30 },
{ id: 133, nombre: 'Puyusca', provinciaId: 30 },
{ id: 134, nombre: 'Santiago de Pupuja', provinciaId: 30 },
{ id: 135, nombre: 'Santa Rosa', provinciaId: 30 },

{ id: 136, nombre: 'Cotabambas', provinciaId: 31 },
{ id: 137, nombre: 'Chacoche', provinciaId: 31 },
{ id: 138, nombre: 'Coyllurqui', provinciaId: 31 },
{ id: 139, nombre: 'Pallpata', provinciaId: 31 },
{ id: 140, nombre: 'Progreso', provinciaId: 31 },

{ id: 141, nombre: 'Chincheros', provinciaId: 32 },
{ id: 142, nombre: 'Chincheros', provinciaId: 32 },
{ id: 143, nombre: 'Huañec', provinciaId: 32 },
{ id: 144, nombre: 'Ninafara', provinciaId: 32 },
{ id: 145, nombre: 'Pomacocha', provinciaId: 32 },

{ id: 146, nombre: 'Grau', provinciaId: 33 },
{ id: 147, nombre: 'Chalhuanca', provinciaId: 33 },
{ id: 148, nombre: 'Curahuasi', provinciaId: 33 },
{ id: 149, nombre: 'Pampachiri', provinciaId: 33 },
{ id: 150, nombre: 'Sangara', provinciaId: 33 },

{ id: 151, nombre: 'Arequipa', provinciaId: 34 },
{ id: 152, nombre: 'Cayma', provinciaId: 34 },
{ id: 153, nombre: 'Cerro Colorado', provinciaId: 34 },
{ id: 154, nombre: 'Characato', provinciaId: 34 },
{ id: 155, nombre: 'Chiguata', provinciaId: 34 },
{ id: 156, nombre: 'La Joya', provinciaId: 34 },
{ id: 157, nombre: 'Mariano Melgar', provinciaId: 34 },
{ id: 158, nombre: 'Miraflores', provinciaId: 34 },
{ id: 159, nombre: 'Sachaca', provinciaId: 34 },
{ id: 160, nombre: 'San Juan de Tarucani', provinciaId: 34 },
{ id: 161, nombre: 'Santa Isabel de Siguas', provinciaId: 34 },
{ id: 162, nombre: 'Sierra de la Ventana', provinciaId: 34 },
{ id: 163, nombre: 'Yarabamba', provinciaId: 34 },

{ id: 164, nombre: 'Camaná', provinciaId: 35 },
{ id: 165, nombre: 'José María Quimper', provinciaId: 35 },
{ id: 166, nombre: 'Mariano Nicolás Valcárcel', provinciaId: 35 },
{ id: 167, nombre: 'Nicolás de Piérola', provinciaId: 35 },
{ id: 168, nombre: 'San José', provinciaId: 35 },
{ id: 169, nombre: 'Valle de Camaná', provinciaId: 35 },

{ id: 170, nombre: 'Caravelí', provinciaId: 36 },
{ id: 171, nombre: 'Acarí', provinciaId: 36 },
{ id: 172, nombre: 'Atico', provinciaId: 36 },
{ id: 173, nombre: 'Cahuacho', provinciaId: 36 },
{ id: 174, nombre: 'Chaparra', provinciaId: 36 },
{ id: 175, nombre: 'Coscore', provinciaId: 36 },
{ id: 176, nombre: 'Huacaya', provinciaId: 36 },
{ id: 177, nombre: 'Lluta', provinciaId: 36 },
{ id: 178, nombre: 'Quicacha', provinciaId: 36 },
{ id: 179, nombre: 'Yauca', provinciaId: 36 },

{ id: 180, nombre: 'Chocce', provinciaId: 37 },
{ id: 181, nombre: 'Cocachacra', provinciaId: 37 },
{ id: 182, nombre: 'Mañazo', provinciaId: 37 },
{ id: 183, nombre: 'Pampa de Figueroa', provinciaId: 37 },
{ id: 184, nombre: 'Sincapampa', provinciaId: 37 },

{ id: 185, nombre: 'Caylloma', provinciaId: 38 },
{ id: 186, nombre: 'Arequipa', provinciaId: 38 },
{ id: 187, nombre: 'Chivay', provinciaId: 38 },
{ id: 188, nombre: 'Coporaque', provinciaId: 38 },
{ id: 189, nombre: 'Cruz del Condor', provinciaId: 38 },
{ id: 190, nombre: 'Ichupampa', provinciaId: 38 },
{ id: 191, nombre: 'Lari', provinciaId: 38 },
{ id: 192, nombre: 'Macate', provinciaId: 38 },
{ id: 193, nombre: 'Mollendo', provinciaId: 38 },
{ id: 194, nombre: 'San Juan de Chuccho', provinciaId: 38 },

{ id: 195, nombre: 'Condesuyos', provinciaId: 39 },
{ id: 196, nombre: 'Andaray', provinciaId: 39 },
{ id: 197, nombre: 'Charcas', provinciaId: 39 },
{ id: 198, nombre: 'Chichas', provinciaId: 39 },
{ id: 199, nombre: 'Sondor', provinciaId: 39 },

{ id: 200, nombre: 'Islay', provinciaId: 40 },
{ id: 201, nombre: 'Cocachacra', provinciaId: 40 },
{ id: 202, nombre: 'Mollendo', provinciaId: 40 },
{ id: 203, nombre: 'Punta de Bombón', provinciaId: 40 },

{ id: 204, nombre: 'La Unión', provinciaId: 41 },
{ id: 205, nombre: 'Pampahuasi', provinciaId: 41 },
{ id: 206, nombre: 'Pampas', provinciaId: 41 },

{ id: 207, nombre: 'Huamanga', provinciaId: 42 },
{ id: 208, nombre: 'Ayacucho', provinciaId: 42 },
{ id: 209, nombre: 'Cangallo', provinciaId: 42 },
{ id: 210, nombre: 'Huanta', provinciaId: 42 },
{ id: 211, nombre: 'Lucanas', provinciaId: 42 },
{ id: 212, nombre: 'Parinacochas', provinciaId: 42 },
{ id: 213, nombre: 'Sucre', provinciaId: 42 },
{ id: 214, nombre: 'Víctor Fajardo', provinciaId: 42 },
{ id: 215, nombre: 'Vilcas Huamán', provinciaId: 42 },

{ id: 216, nombre: 'Huanta', provinciaId: 43 },
{ id: 217, nombre: 'Huanta', provinciaId: 43 },
{ id: 218, nombre: 'Puyusca', provinciaId: 43 },

{ id: 219, nombre: 'La Mar', provinciaId: 44 },
{ id: 220, nombre: 'San José de Ushua', provinciaId: 44 },
{ id: 221, nombre: 'San Miguel', provinciaId: 44 },

{ id: 222, nombre: 'Lucanas', provinciaId: 45 },
{ id: 223, nombre: 'Puquio', provinciaId: 45 },
{ id: 224, nombre: 'San Pedro', provinciaId: 45 },

{ id: 225, nombre: 'Cajabamba', provinciaId: 46 },
{ id: 226, nombre: 'Condebamba', provinciaId: 46 },
{ id: 227, nombre: 'San Marcos', provinciaId: 46 },

{ id: 228, nombre: 'Cajamarca', provinciaId: 47 },
{ id: 229, nombre: 'Baños del Inca', provinciaId: 47 },
{ id: 230, nombre: 'Cajabamba', provinciaId: 47 },
{ id: 231, nombre: 'La Encañada', provinciaId: 47 },
{ id: 232, nombre: 'Namora', provinciaId: 47 },

{ id: 233, nombre: 'Celendín', provinciaId: 48 },
{ id: 234, nombre: 'Balsas', provinciaId: 48 },
{ id: 235, nombre: 'Chumuch', provinciaId: 48 },
{ id: 236, nombre: 'El Palto', provinciaId: 48 },

{ id: 237, nombre: 'Chota', provinciaId: 49 },
{ id: 238, nombre: 'Chadín', provinciaId: 49 },
{ id: 239, nombre: 'Llama', provinciaId: 49 },

{ id: 240, nombre: 'Contumazá', provinciaId: 50 },
{ id: 241, nombre: 'San Benito', provinciaId: 50 },
{ id: 242, nombre: 'Tocmoche', provinciaId: 50 },

{ id: 243, nombre: 'Hualgayoc', provinciaId: 51 },
{ id: 244, nombre: 'Bambamarca', provinciaId: 51 },

{ id: 245, nombre: 'Jaén', provinciaId: 52 },
{ id: 246, nombre: 'Bellavista', provinciaId: 52 },
{ id: 247, nombre: 'Chontalí', provinciaId: 52 },

{ id: 248, nombre: 'San Ignacio', provinciaId: 53 },
{ id: 249, nombre: 'Chiclayo', provinciaId: 53 },

{ id: 250, nombre: 'San Marcos', provinciaId: 54 },
{ id: 251, nombre: 'San Miguel', provinciaId: 54 },

{ id: 252, nombre: 'San Pablo', provinciaId: 55 },
{ id: 253, nombre: 'San Juan', provinciaId: 55 },

{ id: 254, nombre: 'Santa Cruz', provinciaId: 56 },
{ id: 255, nombre: 'Marmot', provinciaId: 56 },

{ id: 256, nombre: 'Callao', provinciaId: 57 },
{ id: 257, nombre: 'La Perla', provinciaId: 57 },
{ id: 258, nombre: 'La Punta', provinciaId: 57 },
{ id: 259, nombre: 'Bellavista', provinciaId: 57 },
{ id: 260, nombre: 'Carmen de la Legua Reynoso', provinciaId: 57 },
{ id: 261, nombre: 'Ventanilla', provinciaId: 57 },

{ id: 262, nombre: 'Cusco', provinciaId: 58 },
{ id: 263, nombre: 'San Sebastián', provinciaId: 58 },
{ id: 264, nombre: 'San Jerónimo', provinciaId: 58 },
{ id: 265, nombre: 'Santiago', provinciaId: 58 },
{ id: 266, nombre: 'Cercado', provinciaId: 58 },
{ id: 267, nombre: 'Sayhuite', provinciaId: 58 },

{ id: 268, nombre: 'Acomayo', provinciaId: 59 },
{ id: 269, nombre: 'Accha', provinciaId: 59 },
{ id: 270, nombre: 'Pomacanchi', provinciaId: 59 },
{ id: 271, nombre: 'Rondocan', provinciaId: 59 },

{ id: 272, nombre: 'Anta', provinciaId: 60 },
{ id: 273, nombre: 'Huanoquite', provinciaId: 60 },
{ id: 274, nombre: 'Pampamarca', provinciaId: 60 },
{ id: 275, nombre: 'Pucyura', provinciaId: 60 },
{ id: 276, nombre: 'Soraypampa', provinciaId: 60 },

{ id: 277, nombre: 'Calca', provinciaId: 61 },
{ id: 278, nombre: 'Cachora', provinciaId: 61 },
{ id: 279, nombre: 'Lares', provinciaId: 61 },
{ id: 280, nombre: 'Pucyura', provinciaId: 61 },

{ id: 281, nombre: 'Canas', provinciaId: 62 },
{ id: 282, nombre: 'Chinchaypucyo', provinciaId: 62 },
{ id: 283, nombre: 'Layo', provinciaId: 62 },
{ id: 284, nombre: 'Quehue', provinciaId: 62 },

{ id: 285, nombre: 'Canchis', provinciaId: 63 },
{ id: 286, nombre: 'Sicuani', provinciaId: 63 },
{ id: 287, nombre: 'San Pablo', provinciaId: 63 },
{ id: 288, nombre: 'Tinta', provinciaId: 63 },

{ id: 289, nombre: 'Chumbivilcas', provinciaId: 64 },
{ id: 290, nombre: 'Livitaca', provinciaId: 64 },
{ id: 291, nombre: 'Colquemarca', provinciaId: 64 },
{ id: 292, nombre: 'Combapata', provinciaId: 64 },

{ id: 293, nombre: 'Espinar', provinciaId: 65 },
{ id: 294, nombre: 'Alto Pichigua', provinciaId: 65 },
{ id: 295, nombre: 'Cañipia', provinciaId: 65 },
{ id: 296, nombre: 'Pallpata', provinciaId: 65 },

{ id: 297, nombre: 'La Convención', provinciaId: 66 },
{ id: 298, nombre: 'Echarati', provinciaId: 66 },
{ id: 299, nombre: 'Maranura', provinciaId: 66 },
{ id: 300, nombre: 'Kimbiri', provinciaId: 66 },

{ id: 301, nombre: 'Paucartambo', provinciaId: 67 },
{ id: 302, nombre: 'Chilimarca', provinciaId: 67 },
{ id: 303, nombre: 'Paucartambo', provinciaId: 67 },

{ id: 304, nombre: 'Quispicanchi', provinciaId: 68 },
{ id: 305, nombre: 'Oropesa', provinciaId: 68 },
{ id: 306, nombre: 'Urcos', provinciaId: 68 },

{ id: 307, nombre: 'Urubamba', provinciaId: 69 },
{ id: 308, nombre: 'Yucay', provinciaId: 69 },
{ id: 309, nombre: 'Chinchero', provinciaId: 69 },
{ id: 310, nombre: 'Huayllabamba', provinciaId: 69 },

{ id: 311, nombre: 'Huancavelica', provinciaId: 70 },
{ id: 312, nombre: 'Acobamba', provinciaId: 70 },
{ id: 313, nombre: 'Anta', provinciaId: 70 },
{ id: 314, nombre: 'Ayaviri', provinciaId: 70 },

{ id: 315, nombre: 'Acobamba', provinciaId: 71 },
{ id: 316, nombre: 'Ahuac', provinciaId: 71 },
{ id: 317, nombre: 'Chaccrampa', provinciaId: 71 },
{ id: 318, nombre: 'Huayllahuara', provinciaId: 71 },

{ id: 319, nombre: 'Angaraes', provinciaId: 72 },
{ id: 320, nombre: 'Chincheros', provinciaId: 72 },
{ id: 321, nombre: 'Lircay', provinciaId: 72 },
{ id: 322, nombre: 'Pampas', provinciaId: 72 },

{ id: 323, nombre: 'Churcampa', provinciaId: 73 },
{ id: 324, nombre: 'El Carmen', provinciaId: 73 },
{ id: 325, nombre: 'Pampa Grande', provinciaId: 73 },
{ id: 326, nombre: 'San Antonio de Cachi', provinciaId: 73 },

{ id: 327, nombre: 'Tayacaja', provinciaId: 74 },
{ id: 328, nombre: 'Andahuaylas', provinciaId: 74 },
{ id: 329, nombre: 'Ccochaccasa', provinciaId: 74 },
{ id: 330, nombre: 'Salcabamba', provinciaId: 74 },

{ id: 331, nombre: 'Huánuco', provinciaId: 75 },
{ id: 332, nombre: 'Chinchao', provinciaId: 75 },
{ id: 333, nombre: 'Tantamayo', provinciaId: 75 },

{ id: 334, nombre: 'Ambo', provinciaId: 76 },
{ id: 335, nombre: 'Cahuac', provinciaId: 76 },
{ id: 336, nombre: 'San Rafael', provinciaId: 76 },

{ id: 337, nombre: 'Dos de Mayo', provinciaId: 77 },
{ id: 338, nombre: 'Huánuco', provinciaId: 77 },

{ id: 339, nombre: 'Leoncio Prado', provinciaId: 78 },
{ id: 340, nombre: 'Rondos', provinciaId: 78 },

{ id: 341, nombre: 'Pachitea', provinciaId: 79 },
{ id: 342, nombre: 'Yanas', provinciaId: 79 },

{ id: 343, nombre: 'Puerto Inca', provinciaId: 80 },
{ id: 344, nombre: 'Cruz de Mayo', provinciaId: 80 },

{ id: 345, nombre: 'Ica', provinciaId: 81 },
{ id: 346, nombre: 'La Tinguiña', provinciaId: 81 },
{ id: 347, nombre: 'Parcona', provinciaId: 81 },
{ id: 348, nombre: 'Pueblo Nuevo', provinciaId: 81 },
{ id: 349, nombre: 'Salas Guadalupe', provinciaId: 81 },

{ id: 350, nombre: 'Chincha', provinciaId: 82 },
{ id: 351, nombre: 'Alto Larán', provinciaId: 82 },
{ id: 352, nombre: 'El Carmen', provinciaId: 82 },
{ id: 353, nombre: 'Grocio Prado', provinciaId: 82 },
{ id: 354, nombre: 'Pueblo Nuevo', provinciaId: 82 },

{ id: 355, nombre: 'Nazca', provinciaId: 83 },
{ id: 356, nombre: 'Changuillo', provinciaId: 83 },
{ id: 357, nombre: 'Marcona', provinciaId: 83 },
{ id: 358, nombre: 'Vista Alegre', provinciaId: 83 },

{ id: 359, nombre: 'Palpa', provinciaId: 84 },
{ id: 360, nombre: 'Llipata', provinciaId: 84 },
{ id: 361, nombre: 'Santa Cruz', provinciaId: 84 },

{ id: 362, nombre: 'Pisco', provinciaId: 85 },
{ id: 363, nombre: 'Ayacucho', provinciaId: 85 },
{ id: 364, nombre: 'El Carmen', provinciaId: 85 },
{ id: 365, nombre: 'San Andrés', provinciaId: 85 },

{ id: 366, nombre: 'Huancayo', provinciaId: 86 },
{ id: 367, nombre: 'El Tambo', provinciaId: 86 },
{ id: 368, nombre: 'Huancan', provinciaId: 86 },
{ id: 369, nombre: 'Pucará', provinciaId: 86 },
{ id: 370, nombre: 'Santo Domingo de Acobamba', provinciaId: 86 },

{ id: 371, nombre: 'Chanchamayo', provinciaId: 87 },
{ id: 372, nombre: 'San Luis de Shuaro', provinciaId: 87 },
{ id: 373, nombre: 'Pampa Hermosa', provinciaId: 87 },

{ id: 374, nombre: 'Chupaca', provinciaId: 88 },
{ id: 375, nombre: 'Ahuac', provinciaId: 88 },

{ id: 376, nombre: 'Concepción', provinciaId: 89 },
{ id: 377, nombre: 'Aco', provinciaId: 89 },
{ id: 378, nombre: 'Chambara', provinciaId: 89 },
{ id: 379, nombre: 'Cochas', provinciaId: 89 },

{ id: 380, nombre: 'Jauja', provinciaId: 90 },
{ id: 381, nombre: 'Acolla', provinciaId: 90 },
{ id: 382, nombre: 'Canayre', provinciaId: 90 },

{ id: 383, nombre: 'Junín', provinciaId: 91 },
{ id: 384, nombre: 'Mito', provinciaId: 91 },

{ id: 385, nombre: 'Satipo', provinciaId: 92 },
{ id: 386, nombre: 'Pampa de Bellen', provinciaId: 92 },

{ id: 387, nombre: 'Tarma', provinciaId: 93 },
{ id: 388, nombre: 'La Unión', provinciaId: 93 },

{ id: 389, nombre: 'Yauli', provinciaId: 94 },
{ id: 390, nombre: 'Morococha', provinciaId: 94 },

{ id: 391, nombre: 'Trujillo', provinciaId: 95 },
{ id: 392, nombre: 'La Esperanza', provinciaId: 95 },
{ id: 393, nombre: 'El Porvenir', provinciaId: 95 },
{ id: 394, nombre: 'Laredo', provinciaId: 95 },
{ id: 395, nombre: 'Salaverry', provinciaId: 95 },
{ id: 396, nombre: 'Simbilaca', provinciaId: 95 },
{ id: 397, nombre: 'Huanchaco', provinciaId: 95 },
{ id: 398, nombre: 'Moche', provinciaId: 95 },

{ id: 399, nombre: 'Ascope', provinciaId: 96 },
{ id: 400, nombre: 'Chicama', provinciaId: 96 },
{ id: 401, nombre: 'Santiago de Cao', provinciaId: 96 },
{ id: 402, nombre: 'Casa Grande', provinciaId: 96 },
{ id: 403, nombre: 'Paiján', provinciaId: 96 },

{ id: 404, nombre: 'Chepén', provinciaId: 97 },
{ id: 405, nombre: 'Pacanga', provinciaId: 97 },
{ id: 406, nombre: 'El Prado', provinciaId: 97 },

{ id: 407, nombre: 'Gran Chimú', provinciaId: 98 },
{ id: 408, nombre: 'Guanape', provinciaId: 98 },

{ id: 409, nombre: 'Pacasmayo', provinciaId: 99 },
{ id: 410, nombre: 'Jequetepeque', provinciaId: 99 },
{ id: 411, nombre: 'San Pedro de Lloc', provinciaId: 99 },

{ id: 412, nombre: 'Sánchez Carrión', provinciaId: 100 },
{ id: 413, nombre: 'Huamachuco', provinciaId: 100 },
{ id: 414, nombre: 'Rocchacc', provinciaId: 100 },

{ id: 415, nombre: 'Virú', provinciaId: 101 },
{ id: 416, nombre: 'La Libertad', provinciaId: 101 },

{ id: 417, nombre: 'Chiclayo', provinciaId: 102 },
{ id: 418, nombre: 'Chongoyape', provinciaId: 102 },
{ id: 419, nombre: 'José Leonardo', provinciaId: 102 },
{ id: 420, nombre: 'La Victoria', provinciaId: 102 },
{ id: 421, nombre: 'Monsefu', provinciaId: 102 },

{ id: 422, nombre: 'Ferreñafe', provinciaId: 103 },
{ id: 423, nombre: 'Cañaris', provinciaId: 103 },
{ id: 424, nombre: 'Pítipo', provinciaId: 103 },

{ id: 425, nombre: 'Lambayeque', provinciaId: 104 },
{ id: 426, nombre: 'Chiclayito', provinciaId: 104 },

{ id: 427, nombre: 'Lima', provinciaId: 105 },
{ id: 428, nombre: 'Barranco', provinciaId: 105 },
{ id: 429, nombre: 'Breña', provinciaId: 105 },
{ id: 430, nombre: 'Carabayllo', provinciaId: 105 },
{ id: 431, nombre: 'Chaclacayo', provinciaId: 105 },
{ id: 432, nombre: 'Chorrillos', provinciaId: 105 },
{ id: 433, nombre: 'Cieneguilla', provinciaId: 105 },
{ id: 434, nombre: 'Comas', provinciaId: 105 },
{ id: 435, nombre: 'El Agustino', provinciaId: 105 },
{ id: 436, nombre: 'Independencia', provinciaId: 105 },
{ id: 437, nombre: 'Jesús María', provinciaId: 105 },
{ id: 438, nombre: 'La Molina', provinciaId: 105 },
{ id: 439, nombre: 'La Victoria', provinciaId: 105 },
{ id: 440, nombre: 'Lince', provinciaId: 105 },
{ id: 441, nombre: 'Magdalena del Mar', provinciaId: 105 },
{ id: 442, nombre: 'Miraflores', provinciaId: 105 },
{ id: 443, nombre: 'Pueblo Libre', provinciaId: 105 },
{ id: 444, nombre: 'San Bartolo', provinciaId: 105 },
{ id: 445, nombre: 'San Borja', provinciaId: 105 },
{ id: 446, nombre: 'San Isidro', provinciaId: 105 },
{ id: 447, nombre: 'San Juan de Lurigancho', provinciaId: 105 },
{ id: 448, nombre: 'San Juan de Miraflores', provinciaId: 105 },
{ id: 449, nombre: 'San Luis', provinciaId: 105 },
{ id: 450, nombre: 'San Martín de Porres', provinciaId: 105 },
{ id: 451, nombre: 'San Miguel', provinciaId: 105 },
{ id: 452, nombre: 'Santiago de Surco', provinciaId: 105 },
{ id: 453, nombre: 'Surquillo', provinciaId: 105 },
{ id: 454, nombre: 'Villa El Salvador', provinciaId: 105 },
{ id: 455, nombre: 'Villa María del Río Seco', provinciaId: 105 },

{ id: 456, nombre: 'Barranca', provinciaId: 106 },
{ id: 457, nombre: 'Paramonga', provinciaId: 106 },
{ id: 458, nombre: 'Pativilca', provinciaId: 106 },

{ id: 459, nombre: 'Canta', provinciaId: 107 },
{ id: 460, nombre: 'Huaros', provinciaId: 107 },
{ id: 461, nombre: 'San Bartolomé', provinciaId: 107 },

{ id: 462, nombre: 'Cañete', provinciaId: 108 },
{ id: 463, nombre: 'Asia', provinciaId: 108 },
{ id: 464, nombre: 'Calango', provinciaId: 108 },
{ id: 465, nombre: 'Cerro Azul', provinciaId: 108 },
{ id: 466, nombre: 'Chilca', provinciaId: 108 },
{ id: 467, nombre: 'Coayllo', provinciaId: 108 },
{ id: 468, nombre: 'Imperial', provinciaId: 108 },
{ id: 469, nombre: 'Lunahuaná', provinciaId: 108 },
{ id: 470, nombre: 'San Luis', provinciaId: 108 },
{ id: 471, nombre: 'San Vicente de Cañete', provinciaId: 108 },

{ id: 472, nombre: 'Huaral', provinciaId: 109 },
{ id: 473, nombre: 'Atavillos Alto', provinciaId: 109 },
{ id: 474, nombre: 'Atavillos Bajo', provinciaId: 109 },
{ id: 475, nombre: 'Chancay', provinciaId: 109 },
{ id: 476, nombre: 'Huacho', provinciaId: 109 },
{ id: 477, nombre: 'Lima', provinciaId: 109 },
{ id: 478, nombre: 'Pacaraos', provinciaId: 109 },
{ id: 479, nombre: 'Santa Cruz de Andamarca', provinciaId: 109 },

    { id: 480, nombre: 'Huarochirí', provinciaId: 110 },
    { id: 481, nombre: 'Antioquía', provinciaId: 110 },
    { id: 482, nombre: 'Aucayacu', provinciaId: 110 },
    { id: 483, nombre: 'Chicla', provinciaId: 110 },
    { id: 484, nombre: 'Laraos', provinciaId: 110 },
    { id: 485, nombre: 'Matucana', provinciaId: 110 },
    { id: 486, nombre: 'San Andrés de Tupicocha', provinciaId: 110 },
    { id: 487, nombre: 'San Mateo', provinciaId: 110 },
    { id: 488, nombre: 'San Pedro de Casta', provinciaId: 110 },
    { id: 489, nombre: 'Santa Eulalia', provinciaId: 110 },

    { id: 490, nombre: 'Huaura', provinciaId: 111 },
    { id: 491, nombre: 'Huaura', provinciaId: 111 },
    { id: 492, nombre: 'Leoncio Prado', provinciaId: 111 },
    { id: 493, nombre: 'Santa María', provinciaId: 111 },
    { id: 494, nombre: 'Végueta', provinciaId: 111 },

    { id: 495, nombre: 'Iquitos', provinciaId: 112 },
    { id: 496, nombre: 'Alfredo Vargas', provinciaId: 112 },
    { id: 497, nombre: 'Belén', provinciaId: 112 },
    { id: 498, nombre: 'Fernando Lores', provinciaId: 112 },
    { id: 499, nombre: 'San Juan Bautista', provinciaId: 112 },

    { id: 500, nombre: 'Loreto', provinciaId: 113 },
    { id: 501, nombre: 'Caballococha', provinciaId: 113 },
    { id: 502, nombre: 'Punchana', provinciaId: 113 },

    { id: 503, nombre: 'Mariscal Ramón Castilla', provinciaId: 114 },
    { id: 504, nombre: 'Yavarí', provinciaId: 114 },

    { id: 505, nombre: 'Putumayo', provinciaId: 115 },
    { id: 506, nombre: 'Tigüino', provinciaId: 115 },

    { id: 507, nombre: 'Requena', provinciaId: 116 },
    { id: 508, nombre: 'Sapuena', provinciaId: 116 },

    { id: 509, nombre: 'Ucayali', provinciaId: 117 },
    { id: 510, nombre: 'San Antonio', provinciaId: 117 },

    { id: 511, nombre: 'Tambopata', provinciaId: 119 },
    { id: 512, nombre: 'Las Piedras', provinciaId: 119 },
    { id: 513, nombre: 'Tierra Blanca', provinciaId: 119 },

    { id: 514, nombre: 'Ilo', provinciaId: 120 },
    { id: 515, nombre: 'Ilo', provinciaId: 120 },

    { id: 516, nombre: 'Mariscal Nieto', provinciaId: 121 },
    { id: 517, nombre: 'Moquegua', provinciaId: 121 },
    { id: 518, nombre: 'Samegua', provinciaId: 121 },

    { id: 519, nombre: 'Pasco', provinciaId: 122 },
    { id: 520, nombre: 'Chupaca', provinciaId: 122 },
    { id: 521, nombre: 'Ticlacayan', provinciaId: 122 },

    { id: 522, nombre: 'Daniel Alcides Carrión', provinciaId: 123 },
    { id: 523, nombre: 'Yanahuanca', provinciaId: 123 },

    { id: 524, nombre: 'Oxapampa', provinciaId: 124 },
    { id: 525, nombre: 'Villa Rica', provinciaId: 124 },

    { id: 526, nombre: 'Piura', provinciaId: 125 },
    { id: 527, nombre: 'Castilla', provinciaId: 125 },
    { id: 528, nombre: 'Cura Mori', provinciaId: 125 },
    { id: 529, nombre: 'El Tallán', provinciaId: 125 },
    { id: 530, nombre: 'La Arena', provinciaId: 125 },
    { id: 531, nombre: 'Las Lomas', provinciaId: 125 },
    { id: 532, nombre: 'Piura', provinciaId: 125 },
    { id: 533, nombre: 'Sullana', provinciaId: 125 },
    
  { id: 534, nombre: 'Ayabaca', provinciaId: 126 },
  { id: 535, nombre: 'Frías', provinciaId: 126 },
  { id: 536, nombre: 'Pacaipampa', provinciaId: 126 },
  { id: 537, nombre: 'Sapillica', provinciaId: 126 },

  { id: 538, nombre: 'Huancabamba', provinciaId: 127 },
  { id: 539, nombre: 'Canchaque', provinciaId: 127 },
  { id: 540, nombre: 'Huarmaca', provinciaId: 127 },
  { id: 541, nombre: 'Sondorillo', provinciaId: 127 },

  { id: 542, nombre: 'Morropón', provinciaId: 128 },
  { id: 543, nombre: 'Chocán', provinciaId: 128 },
  { id: 544, nombre: 'La Matanza', provinciaId: 128 },
  { id: 545, nombre: 'Salitral', provinciaId: 128 },

  { id: 546, nombre: 'Paita', provinciaId: 129 },
  { id: 547, nombre: 'Amotape', provinciaId: 129 },
  { id: 548, nombre: 'Colán', provinciaId: 129 },
  { id: 549, nombre: 'La Huaca', provinciaId: 129 },

  { id: 550, nombre: 'Sullana', provinciaId: 130 },
  { id: 551, nombre: 'Bellavista', provinciaId: 130 },
  { id: 552, nombre: 'Chiclayo', provinciaId: 130 },
  { id: 553, nombre: 'Querecotillo', provinciaId: 130 },

  { id: 554, nombre: 'Talara', provinciaId: 131 },
  { id: 555, nombre: 'El Alto', provinciaId: 131 },
  { id: 556, nombre: 'La Brea', provinciaId: 131 },
  { id: 557, nombre: 'Los Órganos', provinciaId: 131 },

  { id: 558, nombre: 'Sechura', provinciaId: 132 },
  { id: 559, nombre: 'Cristo Nos Valga', provinciaId: 132 },
  { id: 560, nombre: 'Vice', provinciaId: 132 },

  { id: 561, nombre: 'Puno', provinciaId: 133 },
  { id: 562, nombre: 'Acara', provinciaId: 133 },
  { id: 563, nombre: 'Atuncolla', provinciaId: 133 },
  { id: 564, nombre: 'Chucuito', provinciaId: 133 },
  { id: 565, nombre: 'Paucarcolla', provinciaId: 133 },
  { id: 566, nombre: 'San Miguel', provinciaId: 133 },
  { id: 567, nombre: 'Tiquillaca', provinciaId: 133 },

  { id: 568, nombre: 'Chucuito', provinciaId: 134 },
  { id: 569, nombre: 'Desaguadero', provinciaId: 134 },
  { id: 570, nombre: 'Ilave', provinciaId: 134 },
  { id: 571, nombre: 'Pocra', provinciaId: 134 },
  { id: 572, nombre: 'Santa Rosa', provinciaId: 134 },

  { id: 573, nombre: 'San Antonio de Putina', provinciaId: 135 },
  { id: 574, nombre: 'Putina', provinciaId: 135 },

  { id: 575, nombre: 'San Román', provinciaId: 136 },
  { id: 576, nombre: 'Juliaca', provinciaId: 136 },

  { id: 577, nombre: 'Moyobamba', provinciaId: 137 },
  { id: 578, nombre: 'Bajo Huallaga', provinciaId: 137 },

  { id: 579, nombre: 'Marmot', provinciaId: 139 },
  { id: 580, nombre: 'Bellavista', provinciaId: 138 },
  { id: 581, nombre: 'El Dorado', provinciaId: 138 },

  { id: 582, nombre: 'El Dorado', provinciaId: 139 },
  { id: 583, nombre: 'Huallaga', provinciaId: 139 },

  { id: 584, nombre: 'Huallaga', provinciaId: 140 },
  { id: 585, nombre: 'Lamas', provinciaId: 140 },

  { id: 586, nombre: 'Lamas', provinciaId: 141 },
  { id: 587, nombre: 'Mariscal Cáceres', provinciaId: 141 },

  { id: 588, nombre: 'Mariscal Cáceres', provinciaId: 142 },
  { id: 589, nombre: 'Picota', provinciaId: 142 },

  { id: 590, nombre: 'Picota', provinciaId: 143 },
  { id: 591, nombre: 'Rioja', provinciaId: 143 },

  { id: 592, nombre: 'Rioja', provinciaId: 144 },
  { id: 593, nombre: 'San Martín', provinciaId: 144 },

  { id: 594, nombre: 'San Martín', provinciaId: 145 },
  { id: 595, nombre: 'Tocache', provinciaId: 145 },

  { id: 596, nombre: 'Saposoa', provinciaId: 146 },
  { id: 597, nombre: 'Pasarraya', provinciaId: 146 },
  { id: 598, nombre: 'Piscoyacu', provinciaId: 146 },
  { id: 599, nombre: 'El Eslabón', provinciaId: 146 },
  { id: 600, nombre: 'Alto Saposoa', provinciaId: 146 },
  { id: 601, nombre: 'Sacanche', provinciaId: 146 },

  { id: 602, nombre: 'Tacna', provinciaId: 147 },
  { id: 603, nombre: 'Candarave', provinciaId: 147 },
  
  { id: 604, nombre: 'Jorge Basadre', provinciaId: 148 },
  { id: 605, nombre: 'Tarata', provinciaId: 148 },

  { id: 606, nombre: 'Tumbes', provinciaId: 149 },
  { id: 607, nombre: 'Pampas de Hospital', provinciaId: 149 },
  { id: 608, nombre: 'San Jacinto', provinciaId: 149 },
  { id: 609, nombre: 'San Juan de la Virgen', provinciaId: 149 },
  { id: 610, nombre: 'La Cruz', provinciaId: 149 },
  { id: 611, nombre: 'Matapalo', provinciaId: 149 },
  { id: 612, nombre: 'Punta Sal', provinciaId: 149 },

  { id: 613, nombre: 'Contralmirante Villar', provinciaId: 150 },

  { id: 614, nombre: 'Zorritos', provinciaId: 151 },
  { id: 615, nombre: 'Canoas de Punta Sal', provinciaId: 151 },

  { id: 616, nombre: 'Pucallpa', provinciaId: 152 },
  { id: 617, nombre: 'Callería', provinciaId: 152 },
  { id: 618, nombre: 'Manantay', provinciaId: 152 },
  { id: 619, nombre: 'Yarinacocha', provinciaId: 152 },

  { id: 620, nombre: 'Atalaya', provinciaId: 153 },
  { id: 621, nombre: 'Sepahua', provinciaId: 153 },
  { id: 622, nombre: 'Tahuania', provinciaId: 153 },
  { id: 623, nombre: 'Jairén', provinciaId: 153 },
  { id: 624, nombre: 'Inapari', provinciaId: 153 },

  { id: 625, nombre: 'Coronel Portillo', provinciaId: 154 },
  { id: 626, nombre: 'Callería', provinciaId: 154 },
  { id: 627, nombre: 'Manantay', provinciaId: 154 },
  { id: 628, nombre: 'Yarinacocha', provinciaId: 154 }

]

function actualizarCiudades() {
    const provinciaId = document.getElementById('provincia').value;  // Obtén el ID del departamento seleccionado
    const ciudadesSelect = document.getElementById('ciudad');  // El select de provincias
    
    // Limpia las provincias actuales
    ciudadesSelect.innerHTML = '<option value="">- Seleccione -</option>';
    
    // Filtra las provincias por el ID del departamento seleccionado
    const ciudadesFiltradas = ciudades.filter(ciudad => ciudad.provinciaId == provinciaId);
    
    // Añade las provincias filtradas al select de provincias
    ciudadesFiltradas.forEach(ciudad => {
        const option = document.createElement('option');
        option.value = ciudad.id;
        option.textContent = ciudad.nombre;
        ciudadesSelect.appendChild(option);
    });
}