ALTER TABLE `categorias`;
INSERT INTO `categorias` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Casa', '2024-05-25 04:50:53', '2024-05-25 04:50:53'),
(2, 'Departamento', '2024-05-25 04:50:53', '2024-05-25 04:50:53'),
(3, 'Bodega', '2024-05-25 04:50:53', '2024-05-25 04:50:53'),
(4, 'Terreno', '2024-05-25 04:50:53', '2024-05-25 04:50:53'),
(5, 'Cabaña', '2024-05-25 04:50:53', '2024-05-25 04:50:53');


ALTER TABLE `documentos` ;
INSERT INTO `documentos` (`id`, `nombre`) VALUES
(1, 'DNI'),
(2, 'Carnet de Exranjeria');

ALTER TABLE `departamentos` ;
INSERT INTO departamentos (nombre) VALUES
('Amazonas'),
('Áncash'),
('Apurímac'),
('Arequipa'),
('Ayacucho'),
('Cajamarca'),
('Callao'),
('Cusco'),
('Huancavelica'),
('Huánuco'),
('Ica'),
('Junín'),
('La Libertad'),
('Lambayeque'),
('Lima'),
('Loreto'),
('Madre de Dios'),
('Moquegua'),
('Pasco'),
('Piura'),
('Puno'),
('San Martín'),
('Tacna'),
('Tumbes'),
('Ucayali');

-- ---------------------PROVINCIAS-----------------------------------------------

INSERT INTO `provincias`(`nombre`, `departamentoId`) VALUES 
('Bagua','1'),
('Bongara','1'),
('Chachapoyas','1'),
 ('Condorcanqui','1'),
 ('Rodriguez de Mendoza','1'),
 ('Utcubamba','1');

INSERT INTO `provincias`(`nombre`, `departamentoId`) VALUES
('Aija', 2),
('Antonio Raymondi', 2),
('Asunción', 2),
 ('Bolognesi', 2),
('Carhuaz', 2),
('Carlos Fermín Fitzcarrald', 2),
('Casma', 2),
('Corongo', 2),
('Huaraz', 2),
('Huari', 2),
('Huarmey', 2),
('Huaylas', 2),
('Mariscal Luzuriaga', 2),
('Ocros', 2),
('Pallasca', 2),
('Pomabamba', 2),
('Recuay', 2),
('Santa', 2),
('Sihuas', 2),
('Yungay', 2);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Abancay', 3);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Andahuaylas', 3);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Antabamba', 3);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Aymaraes', 3);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Cotabambas', 3);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chincheros', 3);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Grau', 3);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Arequipa', 4);       -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Camaná', 4);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Caravelí', 4);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Castilla', 4);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Condesuyos', 4);
INSERT INTO provincias (nombre, departamentoId) VALUES ('La Unión', 4);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Islay', 4);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Cangallo', 5);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Huamanga', 5);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Huanta', 5);
INSERT INTO provincias (nombre, departamentoId) VALUES ('La Mar', 5);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Lucanas', 5);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Cajabamba', 6);  
INSERT INTO provincias (nombre, departamentoId) VALUES ('Cajamarca', 6);        
INSERT INTO provincias (nombre, departamentoId) VALUES ('Celendín', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chota', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Contumazá', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Hualgayoc', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Jaén', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('San Ignacio', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('San Marcos', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('San Pablo', 6);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Santa Cruz', 6);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Callao', 7);  -- Capital y única provincia

INSERT INTO provincias (nombre, departamentoId) VALUES ('Cusco', 8);           -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Acomayo', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Anta', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Calca', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Canas', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Canchis', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chumbivilcas', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Espinar', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('La Convención', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Paucartambo', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Quispicanchi', 8);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Urubamba', 8);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Huancavelica', 9);       -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Acobamba', 9);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Angaraes', 9);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Churcampa', 9);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Tayacaja', 9);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Huánuco', 10);           -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Ambo', 10);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Dos de Mayo', 10);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Leoncio Prado', 10);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Pachitea', 10);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Puerto Inca', 10);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Ica', 11);             -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chincha', 11);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Nasca', 11);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Palpa', 11);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Pisco', 11);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Huancayo', 12);          -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chanchamayo', 12);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chupaca', 12);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Concepción', 12);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Jauja', 12);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Junín', 12);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Satipo', 12);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Tarma', 12);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Yauli', 12);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Trujillo', 13);          -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Ascope', 13);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chepén', 13);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Gran Chimú', 13);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Pacasmayo', 13);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Sanchez Carrion', 13);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Viru', 13);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Chiclayo', 14);          -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Ferreñafe', 14);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Lambayeque', 14);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Lima', 15);              -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Barranca', 15);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Canta', 15);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Cañete', 15);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Huaral', 15);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Huarochirí', 15);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Huaura', 15);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Alto Amazonas', 16);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Loreto', 16);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Mariscal Ramón Castilla', 16);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Maynas', 16);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Requena', 16);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Ucayali', 16);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Tahuamanu', 17);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Tambopata', 17);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Ilo', 18);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Mariscal Nieto', 18);         

