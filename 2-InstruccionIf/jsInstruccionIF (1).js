function mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById("edad").value;

    if(edad == 15)
	{
		alert("niña bonita");
	}



	
}//FIN DE LA FUNCIÓN

/**
 *  edad = 14
 * 
 * edad and   15 	| false 
 * 15 	and edad 	| false 
 * edad = 15 and 15 | true
 * 
 */