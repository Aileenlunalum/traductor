function translate () {
    var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
    var remember = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder = "Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar sesión";
}
translate();
function datosFormulario(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var capa = document.getElementById("titulo");
  var parrafo=document.getElementById("parrafo");
  capa.innerHTML = "Datos del formulario";
  parrafo.innerHTML="El correo electrónico ingresado es:<br>"+email+"<br> La clave mostrada es: <br>" + password;


}