INSERT INTO provincias (nombre, departamentoId) VALUES ('Pasco', 19);              -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Daniel Alcides Carrión', 19);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Oxapampa', 19);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Piura', 20);              -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Ayabaca', 20);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Huancabamba', 20);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Morropon', 20);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Paita', 20);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Sullana', 20);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Talara', 20);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Sechura', 20);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Puno', 21);              -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Chucuito', 21);
INSERT INTO provincias (nombre, departamentoId) VALUES ('San Antonio de Putina', 21);
INSERT INTO provincias (nombre, departamentoId) VALUES ('San Román', 21);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Moyobamba', 22);          -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Bellavista', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('El Dorado', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Huallaga', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Lamas', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Mariscal Cáceres', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Picota', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Rioja', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('San Martín', 22);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Saposoa', 22);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Tacna', 23);              -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Jorge Basadre', 23);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Tumbes', 24);              -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Contralmirante Villar', 24);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Zorritos', 24);

INSERT INTO provincias (nombre, departamentoId) VALUES ('Pucallpa', 25);            -- Capital
INSERT INTO provincias (nombre, departamentoId) VALUES ('Atalaya', 25);
INSERT INTO provincias (nombre, departamentoId) VALUES ('Coronel Portillo', 25);


-- CIUDADES ------------------------------------------
INSERT INTO ciudades (nombre, provinciaId) 
VALUES 


('Bagua', '1'), 
('Aramango', '1'),
('Copallín', '1'),
('El Parco', '1'),
('La Peca', '1'),
('Punamaca', '1'),

('Bongará', '2'),
('Chisquilla', '2'),
('Condorcanqui', '2'),
('Cocachimba', '2'),
('Longuita', '2'),
('San Carlos', '2'),
('San Juan', '2'),

('Chachapoyas', '3'),
('Asunción', '3'),
('Balsas', '3'),
('Chiliquín', '3'),
('Huancas', '3'),
('La Jalca', '3'),
('Levanto', '3'),
('Magdalena', '3'),
('Montevideo', '3'),
('San Nicolás', '3'),
('San Pablo', '3'),
('Tingo', '3'),

('Condorcanqui', '4'),
('Chiriaco', '4'),
('El Cenepa', '4'),
('Numpatkaim', '4'),
('Pampa Hermosa', '4'),

('Rodríguez de Mendoza', '5'),
('Churuja', '5'),
('Echarati', '5'),
('Las Palmas', '5'),

('Utcubamba', '6'),
('Bagua Grande', '6'),
('Cumba', '6'),
('El Milagro', '6'),
('La Encalada', '6'),
('San Carlos', '6'),

('Aija', '7'),
('Coris', '7'),
('Santiago de Aija', '7'),
('San Juan de Rontoco', '7'),
('San Lorenzo de Quinti', '7'),
('Huamachuco', '7'),
('La Merced', '7'),

('Antonio Raymondi', '8'),
('Pampas', '8'),

('Asunción', '9'),
('San Juan de Rontoco', '9'),

('Bolognesi', '10'),
('Cajacay', '10'),
('Huallanca', '10'),
('Jangas', '10'),

('Carhuaz', '11'),
('Crasnac', '11'),
('San Miguel de Aco', '11'),

('Carlos Fermín Fitzcarrald', '12'),
('San Luis', '12'),


