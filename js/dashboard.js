var user1=52368795;
var user2=1001235478;
var user3=25413574;
var user4=1007203506;
var button=document.getElementById("iconsearch")
button.onclick=()=>{
    var search=document.getElementById("usersearch").value;

    if (user1==search){
        var result=confirm("El paciente con documento: "+search+" solo presenta una dosis de la vacuna Sinovac. Será redirigido al formulario de vacunación")
        
        switch (result){
        case true: window.location.assign("pacientes.html")
        alert("ke?")    
        break;
        case false: window.location.assign("dashboard.html")
        alert("ke?") 
        break;
        }
    }    
    else if (user2==search){
        var result=confirm("El paciente con documento: "+search+" presenta dos dosis de la vacuna Moderna. Será redirigido al formulario de vacunación")
        
        switch (result){
            case true: window.location.assign("pacientes.html")
            alert("ke?")    
            break;
            case false: window.location.assign("dashboard.html")
            alert("ke?") 
            break;
            }
    }
    else if (user3==search){
    var result=confirm("El paciente con documento: "+search+" tiene esquema completo de la vacuna Pfizer")
    
    switch (result){
        case true: window.location.assign("dashboard.html")
        alert("ke?")    
        break;
        case false: window.location.assign("dashboard.html")
        alert("ke?") 
        break;
        }
    }
    else if (user4==search){
    var result=confirm("El paciente con documento: "+search+" no tiene vacunas registradas, será redirigido al formulario")
    switch (result){
        case true: window.location.assign("pacientesform.html")
        alert("ke?")    
        break;
        case false: window.location.assign("dashboard.html")
        alert("ke?") 
        break;
        }
}

}