
numero = parseInt(prompt("Ingresa un número:"));

let numeroAnterior = 0;
let numeroActual = 1;
let siguienteNumero;

console.log(numeroAnterior);
console.log(numeroActual);

for (let i = 2; i <= numero; i++) {
  siguienteNumero = numeroAnterior + numeroActual;
  if (siguienteNumero <= numero) {
    console.log(siguienteNumero);
  }
  numeroAnterior = numeroActual;
  numeroActual = siguienteNumero;
}
