exports.Inicio = function(data, done) {
	// llamado después de que el evento de inicio llegó a "Inicio"
	console.log("[EVENT][START]: Evento de Inicio disparado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

// Task: Tarea 1
exports.Tarea_1 = function(data, done) {
	// Llamado al comienzo de la tarea "Log01"
	console.log("[TASK][Tarea 1]: Iniciado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

exports.Tarea_1Done = function(data, done) {
	/*
	Llamado después que el proceso ha sido notificado que la tarea ha finalizado
	 por la invocación de myProcess.taskDone("Tarea 1").
	 Nota: <task name> + "Done" es el evento controlador 
	 que sólo se requieren para tareas de usuario, tareas manuales y tareas no especificadas
	*/
	console.log("[TASK][Tarea 1]: Finalizado: [OK]");
	done(data);
};

exports.Esta_OK_ = function(data, done) {
	// called after arriving at "Is it ok?"
	console.log("[Exclusive Gateways (Decisions)][Esta OK?]: Iniciado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

exports.Esta_OK_$SI = function(data) {
	// has to return true or false
	// the name of the sequence flow follows after "$".
	// if there is no name, an error is thrown 
	console.log("[Esta OK?][SI]: ...");
	console.log("Data:");
	console.log(data);
	
	return data.checkPropertie;
};

exports.Esta_OK_$NO = function(data) {
	// has to return true or false
	// the name of the sequence flow follows after "$".
	// if there is no name, an error is thrown 
	console.log("[Esta OK?][NO]: ...");
	console.log("Data:");
	console.log(data);
	
	return data.checkPropertie;
};

// Task: Tarea A
exports.Tarea_A = function(data, done) {
	// Llamado al comienzo de la tarea "Tarea A"
	console.log("[TASK][Tarea A]: Iniciado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

// Task: Tarea B
exports.Tarea_B = function(data, done) {
	// Llamado al comienzo de la tarea "Tarea B"
	console.log("[TASK][Tarea B]: Iniciado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

exports.Fin = function(data, done) {
	// Invocado después de que se haya alcanzado la tarea "Fin"
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