
// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profileImage = document.getElementById('profileImage').files[0];

    // Validar que todos los campos son requeridos
    if (!nombre || !email || !password || !profileImage) {
        alert('Todos los campos son obligatorios');
        return false;
    }
    
    // Validar nombre (solo letras y espacios)
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert('El nombre solo debe contener letras y espacios');
        return false;
    }

    // Validar email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert('Por favor ingrese un email válido');
        return false;
    }

    // Validar contraseña (mínimo 8 caracteres, al menos una letra y un número)
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, una letra y un número');
        return false;
    }


    // Validar imagen (tamaño máximo 5MB)
    if (profileImage && profileImage.size > 5 * 1024 * 1024) {
        alert('La imagen no debe superar los 5MB');
        return false;
    }

    return true;
}

// validar formulario en el evento submit
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validarFormulario()) {
        alert('Formulario enviado con éxito');
    }
});


// Función para validar el formato de la imagen
function validarFormatoImagen(archivo) {
    const formatosPermitidos = ['image/jpeg', 'image/png', 'image/jpg'];
    return formatosPermitidos.includes(archivo.type);
}

// Función para mostrar la vista previa de la imagen
function mostrarImagen(event) {
    const archivo = event.target.files[0];
    
    if (!archivo) {
        alert('Por favor seleccione una imagen en formato JPG o PNG');
        return;
    }

    if (!validarFormatoImagen(archivo)) {
        alert('Por favor seleccione una imagen en formato JPG o PNG');
        event.target.value = ''; // Limpiar el input
        return;
    }

    const imagen = document.getElementById('imagePreview');
    imagen.innerHTML = ''; // Limpiar preview anterior
    imagen.src = URL.createObjectURL(archivo);
}

// Agregar event listener para la previsualización de la imagen
document.getElementById('profileImage').addEventListener('change', mostrarImagen);
