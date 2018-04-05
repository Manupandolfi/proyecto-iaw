function distancia(){
	var slide = $("#range-distancia");
	var out = $("#valor-distancia");
	out.innerHTML = slide.value+" km";
}


function start(){
	//Metodos javascript que se ejecutaran al cargarse el body del html
	cargarCanchas(complejos);
}

function menos(){
	var inputTamanio = document.getElementById("input-tamanio");
	var i = parseInt(inputTamanio.value);
	//Si el valor es mayor a 4, entonces puedo disminuir
  	if(i>4){
  		inputTamanio.value = i-1;
  	}

}

function mas(){
	var inputTamanio = document.getElementById("input-tamanio");
	var i = parseInt(inputTamanio.value);
	//Si el valor es menor a 11, entonces puedo incrementar
  	if(i<11){
  		inputTamanio.value = i+1;
  	}
}

function btnNombre(){
	var btn = document.getElementById("btn-nombre");
	var txt = document.getElementById("nombre");
	if(btn.classList.contains("btn-add")){
		btn.classList.remove("btn-add");
		btn.classList.remove("glyphicon-plus");
		btn.classList.add("btn-remove");
		btn.classList.add("glyphicon-minus");
		txt.classList.remove("get-out");
	}else{
		btn.classList.remove("btn-remove");
		btn.classList.remove("glyphicon-minus");
		btn.classList.add("btn-add");
		btn.classList.add("glyphicon-plus");
		txt.classList.add("get-out");
	}
}

function btnDistancia(){
	distancia();
	var btn = document.getElementById("btn-distancia");
	var txt = document.getElementById("contenido-distancia");
	if(btn.classList.contains("btn-add")){
		btn.classList.remove("btn-add");
		btn.classList.remove("glyphicon-plus");
		btn.classList.add("btn-remove");
		btn.classList.add("glyphicon-minus");
		txt.classList.remove("get-out");
		document.getElementById("valor-distancia").classList.remove("get-out");
	}else{
		btn.classList.remove("btn-remove");
		btn.classList.remove("glyphicon-minus");
		btn.classList.add("btn-add");
		btn.classList.add("glyphicon-plus");
		txt.classList.add("get-out");
		document.getElementById("valor-distancia").classList.add("get-out");
	}
}

function btnTamanio(){
	var btn = document.getElementById("btn-tamanio");
	var txt = document.getElementById("contenido-tamanio");
	if(btn.classList.contains("btn-add")){
		btn.classList.remove("btn-add");
		btn.classList.remove("glyphicon-plus");
		btn.classList.add("btn-remove");
		btn.classList.add("glyphicon-minus");
		txt.classList.remove("get-out");
	}else{
		btn.classList.remove("btn-remove");
		btn.classList.remove("glyphicon-minus");
		btn.classList.add("btn-add");
		btn.classList.add("glyphicon-plus");
		txt.classList.add("get-out");
	}
}

function btnHorario(){
	var btn = document.getElementById("btn-horario");
	var txt = document.getElementById("contenido-horario");
	if(btn.classList.contains("btn-add")){
		btn.classList.remove("btn-add");
		btn.classList.remove("glyphicon-plus");
		btn.classList.add("btn-remove");
		btn.classList.add("glyphicon-minus");
		txt.classList.remove("get-out");
	}else{
		btn.classList.remove("btn-remove");
		btn.classList.remove("glyphicon-minus");
		btn.classList.add("btn-add");
		btn.classList.add("glyphicon-plus");
		txt.classList.add("get-out");
	}
}

function cargarCanchas(complejosACargar){
	var lista = document.getElementById("lista-resultados");
	//Vacio la lista de resultados
	while(lista.hasChildNodes())
		lista.removeChild(lista.firstChild);
	//Seteo la cantidad de resultados, que se van a cargar
	document.getElementById("cant-res").innerHTML = complejosACargar.length;
	for(i=0 ; i<complejosACargar.length ; i++){
		var div = document.createElement("DIV");
		var id = "res-"+i;
		div.setAttribute("id",id);
		var button = document.createElement("BUTTON");
		button.setAttribute("onclick","select(this)");
		button.setAttribute("type","button");
		button.setAttribute("class","list-group-item");
		var titulo = document.createElement("P");
		var subtitulo = document.createElement("P");
		titulo.setAttribute("class","titulo-res");
		subtitulo.setAttribute("class","subtitulo-res");
		titulo.innerHTML = complejosACargar[i].nombre;
		subtitulo.innerHTML = complejosACargar[i].direccion;
		button.append(titulo);
		button.append(subtitulo);
		div.append(button);
		lista.append(div);
	}
}

function buscar() {
	var nombre = document.getElementById("nombre");
	var distancia = document.getElementById("range-distancia");
	var tamanio = document.getElementById("input-tamanio");
	var resultado = complejos.slice();
	var aux = [];
	if(nombre.value!=""){
		for(i = 0; i<resultado.length ; i++){
			//Si el nombre ingresado tiene coincidencia con el nombre del complejo
			if(resultado[i].nombre.toLowerCase().search(nombre.value.toLowerCase())!=-1){
				aux.push(resultado[i]);
			}
		}
		resultado = aux.slice();
		aux = [];
	}
	if(tamanio.value!="N/D"){
		for(j = 0; j<resultado.length ; j++){
			if(tieneCancha(resultado[j].canchas,tamanio.value)){
				aux.push(resultado[j]);
			}
		}
		resultado = aux.slice();
		aux = [];
	}
	cargarCanchas(resultado);
	//Falta filtrar por distancia y por horario
}

function tieneCancha(canchas,valor){
	for(k=0; k<canchas.length ; k++){
		if(canchas[k].tamanio==valor)
			return true;
	}
	return false;
}

function select(element){
	
}