
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");

const reglas={
    textos: /^[a-zA-Z-AÁ-ÿ\s]{1,50}$/,
    numeros: /^[\+]?[(]?[0-9]{4,10}$/im,
    correo: /\S+@\S+/,
}
const inputs={
    nombre:false,
    apellido:false,
    idnumero:false,
    telefono:false,
    correo:false,
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(inputs.nombre);
    console.log(inputs.apellido);
    console.log(inputs.idnumero);
    console.log(inputs.correo);
    console.log(inputs.telefono);
    if(inputs.nombre && inputs.apellido && inputs.idnumero && inputs.telefono && inputs.correo){
        alert("Registro existoso");
    }
    else{
        alert("No se envió el formulario, revise que todos los campos estén diligenciados");
        document.getElementById("frm-no-enviado").classList.add("frm-no-enviado-visible");
    } 
})

let validarCampos=(e)=>{
    
let validarInput=(regla,grupo,input)=>{
    if(regla.test(input.value)){
        document.querySelector(".form-item").classList.remove('error');
        document.querySelector(".form-item").classList.add('success');
        
        document.querySelector(".form-item").classList.remove('fa-xmark');
        
        inputs[grupo]=true;
    }else{
        document.querySelector(".form-item").classList.add('error'); 
        document.querySelector(".form-item").classList.remove('success');
        document.querySelector(".form-item").classList.remove('fa-circle-check');
        inputs[grupo]=false;
    }
}

    switch(e.target.name){
        
        case "nombre":
            validarInput(reglas.textos,e.target.name,e.target);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target.name,e.target);
        break;
        case "direccion":
            validarInput(reglas.textos,e.target.name,e.target);
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target.name,e.target);
        break;
        case "idnumero":
            validarInput(reglas.numeros,e.target.name,e.target)
        break;
        case "correo":
            validarInput(reglas.correo,e.target.name,e.target);
        break;
    }
}

campos.forEach((campo)=>{
    campo.addEventListener('keyup',validarCampos);
    campo.addEventListener('blur',validarCampos);
})

