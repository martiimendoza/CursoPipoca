function mostrar()
{
/*	var planeta;

	planeta = prompt("ingrese el nombre de un planeta");

	switch(planeta)
	{
		case"mercurio":
		case"venus":
		case"tierra":
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":

			planeta==true

			break;
	}

	//planeta = prompt("ingrese el nombre de un planeta");

	while(isNaN(planeta)==false || planeta==false)
	{
		alert("error");	
		planeta = prompt("ingrese el nombre de un planeata");

			switch(planeta)
		{
			case"mercurio":
			case"venus":
				mensaje= ("acá hace más frio");
				break;
			case"tierra":
				mensaje= ("acá vivimos");
			default:
				mensaje= ("acá hace más frio");
		}	
		alert(mensaje);
	}
*/
	var planeta;

	planeta = prompt("ingrese el nombre de un planeta");

	while(isNaN(planeta)==false || planeta !=planeta)
	{
		alert("error");
		planeta = prompt("ingrese el nombre de un planeta");

		switch(planeta)
	{
		case"mercurio":
		case"venus":
			mensaje= ("acá hace más frio");
			break;
		case"tierra":
			mensaje= ("acá vivimos");
			break;
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
			mensaje= ("acá hace más frio");
	}

	alert(mensaje);
	}
	

}
