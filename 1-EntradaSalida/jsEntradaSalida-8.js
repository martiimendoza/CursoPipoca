/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroDividendo;
    var numeroDivisor;
    var respuesta;
    


    numeroDividendo = document.getElementById("numeroDividendo").value;
    numeroDivisor = document.getElementById("numeroDivisor").value;
    respuesta = parseInt(numeroDividendo) / parseInt(numeroDivisor); 
    
    
    alert("el numero es"+ " "+ respuesta);
}
