exports.Inicio = function(data, done) {
	// llamado después de que el evento de inicio llegó a "Inicio"
	console.log();
	console.log("[EVENT][START]: Evento de Inicio disparado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

// Task: Tarea 1
exports.Tarea_1 = function(data, done) {
	// Llamado al comienzo de la tarea "Tarea 1"
	console.log();
	console.log("[TASK][Tarea 1]: Iniciado ...");
	//console.log("Data:");
	//console.log(data);
	done(data);
};

exports.Tarea_1Done = function(data, done) {
	/*
	Llamado después que el proceso ha sido notificado que la tarea ha finalizado
	 por la invocación de myProcess.taskDone("Tarea 1").
	 Nota: <task name> + "Done" es el evento controlador 
	 que sólo se requieren para tareas de usuario, tareas manuales y tareas no especificadas
	*/
	console.log();
	console.log("[TASK][Tarea 1]: Finalizado: [OK]");
	done(data);
};

exports.Numero1_Numero2_ = function(data, done) {
	// called after arriving at "Is it ok?"
	console.log();
	console.log("[Numero1 > Numero2?]: Iniciado Validación ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

exports.Numero1_Numero2_$SI = function(data) {
	// has to return true or false
	// the name of the sequence flow follows after "$".
	// if there is no name, an error is thrown 
	console.log();
	console.log("[Numero1 > Numero2?][SI]: ...");

	if (data.numero1 > data.numero2) {
		return true;
	}
	return false;
};

exports.Numero1_Numero2_$NO = function(data) {
	// has to return true or false
	// the name of the sequence flow follows after "$".
	// if there is no name, an error is thrown 
	console.log();
	console.log("[Numero1 > Numero2?][NO]: ...");

	if ( !(data.numero1 > data.numero2) ) {
		return true;
	}
	return false;
};

// Task: Sumar
exports.Sumar = function(data, done) {
	// Llamado al comienzo de la tarea "Sumar"
	console.log();
	console.log("[TASK][Sumar]: Iniciado ...");
	
	let total = (data.numero1 + data.numero2);
	data.totalSuma = total;
	
	done(data);
};

// Task: Multiplicar
exports.Multiplicar = function(data, done) {
	// Llamado al comienzo de la tarea "Multiplicar"
	console.log();
	console.log("[TASK][Multiplicar]: Iniciado ...");
	
	let total = (data.numero1 * data.numero2);
	data.totalMultiplicacion = total;
	
	done(data);
};

// Task: Tarea 2
exports.Enviar_Resultado = function(data, done) {
	// Llamado al comienzo de la tarea "Enviar_Resultado"
	console.log();
	console.log("[TASK][Enviar Resultado]: Iniciado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};


exports.Fin = function(data, done) {
	// Invocado después de que se haya alcanzado la tarea "Fin"
	console.log();
	console.log("[EVENT][END]: Evento de Término alcanzado ...");
	done(data);
};

//------------------------------------------------------
// DEFAULT HANDLERS
/*
exports.onBeginHandler = function(currentFlowObjectName, data, done) {
    // do something
	console.log("[*] Iniciando - Task Name: " + currentFlowObjectName);
	done(data);
};

exports.onEndHandler = function(currentFlowObjectName, data, done) {
    // do something
	console.log("[*] Finalizando - Task Name: " + currentFlowObjectName);
	done(data);
};
*/
exports.defaultErrorHandler = function(error, done) {
	// Called if errors are thrown in the event handlers
	console.log("[ERROR]: " + error)
	done();
};