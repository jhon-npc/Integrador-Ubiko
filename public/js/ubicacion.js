document.getElementById('departamento').addEventListener('change', function () {
    const departamentoId = this.value;
    const provinciaSelect = document.getElementById('provincia');
    const ciudadSelect = document.getElementById('ciudad');

    // Limpiar opciones de provincias y ciudades
    provinciaSelect.innerHTML = '<option value="">- Seleccione -</option>';
    ciudadSelect.innerHTML = '<option value="">- Seleccione -</option>';

    // Obtener provincias del departamento seleccionado
    fetch(`/provincias/${departamentoId}`)
        .then(response => response.json())
        .then(provincias => {
            provincias.forEach(provincia => {
                const option = document.createElement('option');
                option.value = provincia.id;
                option.textContent = provincia.nombre;
                provinciaSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching provincias:', error));
});

document.getElementById('provincia').addEventListener('change', function () {
    const provinciaId = this.value;
    const ciudadSelect = document.getElementById('ciudad');

    // Limpiar opciones de ciudades
    ciudadSelect.innerHTML = '<option value="">- Seleccione -</option>';

    // Obtener ciudades de la provincia seleccionada
    fetch(`/ciudades/${provinciaId}`)
        .then(response => response.json())
        .then(ciudades => {
            ciudades.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad.id;
                option.textContent = ciudad.nombre;
                ciudadSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching ciudades:', error));
});