('Casma', '13'),
('Cochato', '13'),
('Comandante Noel', '13'),
('Huambos', '13'),
('La Gramita', '13'),
('Yaután', '13'),

('Corongo', '14'),
('Acochaca', '14'),
('Bambas', '14'),
('Chiquián', '14'),

('Huaraz', '15'),
('Acclash', '15'),
('Cochabamba', '15'),
('Colcabamba', '15'),
('Cajacay', '15'),
('Cahuac', '15'),
('Chacas', '15'),
('Huandoval', '15'),
('San Miguel', '15'),

('Huari', '16'),
('Cajay', '16'),
('Cochas', '16'),
('San Marcos', '16'),

('Huarmey', '17'),
('Culebras', '17'),
('Malvas', '17'),

('Huaylas', '18'),
('Cajacay', '18'),
('San Luis', '18'),

('Mariscal Luzuriaga', '19'),
('Pampa de Siete Culebras', '19'),

('Ocros', '20'),
('Chacapampa', '20'),

('Pallasca', '21'),
('Conchucos', '21'),

('Pomabamba', '22'),
('Pararin', '22'),

('Recuay', '23'),
('Cotaparaco', '23'),

('Santa', '24'),
('Chimbote', '24'),

('Sihuas', '25'),
('San Juan', '25'),

('Yungay', '26'),
('Cascapara', '26'),
('Mancos', '26'),
('Shupluy', '26'),
('Colcabamba', '26'),
('Tarica', '26'),

('Abancay', '27'),
('Circa', '27'),
('Huaquillas', '27'),
('San Pedro de Cachora', '27'),
('Tamburco', '27'),
('Sayhuaya', '27'),
('Ccahuillay', '27'),
('Chacoche', '27'),

('Andahuaylas', '28'),
('Andarapa', '28'),
('Chalhuanca', '28'),
('Huancarama', '28'),
('Huayana', '28'),
('Pacobamba', '28'),
('San Jerónimo', '28'),
('San Miguel', '28'),
  
('Antabamba', '29'),
('Cocharcas', '29'),
('El Oro', '29'),
('La Capilla', '29'),
('Pampachiri', '29'),


('Aymaraes', '30'),
('Cotahuasi', '30'),
('Puyusca', '30'),
('Santiago de Pupuja', '30'),
('Santa Rosa', '30'),

('Cotabambas', '31'),
('Chacoche', '31'),
('Coyllurqui', '31'),
('Pallpata', '31'),
('Progreso', '31'),

('Chincheros', '32'),
('Chincheros', '32'),
('Huañec', '32'),
('Ninafara', '32'),
('Pomacocha', '32'),

('Grau', '33'),
('Chalhuanca', '33'),
('Curahuasi', '33'),
('Pampachiri', '33'),
('Sangara', '33'),

('Arequipa', '34'),
('Cayma', '34'),
('Cerro Colorado', '34'),
('Characato', '34'),
('Chiguata', '34'),
('La Joya', '34'),
('Mariano Melgar', '34'),
('Miraflores', '34'),
('Sachaca', '34'),
('San Juan de Tarucani', '34'),
('Santa Isabel de Siguas', '34'),
('Sierra de la Ventana', '34'),
('Yarabamba', '34'),

('Camaná', '35'),
('José María Quimper', '35'),
('Mariano Nicolás Valcárcel', '35'),
('Nicolás de Piérola', '35'),
('San José', '35'),
('Valle de Camaná', '35'),

('Caravelí', '36'),
('Acarí', '36'),
('Atico', '36'),
('Cahuacho', '36'),
('Chaparra', '36'),
('Coscore', '36'),
('Huacaya', '36'),
('Lluta', '36'),
('Quicacha', '36'),
('Yauca', '36'),

('Chocce', '37'),
('Cocachacra', '37'),
('Mañazo', '37'),
('Pampa de Figueroa', '37'),
('Sincapampa', '37'),

('Caylloma', '38'),
('Arequipa', '38'),
('Chivay', '38'),
('Coporaque', '38'),
('Cruz del Condor', '38'),
('Ichupampa', '38'),
('Lari', '38'),
('Macate', '38'),
('Mollendo', '38'),
('San Juan de Chuccho', '38'),

('Condesuyos', '39'),
('Andaray', '39'),
('Charcas', '39'),
('Chichas', '39'),
('Sondor', '39'),

