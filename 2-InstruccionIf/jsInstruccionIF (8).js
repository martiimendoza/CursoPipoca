function mostrar()
{
    var edad;
	edad = document.getElementById("edad").value;
	var estadoCivil;
	estadoCivil = document.getElementById("estadoCivil").value;

    if (edad >= 18 && estadoCivil == "Soltero") 
    {
        alert("es soltero y no es menor");
    }


    if ("soltero" == "soltero") 
    //casesensitive
    {
        alert("Verdadero");   
    } else {
        alert("falso");
    }

//tomo la edad  
}//FIN DE LA FUNCIÓN