function cambioEstilo(nro){
	//Establece un estilo de pagina
	setObject('estilo',nro);
	switch(nro){
		case 0: {$("#css-estilo").attr('href', 'css/default.css');break;}
		case 1: {$("#css-estilo").attr('href', 'css/estilo1.css');break;}
		case 2: {$("#css-estilo").attr('href', 'css/estilo2.css');break;}
	}/*
	if(nro==1){
		//setear estilo 1
		$("#css-estilo").attr('href', 'css/estilo1.css');
	}
	else{
		//setear estilo 2
		$("#css-estilo").attr('href', 'css/estilo2.css');
	}*/
}

function seleccionarEstilo(){
	//Esta funcion se ejecuta al iniciar, para saber que estilo seteo el usuario
	var estilo = getObject('estilo');
	//Si es distinto a nulo, es porque seteo algo
	if(estilo)
		switch(estilo){
			case 0: {cambioEstilo(0);break;}
			case 1: {cambioEstilo(1);break;}
			case 2: {cambioEstilo(2);break;}
		}
	else
		//Sino, pongo estilo 1 por defecto
		setObject('estilo',0);
}
