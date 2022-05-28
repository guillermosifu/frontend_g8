
// tipo de datos
let nombre3 = "mia";
let age = 34;
let talla= 1.65;
let bool = true;
let indefinido ;
let nulo = null;
let simbolo = Symbol('zdc');
let objeto = {};

console.log(nombre3,typeof (nombre3))
console.log(age,typeof (age))
console.log(bool,typeof (bool))
console.log(nombre3,typeof (nombre3))
console.log(nombre3,typeof (nombre3))
console.log(talla,typeof (talla))

//cambiar datos
console.log(age,typeof toString(age))
console.log(nombre3,typeof parseInt(nombre3))
console.log(talla,typeof parseFloat(talla))



// tipo de funciones 
//funcion Declarativa
function suma(a , b){
    return a + b 

}
 console.log(suma(10,10.6))

 //expresion de funcion -funcion anonima

 let restar= function(x,y){
     return x-y
 }
 console.log(restar(30,10))

 //arrows function -funcion flecha 

let multiplicar =(x,y)=>x*y;
console.log(multiplicar(5,7))





/*let nombre = "claudia"
const 
console.log(nombre)

{
    let nombre1 = 'luis';
    console.log(nombre1);
    console.log(nombre);

}

console.log(nombre1)




document.write('hola')
console.log()
console.warn('peligro')
console.error('error')*/