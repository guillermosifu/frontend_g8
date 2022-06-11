// //existe dentro de js el document , es un atributo de js me va permitir obtner elementos del html

// //obteniendo elementos por su id 
// // por su tagName = etiquetas
// // <h1> tagname = h1
// //<input> tagname input


// // tengo 3 elementos en con el tagname INPUT 

// const inputs = document.getElementsByTagName("input")
// console.log("inputs" , inputs)

// // recordemos que input es un HTMLcollection , pero para poder iterado debo convertirlo a un array normal 
// //para hacerlo vamos usar  array.from para converti el html collection a un array normal 

// const newInputs= Array.from(inputs);
// console.log("newInputs" ,newInputs);

// // un map a inputs

// newInputs.map((newInput)=>{
//     console.log(newInput);
// });


// const form = document.getElementsByTagName("form")

// const button = document.getElementsByTagName("button")
// console.log("button",button)

// const btn = document.getElementsByClassName("btn_registro")
// console.log("btn" ,btn);
// const div = document.getElementById("container")
// console.log("div",div)

