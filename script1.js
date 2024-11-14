let numero=0;
while (numero>0){
    numero = parseFloat(prompt("Ingresa un número , Ingresa un número negativo para salir"))
    if (numero>=0){
        document.write("Has Ingresado", numero);
    }else{
        document.write("Número negativo ingresado, salñiedo del bucle")
    }
}