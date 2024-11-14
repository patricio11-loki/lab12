const numeros = [1,2,3,4,5];
let sumaTotal = 0;
for (let i = 0; i < numeros.length; i++){
    sumaTotal += numeros[i];
}
document.write("La suma total es", sumaTotal);
let promedio=sumaTotal/numeros.length;
document.write("El promedio es:", promedio);