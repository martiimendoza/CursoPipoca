/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var numeroUno;
    var numeroDos;
    var respuesta;
    


    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    respuesta = parseInt(numeroUno) + parseInt(numeroDos); 
    
    
    alert("el numero es"+ " "+ respuesta);
}	
	

function restar()
{
    var numeroUno;
    var numeroDos;
    var respuesta;
    


    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    respuesta = parseInt(numeroUno) - parseInt(numeroDos); 
    
    
    alert("el numero es"+ " "+ respuesta);
}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var respuesta;
    


    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    respuesta = parseInt(numeroUno) * parseInt(numeroDos); 
    
    
    alert("el numero es"+ " "+ respuesta);
}

function dividir()
{
	
	var numeroUno;
    var numeroDos;
    var respuesta;
    


    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    respuesta = parseInt(numeroUno) / parseInt(numeroDos); 
    
    
    alert("el numero es"+ " "+ respuesta);
}

