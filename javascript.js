// JavaScript Document


//acceso a fuentes remotas en Phonegap        
$( document ).bind( "mobileinit", function() {
$.support.cors = true;
$.mobile.allowCrossDomainPages = true;
});



$(document).ready(function(){
	
//PAGINA PERSONAJES**************************************************************************
$.getJSON("http://localhost/capricho/app/traer_img_dibu.php", function(rutadibu){		
//$.getJSON("http://www.capricholucero.xyz/app/traer_img_dibu.php", function(imagen){
	
	$.each(rutadibu, function(i, campos){

//creo dinamicamente el div de la grilla a o b segun si el nro de vuelta si es par o impar
	if (i % 2 == 0){
	$('#grillapersonajes').append("<div class='ui-block-a' id="+i+"></div>");
	
	}
		else{
		$('#grillapersonajes').append("<div class='ui-block-b' id="+i+"></div>");
		}

//coloco adentro dinamicamente la imagen de los personajes en la grilla con el vinculo para el popup 
		var idpers='#'+i;
$(idpers).append('<div><a href="#poppersonaje'+i+'" data-rel="popup" data-position-to="window" data-transition="fade" data-inline="true"><img class="popphoto" src="img/'+campos.rutadibu+'"></a></div>');	

	
//guardo offline cada ruta en cada vuelta del bucle	
//localStorage.setItem("rutadibu", campos.rutadibu);
	});/*cierre $.each*/
	

});/*cierre $.getJSON*/	

//coloco el nombre de los personajes a los popup	
$.getJSON("http://localhost/capricho/app/traer_nombre_dibu.php", function(nombredibu){	

	$.each(nombredibu, function(i, campos){
		
	var idpop='#poppersonaje'+i;
	$(idpop).append('<a href="#lugares" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><h3 id="nombre">'+campos.nombredibu+"</h3>");
	
//guardo offline cada nombre en cada vuelta del bucle	
//localStorage.setItem("nombredibu", campos.nombredibu);
	//alert(campos.nombredibu);
	
});/*cierre $.each*/

});/*cierre $.getJSON*/
			
//coloco la descripcion de los personajes a los popup	
$.getJSON("http://localhost/capricho/app/traer_descrip_dibu.php", function(descripdibu){
//$.getJSON("http://www.capricholucero.xyz/app/traer_descrip_dibu.php", function(descripcion){

	//alert (descripcion.length);		
		$.each(descripdibu, function(i, campos){
		var idpop='#poppersonaje'+i;
		$(idpop).append("'<h4>"+ campos.descripdibu +"</h4>'");
		
//guardo offline cada descripcion en cada vuelta del bucle
//localStorage.setItem("nombredibu", campos.descripdibu);
		});/*cierre $.each*/
});	/*cierre $.getJSON*/	
					
//coloco la imagen de los personajes a los popup			
$.getJSON("http://localhost/capricho/app/traer_img_dibu.php", function(rutadibu){	
			
		$.each(rutadibu, function(i, campos){
		var idpop='#poppersonaje'+i;		
		$(idpop).append('<div><div><img src="http://www.capricholucero.xyz/app/img/'+campos.rutadibu+'"></div><a href="#lugares" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip" id="btnpers'+i+'">confirmar personaje</a></div>');
						
		var cantpersonajes=rutadibu.length;


//alert(cant);		
		});/*cierre $.each*/
			
});/*cierre $.getJSON*/
/*
var num=0;
var botonpersonaje='#btnpers'+num;
$(botonpersonaje).click(eleccionpers);

function eleccionpers(){
var personaje_elegido=1;
alert(personaje_elegido);
console.log(personaje_elegido);
}
*/
/*
//indicar que si hace clic sobre el btnpers1 o 2 o 3 etc el valor de personaje_elegido sea de 1 en adelante
for (n=0; n<cant;n++){
var btnpresionado="'#btnpers"+n+"'";
};
*/


//guardo variable de eleccion

//PAGINA LUGARES*************************************************************************

$.getJSON("http://localhost/capricho/app/traer_img_lugar.php", function(imagen){		
//$.getJSON("http://www.capricholucero.xyz/app/traer_img_lugar.php", function(imagen){
	$.each(imagen, function(i, campos){

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
//guardo offline cada ruta en cada vuelta del bucle	
//localStorage.setItem("rutalugar", campos.rutalugar);		
		
	});/*cierre $.each*/
});	/*cierre $.getJSON*/

//*******************************************************************************************
//coloco el nombre de los LUGARES a los popup	
$.getJSON("http://localhost/capricho/app/traer_nombre_lugar.php", function(nombrelugar){	

	$.each(nombrelugar, function(i, campos){
		
	var idpoplugar='#poplugar'+i;
	$(idpoplugar).append('<a href="#finales" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><div><h3 id="nombre">'+campos.nombrelugar+"</h3></div>");
	
	
//guardo offline cada nombre en cada vuelta del bucle	
//localStorage.setItem("nombrelugar", campos.nombrelugar);	
});/*cierre $.each*/

});/*cierre $.getJSON*/

//*******************************************************************************************			
//coloco la descripcion de los lugares a los popup	
$.getJSON("http://localhost/capricho/app/traer_descrip_lugar.php", function(descriplugar){
//$.getJSON("http://www.capricholucero.xyz/app/traer_descrip_lugar.php", function(descripcion){

		
		$.each(descriplugar, function(i, campos){
		var idpop='#poplugar'+i;
		$(idpop).append("'<div><h4>"+ campos.descriplugar +"</h4></div>'");
		});/*cierre $.each*/
		
});/*cierre $.getJSON*/		
					
//coloco la imagen de los personajes a los popup			
$.getJSON("http://localhost/capricho/app/traer_img_lugar.php", function(rutalugar){	
			
			$.each(rutalugar, function(i, campos){
				var idpoplugar='#poplugar'+i;		
			$(idpoplugar).append('<div><div><img src="http://localhost/capricho/app/img/'+campos.rutalugar+'"></div><a href="#finales" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip">confirmar lugar</a></div>');
						
			});/*cierre $.each*/
		
});/*cierre $.getJSON*/	

//PAGINA FINALES************************************************

$.getJSON("http://localhost/capricho/app/traer_img_final.php", function(imagen){	
	$.each(imagen, function(i, campos){

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
$.getJSON("http://localhost/capricho/app/traer_nombre_final.php", function(nombrefinal){	

	$.each(nombrefinal, function(i, campos){
		
	var idpopfinal='#popfinal'+i;
	$(idpopfinal).append('<a href="#final" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><div><h3 id="nombre">Final '+campos.nombrefinal+"</h3></div>");
	
//guardo offline cada nombre en cada vuelta del bucle	
//localStorage.setItem("nombrefinal", campos.nombrefinal);	

});/*cierre $.each*/
});/*cierre $.getJSON*/


//coloco la imagen de los finales a los popup			
$.getJSON("http://localhost/capricho/app/traer_img_final.php", function(rutafinal){	
			
		$.each(rutafinal, function(i, campos){
		var idpopfinal='#popfinal'+i;		
		$(idpopfinal).append('<div><div><img src="http://localhost/capricho/app/img/'+campos.rutafinal+'"></div><a href="#cuento" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip">confirmar final</a></div>');
				
//guardo offline cada ruta en cada vuelta del bucle	
//localStorage.setItem("rutafinal", campos.rutafinal);
			
});/*cierre $.each*/
			
});/*cierre $.getJSON*/	


//***************** CUENTO**********************************
//el valor del nombre del personaje depende de la elección
var personaje_elegido="pichibu";
var descripcion_elegida="alegre y feliz";
var iniciocuento='Una pequeña mascota llamada '+ personaje_elegido +' que caminaba siempre '+descripcion_elegida+'. Un día encontró un globo que volaba divertido haciendo piruetas por el aire y comenzó a seguirlo hasta que '
$('#elcuento').append('<p>'+iniciocuento);

//traigo todos los txt lugares y los guardo en un array
$.getJSON("http://localhost/capricho/app/traer_txt_lugar.php", function(txtlugar){	
	$.each(txtlugar, function(i, campos){
	lugares[i]=campos.txtlugar;
	
//guardo offline cada txt en cada vuelta del bucle	
//localStorage.setItem("lugares", campos.txtlugar);
//localStorage.setItem('lugares', JSON.stringify(campos.txtlugar));	
	})/*cierre $.each*/


//indico que posicion del array	quiero que se muestre que depende de hacer clic en determinado boton

var lugar_elegido=lugares[0];
$('#elcuento').append('<p>'+lugar_elegido+'</p>');

		
});/*cierre $.getJSON*/	


//traigo todos los txt finales y los guardo en un array
$.getJSON("http://localhost/capricho/app/traer_txt_final.php", function(txtfinal){	
	$.each(txtfinal, function(i, campos){
	finales[i]=campos.txtfinal;
	//alert(finales);
	});/*cierre $.each*/
	
	var final_elegido=finales[1];
	$('#elcuento').append('<p>'+final_elegido+'</p>');

//guardar offline
//localStorage.setItem('losfinales', JSON.stringify(finales));
	
});/*cierre $.getJSON*/	


});/*cierre $(document).ready*/


/*
//cuidado porque anda pero como que no tira el alert de una
if (document.location=='http://localhost/capricho/app/index.html#cuento'){
	 alert("hola es la pag de cuentos");
};
*/

