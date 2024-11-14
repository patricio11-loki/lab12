let numero;
while (true){
    numero = parseFloat(prompt("Ingresa un número , Ingresa un número negativo para salir"))
    if (numero<0){
        break;
        document.write("Has Ingresado", numero);
    }else{
        document.write("Número negativo ingresado, salñiedo del bucle")
    }
}