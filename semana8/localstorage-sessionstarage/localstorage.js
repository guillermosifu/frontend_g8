const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function(event){
    event.preventDefault();
 const inputs = document.querySelectorAll("input");
//vamos aguardar el correo y password en elocalstorage
// con setItem guardamos los valores en el local estorage
  
inputs.forEach((input)=>{
   localStorage.setItem(input.name ,input.value)});
   login();
};

//vamos a obtener datos desde el local storage 
//la forma en la que obtenmemos datos del locAL STORAGE

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display = "none";
    usuarioSection.style.display ="block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password ;
}

 const form = document.querySelector("#section-login");
 const titleEmail = document.querySelector("#email");
 const titlePassword = document.querySelector("#password");

 const btnCerraSesion = document.querySelector("#cerrar-sesion"); 
 const usuarioSection = document.querySelector("#usuario-logged")

 if(email !== null && password !== null){
    //el usuario ya esta loquedo 
    //voy a ocualtar el form(section)
    login();
 }else{
    usuarioSection.style.display = "none" ;
 }

 btnCerraSesion.onclick = function(){
// vamos a eliminar las variables del local storage
//localStorage.removeItem(key)

  localStorage.removeItem("password");
  localStorage.removeItem("email");
  //es mostrar nuevamanete el formulario y ocultar el mensaje anterior
 form.style.display ="block";
 usuarioSection.style.display= "none";

 };
