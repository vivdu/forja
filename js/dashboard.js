
var user1=52368795;
var user2=1001235478;
var user3=25413574;
var user4=1007203506;
const usuario=["Pablo Combita", "52368795", "Sinovac", "12/03/2021", "Yolanda Llanes", "1001235478","Pfizer","04/11/2021","Juan Ruiz","25413574","Moderna","28/01/2022","Miguel Torres", "1007203506"]

var button=document.getElementById("iconsearch")
button.onclick=()=>{
    var search=document.getElementById("usersearch").value;

    if (user1==search){
        var result=confirm("Usuario: "+usuario[0]+" \nDocumento: "+usuario[1]+
        "\nBiológico aplicado: "+usuario[2]+"\nFecha última dosis: "+usuario[3]+
        " \nEste paciente solo registra una dosis. Será redirigido para completar el esquema.")
        
        switch (result){
        case true: window.location.assign("pacientes.html")
        alert("Redirigiendo")
        break;
        case false: window.location.assign("dashboard.html")
        console.log("caso1")
        break;
        }
    }    
    else if (user2==search){
        var result=confirm("Usuario: "+usuario[4]+" \nDocumento: "+usuario[5]+
        "\nBiológico aplicado: "+usuario[6]+"\nFecha última dosis: "+usuario[7]+
        " \nEste paciente registra dos dosis. Será redirigido para registrar el refuerzo.")
        
        switch (result){
            case true: window.location.assign("pacientes.html")
            alert("Redirigiendo")
            break;
            case false: window.location.assign("dashboard.html")
            console.log("caso2") 
            break;
            }
    }
    else if (user3==search){
    var result=confirm("Usuario: "+usuario[8]+" \nDocumento: "+usuario[9]+
    "\nBiológico aplicado: "+usuario[10]+"\nFecha última dosis: "+usuario[11]+
    " \nEste paciente registra esquema completo. No requiere más dosis.")
    
    switch (result){
        case true: window.location.assign("dashboard.html")
        break;
        case false: window.location.assign("dashboard.html")
        console.log("caso3") 
        break;
        }
    }
    else if (user4==search){
    var result=confirm("Usuario: "+usuario[12]+" \nDocumento: "+usuario[13]+
    "\nBiológico aplicado: "+usuario[14]+"\nFecha última dosis: "+usuario[15]+
    " \nEste paciente no registra dudas. Será redirigido para registro de usuario.")
    switch (result){
        case true: window.location.href="pacientesform.html"
        alert("Redirigiendo")
        break;
        case false: window.location.assign("index.html")
        console.log("caso4") 
        break;
        }
}

}