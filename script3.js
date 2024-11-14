let contraseñaCorrecta = "miContraseña123"; // Contraseña correcta
let contraseñaIngresada;

do {
    contraseñaIngresada = prompt("Por favor, ingresa la contraseña:");
    
    if (contraseñaIngresada !== contraseñaCorrecta) {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }

} while (contraseñaIngresada !== contraseñaCorrecta);

alert("¡Contraseña correcta! Has accedido al sistema.");