// // un objeto es una entidad independiente tiene diferentenes propiedades y atributos 

// //atributos de un carroo
// //numero de puertas
// //color
// //placa
// //motor
// //cilindro 
// //Hp

// // creamos objeto de un carro

// const carro = {
//     color:"azul",
//     motor: 1.6,
//     modelo: "GTR",
//     marca : "nissan",
//     nuevo : true,
// };

// //Objeto persona

// const persona = {
//     edad : 33,
//     nombre:"guille",
//     sexo : "masculino",
//     talla : 1.75,
//     estadoCivil: "casado",
//     mayorEdad : true,
//     tatuajes : true,
// };

// //como puedo acceder al atributo de un nombre

// console.log("nombre" ,persona.tatuajes)
// console.log()

// //como puedo agregar mas propiedas a un objeto 

// persona.celular = "95299383";

// console.log(persona);

// //hay otra forma de agrefar propiedas

// persona["profesion"] = "ingeniero";
// persona["zoo"] = "odjdod";

// const celular = {
//     modelo: "iphone 13",
//     flexible: false,
//     tamanio : 6.5,
//     gama : "alta",
//     camara : "autofocus",
//     precio : "$700",
// }


// celular.camara = "vga";
//  console.log("celular" ,celular)

//  //crear una funcion que retorne la gama el precio y el modelo
// //destructuracion de objeto 

// const mostrarDetalle = (celular) => {
//     return `La gama es ${celular.gama} y tiene un precio de ${celular.precio} del modelo ${celular.modelo}`;
// };

// console.log(mostrarDetalle(celular)) 

// //  crea una funcion que valide si el usuario es de Peru
// // si es de peru  impriman su nickname junto a su nivel 
// // si no es de peru imprima OYE tu no eres peruano

// const usuario = {
//     nickName :"lokillo",
//     email : "lokillo@gmail.com",
//     password : "********",
//     carnetVacunacion: true,
//     location : "Peru",
//     level : "pro",
//     edad : 18,
// };

// let definirUsuario=()=>{
//     if(usuario.location === "Peru"){
//         return `su usuario es ${usuario.nickName}, tu locación es ${usuario.location} y tu nivel es ${usuario.level}`;
//     }else{
//         return `${usuario.nickName} no eres de Perú`;
//     }
// }
// console.log(definirUsuario());

// //Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

// let numero1 = prompt("escribe un numero");

// let uno;

// let primer = true ;
// for( uno=2; uno < numero1 / 2; uno++){
//     if (numero1 % uno === 0){
//     primer = false;
//     }
// }

// if (primer){
//     alert("el numero es primo");
// } else{
//     alert("el numero no es primo");
// }

// // como crear una funcion en un objeto 

// const persona ={
//     nombre: "luis",
//     edad: 30,
//     talla: 1.5,
//     estadoCivil: "cansado",
//     calcularEdad:function(){
//         console.log("calular edad")
//     },

// };

// //como se llamaria a esta funcion dentro del objeto
// console.log("1eraforma")
// persona2.calcularEdad();

// //segunda forma de llamar una funcion de un objeto 
// console.log("2forma");
// persona2.calcularEdad;

// como puedo acceder a la propieda del objeto desde una funcion interna

const computadora = {
   color :"azul",
   marca :"hp",
   nuevo : true,
   mostrarDetalle : function(){
       console.log("color",this.color);
   },

}
 computadora.mostrarDetalle();




//de martin
const computadoras = {
    color: "Azul",
    marca: "hp",
    nuevo: true,
    wenas : function(){
        console.log(`El color es ${this.color}`)
    }
}
computadoras.wenas();   

//podemos tener objetos con arrays?

 const alumnos = [
     {
      nombre:"martin",
      edad : 40,
      promedio : 14,   
     },
     {
    nombre: "luchito",
    edad : 20,
    promedio: 15,
     },
     {
     nombre: "yessica",
     edad: 15,
     promedio :17,
    }
 ]

 console.log(`nota de ${alumnos[0].nombre} es y sera por que es flojo`,alumnos[0].promedio);


 //creae un arrays de laptops

 // esta estructura tambien es conocido como json
 // json es un formato de archivos 

 const laptos = [
    {
        marca: "Samsung",
        modelo: "SP-5115",
        tienda: "Tottus",
        precio: 1982
    },
    {
        marca: "LG",
        modelo: "SP-52342",
        tienda: "Plaza Vea",
        precio: 2000
    },
    {
        marca: "HP",
        modelo: "hp-1574",
        tienda: "RealPlaza",
        precio: 2500
    },
    {
        marca: "LENOVO",
        modelo: "le-54265",
        tienda: "Efe",
        precio: 1982
    },
    {
        marca: "TOSHIBA",
        modelo: "TB-5494",
        tienda: "Promart",
        precio: 5222
    }
]

console.log(laptos)

//creen que los keys puedan ser numeros
const listaUtiles ={
    3:"hojas bond",
    1:"tijeras",
    2:"plumones",
    5:"hojas bond",
    4:"tijeras",
    6:"plumones",
    7:"hojas bond",
    8:"tijeras",
    9:"plumones",
    10:"hojas bond",
    12:"tijeras",
    11:"plumones",
};

console.log(listaUtiles[10]);


//objeto dentro de objetos

const components = {
    nombre : "lenovo",
    caracteristicas :{
        ram : "16gb",
        tarjeta : "3090",
        extra:{
            pantalla : "4k",
            },
        111:{
            teclado: "español",
        }    
    }

}

console.log("tarjeta",components.caracteristicas.tarjeta);
console.log("pantalla", components.caracteristicas[111].teclado);
console.log(components["caracteristicas"].tarjeta)
