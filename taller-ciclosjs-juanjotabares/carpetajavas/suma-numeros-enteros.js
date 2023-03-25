
let num1 = prompt("Introduce el primer número entero positivo");
let num2 = prompt("Introduce el segundo número entero positivo");

num1 = parseInt(num1);
num2 = parseInt(num2);


if (num1 % 1 == 0 , num2 % 1 == 0 , num1 < 0 , num2 < 0) {
  alert("Los números introducidos no son válidos. Introduce números enteros positivos.");
} else { 
  let suma = 0;
  for (let i = num1; i <= num2; i++) {
    suma += i;
  }
  alert("La suma total es: " + suma);
}
