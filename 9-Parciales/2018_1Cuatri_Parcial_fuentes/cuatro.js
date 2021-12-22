function mostrar()
{
	var numeroUno;
	var numeroDos;
	var mensaje;
	var eresta;
	var suma;

	numeroUno= prompt("ingrese un numero");
	numeroUno= parseInt(numeroUno);
	numeroDos= prompt("ingrese otro numero");
	numeroDos= parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		mensaje= ("los numeros son " + numeroUno + " y " + numeroDos );
	}else{
		if(numeroUno>numeroDos)
		{
			resta= numeroUno - numeroDos;
			mensaje=("la resta es " + resta);
		}else{
			suma= numeroUno +numeroDos;
			mensaje= ("la suma es " + suma);

			if(suma>10)
			{
				mensaje= ("la  suma es " + suma + " y supero el 10");
			}//if(suma>10)
		}//if(numeroUno>numeroDos)
	}//if(numeroUno==numeroDos)

	alert(mensaje);
}