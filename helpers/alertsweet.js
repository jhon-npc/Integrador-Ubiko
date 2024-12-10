document.addEventListener("DOMContentLoaded", () => {
  const eliminarBotones = document.querySelectorAll(".btn-eliminar");

  eliminarBotones.forEach((boton) => {
    boton.addEventListener("click", async (e) => {
      const form = boton.closest("form"); // Encuentra el formulario asociado
      const resultado = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (resultado.isConfirmed) {
        // Enviar el formulario si el usuario confirma
        form.submit();
      }
    });
  });
});
