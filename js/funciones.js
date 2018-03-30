function distancia(){
	var slide = document.getElementById("range-distancia");
	var out = document.getElementById("valor-distancia");
	out.innerHTML = slide.value+" km";
}


function start(){
	//Metodos javascript que se ejecutaran al cargarse el body del html
	
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

function select(element){
	var btn1 = document.getElementById("res1");
	var btn2 = document.getElementById("res2");
	var btn3 = document.getElementById("res3");
	var btn4 = document.getElementById("res4");

	if(element == btn1){
		btn1.classList.add("active");
		btn2.classList.remove("active");
		btn3.classList.remove("active");
		btn4.classList.remove("active");
	}
	else if(element == btn2){
		btn2.classList.add("active");
		btn1.classList.remove("active");
		btn3.classList.remove("active");
		btn4.classList.remove("active");
	}else if(element == btn3){
		btn3.classList.add("active");
		btn2.classList.remove("active");
		btn1.classList.remove("active");
		btn4.classList.remove("active");
	}else if(element == btn4){
		btn4.classList.add("active");
		btn2.classList.remove("active");
		btn3.classList.remove("active");
		btn1.classList.remove("active");
	}
}