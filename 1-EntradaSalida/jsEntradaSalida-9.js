/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resp;
    var entero;
    var aumento;
    sueldo = document.getElementById("sueldo").value;
   
  // respuesta =(parseInt(sueldo) + parseInt(resultado)) /10; 
    entero = parseInt(sueldo);
    resp = (10*entero)/100;
    aumento = (entero + resp);
    
    document.getElementById("resultado").value = aumento;
}
