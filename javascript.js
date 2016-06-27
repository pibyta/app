// JavaScript Document


//acceso a fuentes remotas en Phonegap        
$( document ).bind( "mobileinit", function() {
$.support.cors = true;
$.mobile.allowCrossDomainPages = true;
});



$(document).ready(function(){

//arrays que guardan todos los datos posibles de los personajes para el cuento
var pers=new Array();
var persdescrip=new Array();

//variables donde se guardaran los datos elegidos de los personajes para el cuento
var perselegido="";
var descripelegida="";
var lugarelegido="";
var finalelegido="";
//arrays que guardan todos los txt posibles de los lugares y personajes para el cuento
var arraytxtlugar=new Array();
var arraytxtfinal=new Array();

var cuento;
	
//PAGINA PERSONAJES**************************************************************************
function mostrar_imgdibu(){
	//$.getJSON("http://localhost/capricho/app/traer_img_dibu.php", function(rutadibu){		
	$.getJSON("http://www.capricholucero.xyz/app/traer_img_dibu.php", function(rutadibu){
	
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
		$(idpers).append('<div><a href="#poppersonaje'+i+'" data-rel="popup" data-position-to="window" data-transition="fade" data-inline="true"><img class="popphoto" src="http://www.capricholucero.xyz/app/img/'+campos.rutadibu+'"></a></div>');	

	
	//guardo offline cada ruta en cada vuelta del bucle	
//localStorage.setItem('lugares', JSON.stringify(campos.rutadibu));	
	
		});/*cierre $.each*/

	});/*cierre $.getJSON*/	
};/*cierre funcion*/	
mostrar_imgdibu();


//********************************

function llenar_popup_pers(){
//coloco el nombre de los personajes a los popup	
	//$.getJSON("http://localhost/capricho/app/traer_nombre_dibu.php", function(nombredibu,iddibu){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_nombre_dibu.php", function(nombredibu,iddibu){
		$.each(nombredibu, function(i, campos){
		
			var idpop='#poppersonaje'+i;
			$(idpop).append('<a href="#lugares" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><h3 id="nombre">'+campos.nombredibu+"</h3>");

			//guardo en un array cada nombre en cada vuelta del bucle cada posicion de este array tiene el nombre del id que viene de la base de datos	
			var posnombre=campos.iddibu;
			pers[posnombre]=campos.nombredibu;
			//alert(pers);

			//guardo offline cada nombre en cada vuelta del bucle	
			//localStorage.setItem("nombredibu", campos.nombredibu);
	
		});/*cierre $.each*/

	

	//coloco la descripcion de los personajes a los popup	
	//$.getJSON("http://localhost/capricho/app/traer_descrip_dibu.php", function(descripdibu,iddibu){
	$.getJSON("http://www.capricholucero.xyz/app/traer_descrip_dibu.php", function(descripdibu,iddibu){

		//alert (descripciondibu.length);		
		$.each(descripdibu, function(i, campos){
			var idpop='#poppersonaje'+i;
			$(idpop).append("'<h4>"+ campos.descripdibu +"</h4>'");

		//guardo en un array cada descripcion en cada vuelta del bucle cada posicion de este array tiene el nombre del id que viene de la base de datos	
		var posdescrip=campos.iddibu;
		persdescrip[posdescrip]=campos.descripdibu;
	
		
	//guardo offline cada descripcion en cada vuelta del bucle
	//localStorage.setItem("nombredibu", campos.descripdibu);
		});/*cierre $.each*/
		
		//alert(persdescrip);
	
	
	//coloco la imagen de los personajes a los popup			
	//$.getJSON("http://localhost/capricho/app/traer_img_dibu.php", function(rutadibu,iddibu){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_img_dibu.php", function(rutadibu,iddibu){			
			$.each(rutadibu, function(i, campos){
				var idpop='#poppersonaje'+i;		
				$(idpop).append('<div><div><img src="http://www.capricholucero.xyz/app/img/'+campos.rutadibu+'"></div><a href="#lugares"  class="ui-btn ui-btn-corner-all confirmar" data-transition="flip" id="i">confirmar personaje</a></div>');

 		var identificador='#'+i;
			$(identificador).click(function(){
				
			posnombre=campos.iddibu;
			perselegido=pers[posnombre];
		localStorage.setItem('nombrepersonaje',perselegido);			
			
			posdescrip=campos.iddibu;
			descripelegida=persdescrip[posdescrip];
			//guardar offline
		localStorage.setItem('descripcionpersonaje',descripelegida);
			//alert(descripelegida);
		//console.log(perselegido);
		});			
			
	
		});/*cierre $.each*/
	});/*cierre $.getJSON*/		
	});/*cierre $.getJSON*/
	});	/*cierre $.getJSON*/	
};/*cierre funcion*/

llenar_popup_pers();




//PAGINA LUGARES*************************************************************************
function mostrar_imglugar(){
//$.getJSON("http://localhost/capricho/app/traer_img_lugar.php", function(rutalugar){		
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
			
//guardo offline cada ruta en cada vuelta del bucle	
//localStorage.setItem("rutalugar", campos.rutalugar);		
		
	});/*cierre $.each*/
});	/*cierre $.getJSON*/
};/*cierre funcion*/
mostrar_imglugar();

