//quieryselector y querySelectorAll
//los hermanod menores
// de los demas metodos

//amabas funciones me permite poder usar elementos de html en js
//ejemplo quierySelector . atrapa un elemento

const inputName = document.querySelector(".input_mail")
console.log(inputName.placeholder)

//este es con id

const password = document.querySelector("#pass")
console.log(password.placeholder)

//este es con tagname

const input = document.querySelector("input")
console.log(input)

//querySelectorAll : atrata mas de un elemento 

const inputs = document.querySelectorAll("input")
console.log(inputs)

const arrayInputsText = [];
inputs.forEach((input) => {
  if (input.type === "text") {
    arrayInputsText.push(input);
  }
});

console.log(arrayInputsText)

const arraysConvertidos = Array.from(inputs);
console.log(arraysConvertidos)

const arraysConvertidoFilter = arraysConvertidos.filter(
    (input) => input.type === "email"
);

console.log("arraysConvertidoFilter" ,arraysConvertidoFilter);