('Islay', '40'),
('Cocachacra', '40'),
('Mollendo', '40'),
('Punta de Bombón', '40'),


('La Unión', '41'),
('Pampahuasi', '41'),
('Pampas', '41'),

('Huamanga', '42'),
('Ayacucho', '42'),
('Cangallo', '42'),
('Huanta', '42'),
('Lucanas', '42'),
('Parinacochas', '42'),
('Sucre', '42'),
('Víctor Fajardo', '42'),
('Vilcas Huamán', '42'),


('Huanta', '43'),
('Huanta', '43'),
('Puyusca', '43'),

('La Mar', '44'),
('San José de Ushua', '44'),
('San Miguel', '44'),

('Lucanas', '45'),
('Puquio', '45'),
('San Pedro', '45'),

('Cajabamba', '46'),
('Condebamba', '46'),
('San Marcos', '46'),

('Cajamarca', '47'),
('Baños del Inca', '47'),
('Cajabamba', '47'),
('La Encañada', '47'),
('Namora', '47'),

('Celendín', '48'),
('Balsas', '48'),
('Chumuch', '48'),
('El Palto', '48'),

('Chota', '49'),
('Chadín', '49'),
('Llama', '49'),

('Contumazá', '50'),
('San Benito', '50'),
('Tocmoche', '50'),

('Hualgayoc', '51'),
('Bambamarca', '51'),

('Jaén', '52'),
('Bellavista', '52'),
('Chontalí', '52'),

('San Ignacio', '53'),
('Chiclayo', '53'),

('San Marcos', '54'),
('San Miguel', '54'),

('San Pablo', '55'),
('San Juan', '55'),

('Santa Cruz', '56'),
('Marmot', '56'),

('Callao', '57'),
('La Perla', '57'),
('La Punta', '57'),
('Bellavista', '57'),
('Carmen de la Legua Reynoso', '57'),
('Ventanilla', '57'),

('Cusco', '58'),  -- Cusco
('San Sebastián', '58'),  -- San Sebastián
('San Jerónimo', '58'),  -- San Jerónimo
('Santiago', '58'),  -- Santiago
('Cercado', '58'),  -- Cercado
('Sayhuite', '58'),  -- Sayhuite

('Acomayo', '59'),  -- Acomayo
('Accha', '59'),  -- Accha
('Pomacanchi', '59'),  -- Pomacanchi
('Rondocan', '59'),  -- Rondocan

('Anta', '60'),  -- Anta
('Huanoquite', '60'),  -- Huanoquite
('Pampamarca', '60'),  -- Pampamarca
('Pucyura', '60'),  -- Pucyura
('Soraypampa', '60'),  -- Soraypampa

('Calca', '61'),  -- Calca
('Cachora', '61'),  -- Cachora
('Lares', '61'),  -- Lares
('Pucyura', '61'),  -- Pucyura

('Canas', '62'),  -- Canas
('Chinchaypucyo', '62'),  -- Chinchaypucyo
('Layo', '62'),  -- Layo
('Quehue', '62'),  -- Quehue

('Canchis', '63'),  -- Canchis
('Sicuani', '63'),  -- Sicuani
('San Pablo', '63'),  -- San Pablo
('Tinta', '63'),  -- Tinta

('Chumbivilcas', '64'),  -- Chumbivilcas
('Livitaca', '64'),  -- Livitaca
('Colquemarca', '64'),  -- Colquemarca
('Combapata', '64'),  -- Combapata

('Espinar', '65'),  -- Espinar
('Alto Pichigua', '65'),  -- Alto Pichigua
('Cañipia', '65'),  -- Cañipia
('Pallpata', '65'),  -- Pallpata

('La Convención', '66'),  -- La Convención
('Echarati', '66'),  -- Echarati
('Maranura', '66'),  -- Maranura
('Kimbiri', '66'),  -- Kimbiri

('Paucartambo', '67'),  -- Paucartambo
('Chilimarca', '67'),  -- Chilimarca
('Paucartambo', '67'),  -- Paucartambo

('Quispicanchi', '68'),  -- Quispicanchi
('Oropesa', '68'),  -- Oropesa
('Urcos', '68'),  -- Urcos

