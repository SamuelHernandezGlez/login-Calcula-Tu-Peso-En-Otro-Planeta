	function Cal(){
    	//Declarar las variables
		var m,p,g,peso;
		//Recuperar los valores
		m=parseInt(document.getElementById("Mas").value);
		g=parseInt(document.getElementById("Gr").value);
		//Realizar la operación
		peso=(m*g)/9.8;
		//Mostar el resultado
		document.getElementById("Pe").value=peso;
		}
	function Nuevo(){
		document.getElementById("Mas").value="";
		document.getElementById("Pla").value="";
		document.getElementById("Gr").value="";
		document.getElementById("Pe").value="";
}
