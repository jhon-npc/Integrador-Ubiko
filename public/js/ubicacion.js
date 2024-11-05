
const departamentoSelect = document.getElementById('departamento');
const provinciaSelect = document.getElementById('provincia');

departamentoSelect.addEventListener('change', function() {
    const selectedDepartamentoId = parseInt(this.value);
    
    // Limpiar el selector de provincias
    provinciaSelect.innerHTML = '<option value="">- Seleccione -</option>';

    // Filtrar provincias por departamento seleccionado
    const filteredProvincias = provincias.filter(provincia => provincia.departamentoId === selectedDepartamentoId);

    // Rellenar el selector de provincias con las provincias filtradas
    filteredProvincias.forEach(provincia => {
        const option = document.createElement('option');
        option.value = provincia.id;
        option.textContent = provincia.nombre;
        provinciaSelect.appendChild(option);
    });
});