function mostrar()
{
	var planetas;
	var sistemaSolar;

	switch(sistemaSolar)
	{
		case"mercurio":
		case"venus":
		case"tierra":
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
			sistemaSolar = planetas
			break;
	}

	sistemaSolar= prompt("ingrese el nombre de un planeta");


	while(isNaN(planetas)==false || sistemaSolar != planetas)
	{
		alert("error","intente de nuevo");
		planetas= prompt("ingrese el nombre de un planeta");

	}


	switch(sistemaSolar)
	{
		case"mercurio":
		case"venus":
			alert("acá hace más frio");
			break;
		case"tierra":
			alert("acá vivimos");
		default:
			alert("acá hace más frio");

	}






































/*	var planeta;
	planeta = prompt("ingrese el nombre de un planeta");
	switch(planeta)
	{
		case"trajeta Visa":
			descuento=10
			break;
		case"paypal":
			descuento=15
			break;
		case"mercurio":
		case"venus":
		case"tierra":
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
			switch(paquetesPaypal)
			{
				case"todoIncluido":
					descuento=10
					break;
			}

		case"mercado Pago":
			descuento=10
		case"efectivo":
			descuento=20
			break;
			planeta==true
			switch(paqueteEfectvo)
			{
				case"solo desayuno":
					aumento=10

					break;
				case"todo Incluido":
					descuento=15
					break;
			}	

		case"otro":
			*5/100
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
/*	var planeta;

	planeta = prompt("ingrese el nombre de un planeta");

	precioFinal= valorHabitacion*descuento/100
	precioFinal valorHabitacion
	while(isNaN(planeta)==false || planeta !=planeta)
	{
		alert("error");
		planeta = prompt("ingrese el nombre de un planeta");

	precioFinal= valorHabitacion*aumento/100
	precioFinal= valorHabitacion + aumento
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
	*/
}

/*
	var paquetesPaypal;
	var paqueteEfectvo;
	var formaDePago;
	var descuento;
	var aumento;
	var valorHabitacion
	var precioFinal;

	valorHabitacion= prompt("ingrese el valor que tiene su habitacion");
	formaDePago= prompt("ingrese su forma de pago","ejemplo: efectivo");

	switch(formaDePago)
	*/
//PARTE DEL TP EN CLASE

