
function imprimir(){
    console.log("hola mundo desde la funcion");
}

//la idea es tner una funcion que reciba un parametro el cual indiqque si es suma resta m o d 
//en base a ese para metro llama a la funcion que necesote del archivo operaciones y retorno resultado 


function calculadorHtml(operacion){
    //obtner valores del input
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;
  //valiadamos que los datos no esten vacios
    if(numero1 === "" || numero2 === ""){
        alert("debes completar los datos");
        return;
    }

//una vez que validaste lo datos de los campos debes que hallar la operacion 
//necesito una vaiable que se encargue de guardar el resultado
 let resultado = 0;
 if ( operacion === "+"){
    resultado = sumar (numero1 , numero2);
 }
 if ( operacion === "-"){
    resultado = restar (numero1 , numero2);
 }
 if ( operacion === "*"){
    resultado = multiplicar (numero1 , numero2);
 }
 if ( operacion === "/"){
    resultado = dividir (numero1 , numero2);
 }
  //para acabar debo mostar el resulktado en mi html 
  const p = document.createElement("p");
  const value = document.createTextNode(resultado );
  p.appendChild(value);
  const contenedor = document.querySelector("#resultado");
  contenedor.appendChild(p);

}