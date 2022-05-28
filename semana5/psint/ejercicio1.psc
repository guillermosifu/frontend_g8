Proceso compra_entrada
	Definir nombreComprador Como Caracter;
	Definir nombreEntrada Como Caracter;
	Definir precioEntrada Como Entero;
	
	//proceso
	Escribir 'ingresa tu nombre ';
	Leer nombreComprador;
	Escribir 'tu nombre es '+ nombreComprador;
	Escribir 'que entrada deses comprar? ';
	Leer nombreEntrada;
	
	//salida
	Escribir 'tu nombre es ' + nombreComprador + ' compraste la entrada para ' + nombreEntrada;
	Escribir 'el precio de la entrada es ' ;
	Leer precioEntrada;
	Escribir 'tu nombre es ' + nombreComprador + ' compraste la entrada para ' + nombreEntrada + 'el precio fue ';
	Escribir precioEntrada;
FinProceso
