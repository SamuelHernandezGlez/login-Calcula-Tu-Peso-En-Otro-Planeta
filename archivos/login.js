function Acceder(){
if (document.form.contraseña.value=='1324' && document.form.usuario.value=='Samuel'){ 
          alert("Usuario y cotntraseña correctos");
          document.form.submit();
          document.getElementById("usuario").value="";
          document.getElementById("contraseña").value="";
    } 
    else{ 
         alert("Usuario y cotntraseña incorrectos"); 
          document.getElementById("usuario").value="";
          document.getElementById("contraseña").value="";
    } 
} 
