// JavaScript Document
//document.addEventListener("deviceReady",arrancar,false);
//apenas arranca debe traer las imagenes

//function arrancar(){


$(document).ready(function(){
	$.getJSON("http://www.capricholucero.xyz/app/nombre_pers.php", function(resultados){
			
    	for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
            	$("#mimosin").append(campo);
            });
			}
    
	
	});
});




		//urlabsoluta/funcion
//getJSON("http:www.capricholucero/app/img_personajes.php",datos,mostrarImgPersonajes);

//getJSON("http:www.capricholucero/app/img_lugares.php",datos,mostrarImgLugares);

//getJSON("http:www.capricholucero/app/img_finales.php",datos,mostrarImgFinales);
//}


	
function mostrarImgPersonajes(){
//getJSON();
}

function mostrarImgLugares(){
//getJSON();
}

function mostrarImgFinales(){
//getJSON();
}




$("#ponerelnombreid").click(cargar_cuento);
$("#ponerelnombreid").click(cargar_cuento);

$("#ponerelnombreid").click(llenar_variable);

function llenar_variable(){
	
	var personaje="mimosin";
	alert(personaje);
		
}






function cargar_cuento(){


	
alert("Gracias por seleccionar el personaje de tu cuento, pasaré una variable");
}

function guardar(){
	localStorage.setItem("nombre", "Pepe");
}

function ver(){
	alert(localStorage.getltem("nombre"));
	}

$("#btn_guardar").click(guardar);

$("#btn_ver").click(ver);

var array_personajes=new Array();
array_personajes[0]="http:www.capricholucero/app/img/1.jpg";
array_personajes[1]="http:www.capricholucero/app/img/2.jpg";
array_personajes[2]="http:www.capricholucero/app/img/3.jpg";
array_personajes[3]="http:www.capricholucero/app/img/4.jpg";

function hay(){
	alert("hay señal");
}
function noHay(){
	alert("no hay señal");
}

//window.addEventListener();
//window.addEventListener('online',hay);
//window.addEventListener('online',noHay);