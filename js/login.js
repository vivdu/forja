let buttonlog=document.getElementById("dashbrd");
let admin="Admin", password="Kuepa2022";

buttonlog.onclick=()=>{
let user=document.getElementById("user").value;
let userpass=document.getElementById("password").value;

if (user==admin && password==userpass) {
    console.log("Acceso permitido")
    window.location.assign("dashboard.html");    
}
else if (user==admin || password==userpass) {
    window.alert("Usuario o contraseña incorrecto");
}
else {
    console.log("Acceso denegado")
    window.alert("Error de credenciales")
    
}
}