//*******************************************************************************************
function llenar_popup_lugar(){
//coloco el nombre de los LUGARES a los popup	
	//$.getJSON("http://localhost/capricho/app/traer_nombre_lugar.php", function(nombrelugar){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_nombre_lugar.php", function(nombrelugar){
		$.each(nombrelugar, function(i, campos){
		
			var idpoplugar='#poplugar'+i;
			$(idpoplugar).append('<a href="#finales" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><div><h3 id="nombre">'+campos.nombrelugar+"</h3></div>");
	
	
		//guardo offline cada nombre en cada vuelta del bucle	
		//localStorage.setItem("nombrelugar", campos.nombrelugar);	

		});/*cierre $.each*/



	//coloco la descripcion de los lugares a los popup	
	//$.getJSON("http://localhost/capricho/app/traer_descrip_lugar.php", function(descriplugar){
	$.getJSON("http://www.capricholucero.xyz/app/traer_descrip_lugar.php", function(descriplugar){
		
		$.each(descriplugar, function(i, campos){
		var idpop='#poplugar'+i;
		$(idpop).append("'<div><h4>"+ campos.descriplugar +"</h4></div>'");
		
		});/*cierre $.each*/
		
	
		
	//coloco la imagen de los personajes a los popup			
	//$.getJSON("http://localhost/capricho/app/traer_img_lugar.php", function(rutalugar){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_img_lugar.php", function(rutalugar){			
			$.each(rutalugar, function(i, campos){
				var idpoplugar='#poplugar'+i;		
			$(idpoplugar).append('<div><div><img src="http://www.capricholucero.xyz/app/img/'+campos.rutalugar+'"></div><a href="#finales" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip">confirmar lugar</a></div>');




/*
poner el id
var btnlugar='#'+i;
			$(btnlugar).click(function(){
				
			posnombre=campos.iddibu;
			perselegido=pers[posnombre];
		localStorage.setItem('nombrepersonaje',perselegido);
			});
			*/
			});/*cierre $.each*/
		
	});/*cierre $.getJSON*/	
});/*cierre $.getJSON*/
	});/*cierre $.getJSON*/		
};/*cierre funcion*/	
llenar_popup_lugar();

//PAGINA FINALES************************************************

function mostrar_imgfinal(){
//$.getJSON("http://localhost/capricho/app/traer_img_final.php", function(rutafinal){	
$.getJSON("http://www.capricholucero.xyz/app/traer_img_final.php", function(rutalfinal){
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
};/*cierre funcion*/
mostrar_imgfinal();


function llenar_popup_final(){
//coloco el nombre de los finales a los popup	
	//$.getJSON("http://localhost/capricho/app/traer_nombre_final.php", function(nombrefinal){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_nombre_final.php", function(nombrefinal){
		$.each(nombrefinal, function(i, campos){
		
		var idpopfinal='#popfinal'+i;
		$(idpopfinal).append('<a href="#final" data-rel="back" class="ui-btn-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">close</a><div><h3 id="nombre">Final '+campos.nombrefinal+"</h3></div>");
	
		//guardo offline cada nombre en cada vuelta del bucle	
		//localStorage.setItem("nombrefinal", campos.nombrefinal);	

		});/*cierre $.each*/
	

	//coloco la imagen de los finales a los popup			
	//$.getJSON("http://localhost/capricho/app/traer_img_final.php", function(rutafinal){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_img_final.php", function(rutafinal){			
		$.each(rutafinal, function(i, campos){
			var idpopfinal='#popfinal'+i;		
			$(idpopfinal).append('<div><div><img src="http://www.capricholucero.xyz/app/img/'+campos.rutafinal+'"></div><a href="#cuento" class="ui-btn ui-btn-corner-all confirmar" data-transition="flip">confirmar final</a></div>');
				
		
			
		});/*cierre $.each*/
		});/*cierre $.getJSON*/	
	});/*cierre $.getJSON*/	
};/*cierre funcion*/	
llenar_popup_final();

//***************** CUENTO**********************************
function mostrar_cuento(){
	
	//traigo todos los txt lugares y los guardo en el array
	//$.getJSON("http://localhost/capricho/app/traer_txt_lugar.php", function(txtlugar,idlugar){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_txt_lugar.php", function(txtlugar,idlugar){	
			$.each(txtlugar, function(i, campos){
	
			//guardo en un array todos los lugares de los cuentos, cada posicion tiene el nombre del id de la base de datos
				var poslugar=campos.idlugar;
				arraytxtlugar[poslugar]=campos.txtlugar;
	
				//guardo offline cada txt en cada vuelta del bucle	
				
				//localStorage.setItem('lugares', JSON.stringify(campos.txtlugar));
	
			})/*cierre $.each*/

		//indico que posicion del array	quiero que se muestre que depende de hacer clic en determinado boton
		lugarelegido=arraytxtlugar[1];
	});/*cierre $.getJSON*/
	

	//$.getJSON("http://localhost/capricho/app/traer_txt_final.php", function(txtfinal,idfinal){	
	$.getJSON("http://www.capricholucero.xyz/app/traer_txt_final.php", function(txtfinal,idfinal){
		$.each(txtfinal, function(i, campos){
		//guardo en un array todos los finales de los cuentos, cada posicion tiene el nombre del id de la base de datos
			var posfinal=campos.idfinal;
			arraytxtfinal[posfinal]=campos.txtfinal;
			
		});/*cierre $.each*/
	
		//guardar offline
		//localStorage.setItem('finales', JSON.stringify(finales));

			finalelegido=arraytxtfinal[1];
			
			var perselegidofinal=localStorage.getItem('nombrepersonaje');
			var descripelegidafinal=localStorage.getItem('descripcionpersonaje');
			
			cuento='Una pequeña mascota llamada'+perselegidofinal+' que caminaba siempre '+descripelegidafinal+'. Un día encontró un globo que volaba divertido haciendo piruetas por el aire y comenzó a seguirlo hasta que '+ lugarelegido + finalelegido;

			$('#elcuento').append('<p>'+cuento+'</p>');	
	});/*cierre $.getJSON*/	

};/*cierre funcion*/	
mostrar_cuento();






//agregar boton de cerrar navigator.app.exitApp();  es de cordova usar jquey para el evento
});/*cierre $(document).ready*/



