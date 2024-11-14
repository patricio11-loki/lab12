const numeros = [5,6,7,8,9];
let sumaTotal = 0;
for (let i = 0; i < numeros.length; i++){
    sumaTotal += numeros[i];
}
document.write("La suma total es: " + sumaTotal + "<br>"); // Agregamos <br> para salto de línea
let promedio = sumaTotal / numeros.length;
document.write("El promedio es: " + promedio);