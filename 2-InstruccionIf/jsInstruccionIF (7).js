function mostrar()

/*Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero", mostrar 
el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/

{
//tomo la edad 
	var edad;
	edad = document.getElementById("edad").value;
	var estadoCivil;
	estadoCivil = document.getElementById("estadoCivil").value;

    if(edad < 18 && estadoCivil != "soltero")
    {
      alert("es muy pequeño para NO ser soltero");
    }
}//FIN DE LA FUNCIÓN