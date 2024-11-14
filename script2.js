let numero;
while (true) {
    numero = parseFloat(prompt("Ingresa un número. Ingresa un número negativo para salir"));
    
    if (numero < 0) {
        document.write("Número negativo ingresado, saliendo del bucle.");
        break;
    } else {
        document.write("Has ingresado: " + numero + "<br>");
    }
}