('Urubamba', '69'),  -- Urubamba
('Yucay', '69'),  -- Yucay
('Chinchero', '69'),  -- Chinchero
('Huayllabamba', '69'),  -- Huayllabamba

('Huancavelica', '70'),  -- Huancavelica
('Acobamba', '70'),  -- Acobamba
('Anta', '70'),  -- Anta
('Ayaviri', '70'),  -- Ayaviri

('Acobamba', '71'),  -- Acobamba
('Ahuac', '71'),  -- Ahuac
('Chaccrampa', '71'),  -- Chaccrampa
('Huayllahuara', '71'),  -- Huayllahuara

('Angaraes', '72'),  -- Angaraes
('Chincheros', '72'),  -- Chincheros
('Lircay', '72'),  -- Lircay
('Pampas', '72'),  -- Pampas

('Churcampa', '73'),  -- Churcampa
('El Carmen', '73'),  -- El Carmen
('Pampa Grande', '73'),  -- Pampa Grande
('San Antonio de Cachi', '73'),  -- San Antonio de Cachi

('Tayacaja', '74'),  -- Tayacaja
('Andahuaylas', '74'),  -- Andahuaylas
('Ccochaccasa', '74'),  -- Ccochaccasa
('Salcabamba', '74'),  -- Salcabamba

('Huánuco', '75'),  -- Huánuco
('Chinchao', '75'),  -- Chinchao
('Tantamayo', '75'),  -- Tantamayo

('Ambo', '76'),  -- Ambo
('Cahuac', '76'),  -- Cahuac
('San Rafael', '76'),  -- San Rafael

('Dos de Mayo', '77'),  -- Dos de Mayo
('Huánuco', '77'),  -- Huánuco

('Leoncio Prado', '78'),  -- Leoncio Prado
('Rondos', '78'),  -- Rondos

('Pachitea', '79'),  -- Pachitea
('Yanas', '79'),  -- Yanas

('Puerto Inca', '80'),  -- Puerto Inca
('Cruz de Mayo', '80'),  -- Cruz de Mayo

('Ica', '81'),  -- Ica
('La Tinguiña', '81'),  -- La Tinguiña
('Parcona', '81'),  -- Parcona
('Pueblo Nuevo', '81'),  -- Pueblo Nuevo
('Salas Guadalupe', '81'),  -- Salas Guadalupe

('Chincha', '82'),  -- Chincha
('Alto Larán', '82'),  -- Alto Larán
('El Carmen', '82'),  -- El Carmen
('Grocio Prado', '82'),  -- Grocio Prado
('Pueblo Nuevo', '82'),  -- Pueblo Nuevo

('Nazca', '83'),  -- Nazca
('Changuillo', '83'),  -- Changuillo
('Marcona', '83'),  -- Marcona
('Vista Alegre', '83'),  -- Vista Alegre

('Palpa', '84'),  -- Palpa
('Llipata', '84'),  -- Llipata
('Santa Cruz', '84'),  -- Santa Cruz

('Pisco', '85'),  -- Pisco
('Ayacucho', '85'),  -- Ayacucho
('El Carmen', '85'),  -- El Carmen
('San Andrés', '85'),  -- San Andrés

('Huancayo', '86'),  -- Huancayo
('El Tambo', '86'),  -- El Tambo
('Huancan', '86'),  -- Huancan
('Pucará', '86'),  -- Pucará
('Santo Domingo de Acobamba', '86'),  -- Santo Domingo de Acobamba

('Chanchamayo', '87'),  -- Chanchamayo
('San Luis de Shuaro', '87'),  -- San Luis de Shuaro
('Pampa Hermosa', '87'),  -- Pampa Hermosa

('Chupaca', '88'),  -- Chupaca
('Ahuac', '88'),  -- Ahuac 

('Concepción', '89'),  -- Concepción
('Aco', '89'),  -- Aco
('Chambara', '89'),  -- Chambara
('Cochas', '89'),  -- Cochas

('Jauja', '90'),  -- Jauja
('Acolla', '90'),  -- Acolla
('Canayre', '90'),  -- Canayre

('Junín', '91'),  -- Junín
('Mito', '91'),  -- Mito

('Satipo', '92'),  -- Satipo
('Pampa de Bellen', '92'),  -- Pampa de Bellen

