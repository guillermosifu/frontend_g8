
/*const numero1 = 10;
const numero2 = 20;

let resultado = 0;
resultado= numero1+numero2;

console.log (resultado)
console.log ("Resultado: " + numero1+ "+" +numero2+ "=" +resultado)
/*como hacer para que muestre Resultado: 10 +20 = 30*/
/*otra propiedad el console.log es usar key, como resaltados*/
/*console.log ("Sumatoria:", resultado)

/*existe el console.error para errores y console.warn para adevertencias*/
/*5console.error("Error", resultado)
console.error("Diferencia Error" + numero1)
console.error("Esta saliendo mal")

console.log("Inciando...")
console.warn("military software detected")
console.warn("Warning, nuclear launch detected")
console.warn("Weather control device detected")

/*vamos a hacer una calculadora con JS*/
/*restricciones, debemos validar la división / 0*/
/*prompt es una ventana emergente que nos pide un valor
abre una ventana tipo alerta pero la cual nos permite ingresar un valor*/
/* ese valor se guarda en una variable*/

/*const valor1 = prompt("Ingrese un valor1")
const valor2 = prompt("Ingrese un valor2")
/*necesito que el usuario ingrese el tipo de operacion, que puede ser suma, resta, producto o division*/
/*const operacion = prompt("Ingrese operacion: + - * /")
let resultadoCalculadora = 0
/*para hacer los calculos debo convertir mi variable de string a number*/
/*colocamos el simbolo + delante de la variable y esta se convierte en number*/
/*if (operacion === "+"){
  resultadoCalculadora = +valor1 + +valor2
  console.log("Resultado: ", resultadoCalculadora)
} else if (operacion === "-"){
  resultadoCalculadora = +valor1 - +valor2
  console.log("Resultado: ", resultadoCalculadora)
} else if (operacion === "*"){
  resultadoCalculadora = +valor1 * +valor2
  console.log("Resultado: ", resultadoCalculadora)
} else if (operacion === "/"){
  if (+valor2!==0){
  resultadoCalculadora = +valor1 / +valor2
  console.log("Resultado: ", resultadoCalculadora)
  } else {
    console.log ("el divisor debe ser mayor a 0")
  }
} else {
  console.error("operacion no valida")
}  
/*haremos un algoritmo para detectar si un número es par o impar*/

/*const numeroMultiplo = 12
/*La forma de saber si el nro es par es usando %, porque es una operacion que brinda el residuo*/
/*mod % nos ayuda a ver si el número es divisible por el nmuero que ponemos al lado */
/*if (numeroMultiplo % 2 === 0){
console.log("Numero par", numeroMultiplo)
}

if (numeroMultiplo % 3 === 0){
  console.log("Numero múltiplo de 3"), numeroMultiplo
}

/*Escribir un algoritmo que pida dos numeros usando prompt e impriman el nro mayor*/

/*const nro1 = prompt("Valor1")
const nro2 = prompt("Valor2")
if (nro1>nro2){
  console.log(nro1)
}else (nro2>nro1); {
  console.log(nro2)
}

/*como usar los operadores and y or*/
/*and : &&*/
/* or : ││*/
/*Esto podemos usarlo en los if*/
// !! se usa para poder concatenar condiciones
// !! Pueden poner una cantidad ilimitada de condiciones

// !! ambas condiciones se deben para cumplir para entrar al if
/*if (edadMayor === 18 && nombreMayor === "Juan") {
  console.log("El usuario es Juan y tiene 18 años");
}

// !! al menos una de las 2 condiciones se debe cumplir para entrar al if
if (edadMayor === 18 || nombreMayor === "Juan") {
  console.log("El usuario es Juan o tiene 18 años");
}

// ** Consejo: Traten de no usar mucho el else

/*Escribir un algoritmo que pida tres nmueos con prompt e imprima el mayor*/

const a = +prompt("Primer nro")
const b = +prompt("Segundo nro")
const c = +prompt("Tercer nro")

if (a>b && a>c) {
  console.log("a es mayor")
} else if (a<b && b>c){
  console.loge("b es mayor")
} else if (a<b && b<c){
  console.log("c es mayor")
}

