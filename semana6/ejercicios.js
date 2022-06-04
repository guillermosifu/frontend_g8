//quiero que creen 4 grupos de arrays . c/u con 6 datos 
//luego van comprobar cuantos datos tiene cada arreglo
const personas1 = [
    "Jose",
    "Maria",
    "Juan",
    "Luis",
    "Pedro",
    "Julia",
    "Erick",
    "Julian",
    "Rosa",
    "Mario",
  ];
  
  let personas2 = [
    "juan",
    "Maria",
    "Pedro",
    "Luis",
    "alberto",
    "juana",
    "Mario",
    "Pedrito",
    "Luisa",
    "alberta",
  ];
  
  const personas3 = [
    "carlos",
    "jose",
    "maria",
    "lisbet",
    "roberto",
    "liseth",
    "alexa",
    "anderson",
    "linder",
  ];
  
  let personas4 = [
    "Erick",
    "Karina",
    "Patricia",
    "kjaris",
    "Bruno",
    "Pepe",
    "Juanito",
    "pepito",
    "Pedro",
    "Carlos",
  ];


//luego llamaran alternamente un indice y cambiaran valor uno en cada grupo 
console.log("personas1", personas1.length)
console.log("personas2", personas2.length)
console.log("personas3", personas3.length)
console.log("personas4", personas4.length)

// quiero una funcion que me retorne el segundo arreglo 

function llamarArrays(personas2){
   return personas2
}
console.log("grupo 2" ,llamarArrays(personas2[2]))

let itemTwo = (personas2)=>{
    return personas2;
}
console.log(itemTwo(personas2));

let array= (a)=> {return a} ;
console.log(array(personas2))