('Tarma', '93'),  -- Tarma
('La Unión', '93'),  -- La Unión

('Yauli', '94'),  -- Yauli
('Morococha', '94'),  -- Morococha

('Trujillo', '95'),  -- Trujillo
('La Esperanza', '95'),  -- La Esperanza
('El Porvenir', '95'),  -- El Porvenir
('Laredo', '95'),  -- Laredo
('Salaverry', '95'),  -- Salaverry
('Simbilaca', '95'),  -- Simbilaca
('Huanchaco', '95'),  -- Huanchaco
('Moche', '95'),  -- Moche

('Ascope', '96'),  -- Ascope
('Chicama', '96'),  -- Chicama
('Santiago de Cao', '96'),  -- Santiago de Cao
('Casa Grande', '96'),  -- Casa Grande
('Paiján', '96'),  -- Paiján

('Chepén', '97'),  -- Chepén
('Pacanga', '97'),  -- Pacanga
('El Prado', '97'),  -- El Prado

('Gran Chimú', '98'),  -- Gran Chimú
('Guanape', '98'),  -- Guanape

('Pacasmayo', '99'),  -- Pacasmayo
('Jequetepeque', '99'),  -- Jequetepeque
('San Pedro de Lloc', '99'),  -- San Pedro de Lloc

('Sánchez Carrión', '100'),  -- Sánchez Carrión
('Huamachuco', '100'),  -- Huamachuco
('Rocchacc', '100'),  -- Rocchacc

('Virú', '101'),  -- Virú
('La Libertad', '101'),  -- La Libertad

('Chiclayo', '102'),  -- Chiclayo
('Chongoyape', '102'),  -- Chongoyape
('José Leonardo', '102'),  -- José Leonardo Ortiz
('La Victoria', '102'),  -- La Victoria
('Monsefu', '102'),  -- Monsefu

('Ferreñafe', '103'),  -- Ferreñafe
('Cañaris', '103'),  -- Cañaris
('Pítipo', '103'),  -- Pítipo

('Lambayeque', '104'),  -- Lambayeque
('Chiclayito', '104'),  -- Chiclayito

('Lima', '105'),  -- Lima
('Barranco', '105'),  -- Barranco
('Breña', '105'),  -- Breña
('Carabayllo', '105'),  -- Carabayllo
('Chaclacayo', '105'),  -- Chaclacayo
('Chorrillos', '105'),  -- Chorrillos
('Cieneguilla', '105'),  -- Cieneguilla
('Comas', '105'),  -- Comas
('El Agustino', '105'),  -- El Agustino
('Independencia', '105'),  -- Independencia
('Jesús María', '105'),  -- Jesús María
('La Molina', '105'),  -- La Molina
('La Victoria', '105'),  -- La Victoria
('Lince', '105'),  -- Lince
('Magdalena del Mar', '105'),  -- Magdalena del Mar
('Miraflores', '105'),  -- Miraflores
('Pueblo Libre', '105'),  -- Pueblo Libre
('San Bartolo', '105'),  -- San Bartolo
('San Borja', '105'),  -- San Borja
('San Isidro', '105'),  -- San Isidro
('San Juan de Lurigancho', '105'),  -- San Juan de Lurigancho
('San Juan de Miraflores', '105'),  -- San Juan de Miraflores
('San Luis', '105'),  -- San Luis
('San Martín de Porres', '105'),  -- San Martín de Porres
('San Miguel', '105'),  -- San Miguel
('Santiago de Surco', '105'),  -- Santiago de Surco
('Surquillo', '105'),  -- Surquillo
('Villa El Salvador', '105'),  -- Villa El Salvador
('Villa María del Río Seco', '105'),  -- Villa María del Río Seco

('Barranca', '106'),  -- Barranca
('Paramonga', '106'),  -- Paramonga
('Pativilca', '106'),  -- Pativilca

('Canta', '107'),  -- Canta
('Huaros', '107'),  -- Huaros
('San Bartolomé', '107'),  -- San Bartolomé

