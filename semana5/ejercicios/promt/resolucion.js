function Menu(){
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que quiere ejecutar : \r\n 1. Suma. \r\n 2. Promedio de examenes. ")
        );
        if(isNaN(nro_ejercicio)){
            alert("porfavor ingresa valores");
        }  else {
            MenuEjercicios(nro_ejercicio)
        }   
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
        let valor1 = parseFloat(prompt("Ingrese el valor a sumar : "));
        let valor2 = parseFloat(prompt("ingrese el valor a sumar: "));
        alert(eje1_sumarvalores(valor1, valor2));
        break;
    
    case 2:
let ex1 = parseFloat (prompt("ingresa la primera nota: "))
let ex2 = parseFloat (prompt("ingresa la primera nota: "))
let ex3 = parseFloat (prompt("ingresa la primera nota: "))
let ex4 = parseFloat (prompt("ingresa la primera nota: "))
alert(eje2_calcularPromedio(ex1 , ex2 ,ex3 , ex4))
break;
    }
   
}


//ejercio uno
 let eje1_sumarvalores=(a,b)=> {if (isNaN(a) || isNaN (b)){
    return "por favor ingresa valor";
   } 
    return a + b;
}

//ejercicio 2
 function eje2_calcularPromedio(ex1 , ex2 ,ex3 , ex4){
    if (isNaN(ex1) || isNaN (ex2)|| isNaN (ex3) || isNaN (ex4)){
        return "por favor ingresa valor";
       } else{
           return(ex1 + ex2 + ex3 + ex4)/ 4;

       }
 }

