//un bucl es una estructura repetitiva , es decir hacer algo muchas veces 

// los bucles son usados par poder leer arrays 
// lee cada elemento de forma independiente 

// el bucle mas usado es el FOR . en español para 
//iterador => indice de mi bucle 
//i++
//i = 1+1
//indica que se hara de uno en uno


for (let i = 0; i < 10; i++){
    console.log("iterador",i);
};

for (let j = 10; j < 50; j++){
    console.log("iterador2",j);
};


const numeros =[1,2,3,4,5,6,7,8,9,10]

for(let j = 0;j < numeros.length; j++){
    if(numeros [j] % 2 ===0){
        console.log(numeros[j]);
    }
};


//podria atrapar datos de un arrays de objetos?

//vamos a recorrer el arrays de objetos atrapando la marca de cada objeto en el arrays
const laptops = [
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


for(o = 0; o < laptops.length; o++){
    console.log(laptops[o].marca);  
};

//escibe una fucncion que pida una frase y escriba cuantas veces 
//aparecen cada una de las vocales 

const contarVocales = (frase) =>{
    const fraseMayuscula = frase.toUpperCase();
    let contador = 0;

    for (let i = 0; i< fraseMayuscula.length; i++){
        const letra = fraseMayuscula[i];
        if(
            letra === "A" ||
            letra === "E" ||
            letra === "I" ||
            letra === "O" ||
            letra === "U" 
        ){
            contador++;
        }
    }

    return `la frase tiene ${contador}vocales`;
};

console.log(contarVocales("hola me llamO juan"));
console.log(contarVocales("soy develop"));