('Cañete', '108'),  -- Cañete
('Asia', '108'),  -- Asia
('Calango', '108'),  -- Calango
('Cerro Azul', '108'),  -- Cerro Azul
('Chilca', '108'),  -- Chilca
('Coayllo', '108'),  -- Coayllo
('Imperial', '108'),  -- Imperial
('Lunahuaná', '108'),  -- Lunahuaná
('San Luis', '108'),  -- San Luis
('San Vicente de Cañete', '108'),  -- San Vicente de Cañete

('Huaral', '109'),  -- Huaral
('Atavillos Alto', '109'),  -- Atavillos Alto
('Atavillos Bajo', '109'),  -- Atavillos Bajo
('Chancay', '109'),  -- Chancay
('Huacho', '109'),  -- Huacho
('Lima', '109'),  -- Lima
('Pacaraos', '109'),  -- Pacaraos
('Santa Cruz de Andamarca', '109'),  -- Santa Cruz de Andamarca

('Huarochirí', '110'),  -- Huarochirí
('Antioquía', '110'),  -- Antioquía
('Aucayacu', '110'),  -- Aucayacu
('Chicla', '110'),  -- Chicla
('Laraos', '110'),  -- Laraos
('Matucana', '110'),  -- Matucana
('San Andrés de Tupicocha', '110'),  -- San Andrés de Tupicocha
('San Mateo', '110'),  -- San Mateo
('San Pedro de Casta', '110'),  -- San Pedro de Casta
('Santa Eulalia', '110'),  -- Santa Eulalia

('Huaura', '111'),  -- Huaura
('Huaura', '111'),  -- Huaura
('Leoncio Prado', '111'),  -- Leoncio Prado
('Santa María', '111'),  -- Santa María
('Végueta', '111'),  -- Végueta

('Iquitos', '112'),  -- Iquitos
('Alfredo Vargas', '112'),  -- Alfredo Vargas
('Belén', '112'),  -- Belén
('Fernando Lores', '112'),  -- Fernando Lores
('San Juan Bautista', '112'),  -- San Juan Bautista

('Loreto', '113'),  -- Loreto
('Caballococha', '113'),  -- Caballococha
('Punchana', '113'),  -- Punchana

('Mariscal Ramón Castilla', '114'),  -- Mariscal Ramón Castilla
('Yavarí', '114'),  -- Yavarí

('Putumayo', '115'),  -- Putumayo
('Tigüino', '115'),  -- Tigüino

('Requena', '116'),  -- Requena
('Sapuena', '116'),  -- Sapuena

('Ucayali', '117'),  -- Ucayali
('San Antonio', '117'),  -- San Antonio

('Tambopata', '119'),  -- Tambopata
('Las Piedras', '119'),  -- Las Piedras
('Tierra Blanca', '119'),  -- Tierra Blanca

('Ilo', '120'),  -- Ilo
('Ilo', '120'),  -- Ilo

('Mariscal Nieto', '121'),  -- Mariscal Nieto
('Moquegua', '121'),  -- Moquegua
('Samegua', '121'),  -- Samegua

('Pasco', '122'),  -- Pasco
('Chupaca', '122'),  -- Chupaca
('Ticlacayan', '122'),  -- Ticlacayan

('Daniel Alcides Carrión', '123'),  -- Daniel Alcides Carrión
('Yanahuanca', '123'),  -- Yanahuanca

('Oxapampa', '124'),  -- Oxapampa
('Villa Rica', '124'),  -- Villa Rica

('Piura', '125'),  -- Piura
('Castilla', '125'),  -- Castilla
('Cura Mori', '125'),  -- Cura Mori
('El Tallán', '125'),  -- El Tallán
('La Arena', '125'),  -- La Arena
('Las Lomas', '125'),  -- Las Lomas
('Piura', '125'),  -- Piura
('Sullana', '125'),  -- Sullana

('Ayabaca', '126'),  -- Ayabaca
('Frías', '126'),  -- Frías
('Pacaipampa', '126'),  -- Pacaipampa
('Sapillica', '126'),  -- Sapillica

('Huancabamba', '127'),  -- Huancabamba
('Canchaque', '127'),  -- Canchaque
('Huarmaca', '127'),  -- Huarmaca
('Sondorillo', '127'),  -- Sondorillo

('Morropón', '128'),  -- Morropón
('Chocán', '128'),  -- Chocán
('La Matanza', '128'),  -- La Matanza
('Salitral', '128'),  -- Salitral

