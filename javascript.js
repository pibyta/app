// JavaScript Document


//acceso a fuentes remotas en Phonegap        
$( document ).bind( "mobileinit", function() {
$.support.cors = true;
$.mobile.allowCrossDomainPages = true;
});

//___________________________________________________________

$(document).ready(function(){
	
//PAGINA PERSONAJES**************************************************************************
//$.getJSON("http://localhost/capricho/app/traer_img_dibu.php", function(rutadibu){		
$.getJSON("http://www.capricholucero.xyz/app/traer_img_dibu.php", function(rutadibu){

	$.each(rutadibu, function(i, campos){

//creo dinamicamente el div de la grilla a o b segun si el nro de vuelta si es par o impar
	if (i % 2 == 0){
	$('#grillapersonajes').append('<div class="ui-block-a" id='+i+'></div>');
	}
		else{
		$('#grillapersonajes').append('<div class="ui-block-b" id='+i+'></div>');
		}


//coloco adentro dinamicamente la imagen de los personajes en la grilla con el vinculo para el popup 
		var identificador='#'+i;
		
		$(identificador).append('<a href="#pop'+i+'" data-rel="popup" data-position-to="window" data-transition="fade" data-inline="true"><img class="popphoto" src="img/'+campos.rutadibu+'"></a>');	
	});


	});	

//coloco el nombre de los personajes a los popup	
//$.getJSON("http://localhost/capricho/app/traer_nombre_dibu.php", function(nombredibu){	
$.getJSON("http://www.capricholucero.xyz/app/traer_nombre_dibu.php", function(nombredibu){
	$.each(nombredibu, function(i, campos){
		
	var idpop='#pop'+i;
	$(idpop).append('<a href="#lugares" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><h3 id="nombre">'+campos.nombredibu+"</h3>");
});
});
			
//coloco la descripcion de los personajes a los popup	
//$.getJSON("http://localhost/capricho/app/traer_descrip_dibu.php", function(descripdibu){
$.getJSON("http://www.capricholucero.xyz/app/traer_descrip_dibu.php", function(descripdibu){

	//alert (descripcion.length);		
		$.each(descripdibu, function(i, campos){
		var idpop='#pop'+i;
		$(idpop).append("'<h4>"+ campos.descripdibu +"</h4>'");

		});
});		
					
//coloco la imagen de los personajes a los popup			
//$.getJSON("http://localhost/capricho/app/traer_img_dibu.php", function(rutadibu){	
$.getJSON("http://www.capricholucero.xyz/app/traer_img_dibu.php", function(rutadibu){			
		$.each(rutadibu, function(i, campos){
				var idpop='#pop'+i;		
			$(idpop).append('<div><img src="http://www.capricholucero.xyz/app/img/'+campos.rutadibu+'"></div><a href="#lugares" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip">confirmar personaje</a>');
						
			
		});
			
});


//PAGINA LUGARES************************************************


//$.getJSON("http://localhost/capricho/app/traer_img_lugar.php", function(imagen){		
$.getJSON("http://www.capricholucero.xyz/app/traer_img_lugar.php", function(rutalugar){
	$.each(rutalugar, function(i, campos){

//creo dinamicamente el div de la grilla a o b segun si el nro de vuelta si es par o impar
	if (i % 2 == 0){
	$('#grillalugares').append('<div class="ui-block-a" id="lugar'+i+'"></div>');
	}
		else{
		$('#grillalugares').append('<div class="ui-block-b" id="lugar'+i+'"></div>');
		}
//coloco adentro dinamicamente la imagen de los lugares en la grilla con el vinculo para el popup 
		var lugar='#lugar'+i;
		
		$(lugar).append('<a href="#poplugar'+i+'" data-rel="popup" data-position-to="window" data-transition="fade" data-inline="true"><img class="popphoto" src="img/'+campos.rutalugar+'"></a>');	
	});/*cierre $.each*/
});	/*cierre $.getJSON*/

//coloco el nombre de los LUGARES a los popup	
//$.getJSON("http://localhost/capricho/app/traer_nombre_lugar.php", function(nombrelugar){	
$.getJSON("http://www.capricholucero.xyz/app/traer_nombre_lugar.php", function(nombrelugar){
	$.each(nombrelugar, function(i, campos){
		
	var idpoplugar='#poplugar'+i;
	$(idpoplugar).append('<a href="#finales" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><h3 id="nombre">'+campos.nombrelugar+"</h3>");
});/*cierre $.each*/
});/*cierre $.getJSON*/

			
//coloco la descripcion de los lugares a los popup	
//$.getJSON("http://localhost/capricho/app/traer_descrip_lugar.php", function(descriplugar){
$.getJSON("http://www.capricholucero.xyz/app/traer_descrip_lugar.php", function(descriplugar){

		$.each(descriplugar, function(i, campos){
		var idpop='#poplugar'+i;
		$(idpop).append("'<h4>"+ campos.descriplugar +"</h4>'");

		});/*cierre $.each*/
});/*cierre $.getJSON*/		
					
//coloco la imagen de los personajes a los popup			
//$.getJSON("http://localhost/capricho/app/traer_img_lugar.php", function(rutalugar){	
$.getJSON("http://www.capricholucero.xyz/app/traer_img_lugar.php", function(rutalugar){			
		$.each(rutalugar, function(i, campos){
				var idpoplugar='#poplugar'+i;		
			$(idpoplugar).append('<div><img src="http://localhost/capricho/app/img/'+campos.rutalugar+'"></div><a href="#finales" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip">confirmar lugar</a>');
						
			
		});/*cierre $.each*/
			
});/*cierre $.getJSON*/	

//PAGINA FINALES************************************************

//$.getJSON("http://localhost/capricho/app/traer_img_final.php", function(rutafinal){
$.getJSON("http://www.capricholucero.xyz/app/traer_img_final.php", function(rutafinal){			
	$.each(rutafinal, function(i, campos){

//creo dinamicamente el div de la grilla a o b segun si el nro de vuelta si es par o impar
	if (i % 2 == 0){
	$('#grillafinales').append('<div class="ui-block-a" id="final'+i+'"></div>');
	}
		else{
		$('#grillafinales').append('<div class="ui-block-b" id="final'+i+'"></div>');
		}
//coloco adentro dinamicamente la imagen de los lugares en la grilla con el vinculo para el popup 
		var final='#final'+i;
		
		$(final).append('<a href="#popfinal'+i+'" data-rel="popup" data-position-to="window" data-transition="fade" data-inline="true"><img class="popphoto" src="img/'+campos.rutafinal+'"></a>');	
	});/*cierre $.each*/
});	/*cierre $.getJSON*/

//coloco el nombre de los finales a los popup	
//$.getJSON("http://localhost/capricho/app/traer_nombre_final.php", function(nombrefinal){	
$.getJSON("http://www.capricholucero.xyz/app/traer_nombre_final.php", function(nombrefinal){	
	$.each(nombrefinal, function(i, campos){
		
	var idpopfinal='#popfinal'+i;
	$(idpopfinal).append('<a href="#final" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><h3 id="nombre">Final '+campos.nombrefinal+"</h3>");
});/*cierre $.each*/
});/*cierre $.getJSON*/


//coloco la imagen de los finales a los popup			
//$.getJSON("http://localhost/capricho/app/traer_img_final.php", function(rutafinal){	
$.getJSON("http://www.capricholucero.xyz/app/traer_img_final.php", function(rutafinal){			
		$.each(rutafinal, function(i, campos){
				var idpopfinal='#popfinal'+i;		
			$(idpopfinal).append('<div><img src="http://localhost/capricho/app/img/'+campos.rutafinal+'"></div><a href="#cuento" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip">confirmar final</a>');
						
			
		});/*cierre $.each*/
			
});/*cierre $.getJSON*/	



});/*cierre $(document).ready






/*<div class="ui-block-a"><a href="#pop0" data-rel="popup" data-position-to="window" data-transition="fade" data-inline="true"><img class="popphoto" src="img/bosque.jpg" alt="bosque"></a></div>
*/



			   	
				
		

			

