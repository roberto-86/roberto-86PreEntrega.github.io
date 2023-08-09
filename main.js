/* Escribir un programa que solicite ingresar 10 notas de alumnos y nos informe 
cuántos tienen notas mayores o iguales a 7 y cuántos menores.*/

let x = 1;
let conta1 = 0;
let conta2 = 0;
while (x <= 10) {
    let nota = prompt("Ingrese nota");
if (nota >= 7) {
    conta1 = conta1 + 1;
} else {
    conta2 = conta2 + 1;
}

x = x + 1;
}

console.log("Cantidad de alumnos con notas mayores o iguales a 7");
console.log(conta1);
console.log("Cantidad de alumons con notas menores a 7");
console.log(conta2);