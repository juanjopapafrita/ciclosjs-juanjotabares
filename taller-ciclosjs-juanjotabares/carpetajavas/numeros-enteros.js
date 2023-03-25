let num = prompt("Introduce un número entero positivo:");
let esPrimo = 1;

if (num < 2) {
  esPrimo = 0;
}

for (let i = 2; i < num; i++) {
  if (esPrimo === 1 && Math.floor(num / i) * i === num) {
    esPrimo = 0;
  }
}

if (esPrimo === 1) {
  console.log(num + " es un número primo.");
} else {
  console.log(num + " no es un número primo.");
}