/*
 //cuento armado
var mascota=" nicolas ";
var txtlugar="bosque";
var txtfinal="feliz";

var cuentoarmado='Una pequeña mascota llamada '+ mascota +' que caminaba siempre inquieta y curiosa. Un día encontró un globo que volaba divertido haciendo piruetas por el aire y comenzó a seguirlo hasta que '+ txtlugar + txtfinal;

$("p#elcuento").append(cuentoarmado);

 //guardar offline


 var dibujitos;
            
            if(localStorage.getItem('dibujitos')) {
                dibujitos = JSON.parse(localStorage.getItem('dibujitos'));
            } else {
                // si no hay local storage, aquí usamos datos predeterminados, pero se traerían de un servidor
                dibujitos = [
                    {
                        id: 1,
                        nombre: 'mimosin',
                        descrip: 'tranquilo y atento'
					},
					 {
                        id: 2,
                        nombre: 'pichibu',
                        descrip: 'lindo y atento'
					}
					
			]
			}
		
 
 //guardar offline
 localStorage.setItem('dibujitos', JSON.stringify(dibujitos));
           
//urlabsoluta/funcion
//getJSON("http:www.capricholucero/app/img_personajes.php",datos,mostrarImgPersonajes);

//getJSON("http:www.capricholucero/app/img_lugares.php",datos,mostrarImgLugares);

//getJSON("http:www.capricholucero/app/img_finales.php",datos,mostrarImgFinales);
//}


	

$("#ponerelnombreid").click(cargar_cuento);


function llenar_variable(){
	
	var personaje="mimosin";
	
		
}






function cargar_cuento(){
}

function guardar(){
	localStorage.setItem("nombre", "Pepe");
}
*/