let numero;
while (true) {
    numero = parseFloat(prompt("Ingresa un número. Ingresa un número negativo para salir"));
    
    if (numero < 0) {
        break;        
    } else {
        document.write("Has ingresado: " + numero + "<br>");
    }
}