('Paita', '129'),  -- Paita
('Amotape', '129'),  -- Amotape
('Colán', '129'),  -- Colán
('La Huaca', '129'),  -- La Huaca

('Sullana', '130'),  -- Sullana
('Bellavista', '130'),  -- Bellavista
('Chiclayo', '130'),  -- Chiclayo
('Querecotillo', '130'),  -- Querecotillo

('Talara', '131'),  -- Talara
('El Alto', '131'),  -- El Alto
('La Brea', '131'),  -- La Brea
('Los Órganos', '131'),  -- Los Órganos

('Sechura', '132'),  -- Sechura
('Cristo Nos Valga', '132'),  -- Cristo Nos Valga
('Vice', '132'),  -- Vice

('Puno', '133'),  -- Puno
('Acara', '133'),  -- Acara
('Atuncolla', '133'),  -- Atuncolla
('Chucuito', '133'),  -- Chucuito
('Paucarcolla', '133'),  -- Paucarcolla
('San Miguel', '133'),  -- San Miguel
('Tiquillaca', '133'),  -- Tiquillaca

('Chucuito', '134'),  -- Chucuito
('Desaguadero', '134'),  -- Desaguadero
('Ilave', '134'),  -- Ilave
('Pocra', '134'),  -- Pocra
('Santa Rosa', '134'),  -- Santa Rosa

('San Antonio de Putina', '135'),  -- San Antonio de Putina
('Putina', '135'),  -- Putina

('San Román', '136'),  -- San Román
('Juliaca', '136'),  -- Juliaca

('Moyobamba', '137'),  -- Moyobamba
('Bajo Huallaga', '137'),  -- Bajo Huallaga
('Marmot', '139'),  -- Marmot

('Bellavista', '138'),  -- Bellavista
('El Dorado', '138'),  -- El Dorado

('El Dorado', '139'),  -- El Dorado
('Huallaga', '139'),  -- Huallaga

('Huallaga', '140'),  -- Huallaga
('Lamas', '140'),  -- Lamas

('Lamas', '141'),  -- Lamas
('Mariscal Cáceres', '141'),  -- Mariscal Cáceres

('Mariscal Cáceres', '142'),  -- Mariscal Cáceres
('Picota', '142'),  -- Picota

('Picota', '143'),  -- Picota
('Rioja', '143'),  -- Rioja

('Rioja', '144'),  -- Rioja
('San Martín', '144'),  -- San Martín

('San Martín', '145'),  -- San Martín
('Tocache', '145'),  -- Tocache

('Saposoa', '146'),  
('Pasarraya', '146'), 
('Piscoyacu', '146'), 
('El Eslabón', '146'), 
('Alto Saposoa', '146'),
('Sacanche', '146'), 

('Tacna', '147'),  -- Tacna
('Candarave', '147'),  -- Candarave

('Jorge Basadre', '148'),  -- Jorge Basadre
('Tarata', '148'),  -- Tarata

('Tumbes', '149'),  -- Tumbes
('Pampas de Hospital', '149'),  -- Pampas de Hospital
('San Jacinto', '149'),  -- San Jacinto
('San Juan de la Virgen', '149'),  -- San Juan de la Virgen
('La Cruz', '149'),  -- La Cruz
('Matapalo', '149'),  -- Matapalo
('Punta Sal', '149'),  -- Punta Sal

('Contralmirante Villar', '150'),  -- Contralmirante Villar

('Zorritos', '151'),  -- Zorritos
('Canoas de Punta Sal', '151'),  -- Canoas de Punta Sal

('Pucallpa', '152'),  -- Pucallpa
('Callería', '152'),  -- Callería
('Manantay', '152'),  -- Manantay
('Yarinacocha', '152'),  -- Yarinacocha

('Atalaya', '153'),  -- Atalaya
('Sepahua', '153'),  -- Sepahua
('Tahuania', '153'),  -- Tahuania
('Jairén', '153'),  -- Jairén
('Inapari', '153'),  -- Inapari

('Coronel Portillo', '154'),  -- Coronel Portillo
('Callería', '154'),  -- Callería
('Manantay', '154'),  -- Manantay
('Yarinacocha', '154');  -- Yarinacocha


