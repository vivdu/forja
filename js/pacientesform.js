
let form=document.getElementById("form-usuario");
let campos=querySelectorAll("#form-usuario input");

const reglas={
    textos: /^[a-zA-Z-AÁ-ÿ\s]{1,50}$/,
    numeros: /^\d{7-10}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
}

form.addEventListener("submit",e=>{alert("Se envió el formulario")});
 
let validarCampos=(e)=>{    
console.log("evento input")
console.log(e.target.name)
switch(e.target.name) {
    case "numdoc":
        if(reglas.numeros.test(e.target.value)){
            document.getElementById("g-numdoc").classList.remove
        }
        else {

        }
}
}
campos.forEach((campo))