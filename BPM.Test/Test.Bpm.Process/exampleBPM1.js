exports.Inicio = function(data, done) {
	// llamado después de que el evento de inicio llegó a "Inicio"
	console.log("[EVENT][START]: Evento de Inicio disparado ...");
	console.log("Data:");
	console.log(data);
	done(data);
};

// Script Task: Log01
exports.Log01 = function(data, done) {
	// Llamado al comienzo de la tarea "Log01"
	console.log("[SCRIPT TASK][Log01]: Iniciado ...");
	console.log("Data:");
	data.numero1 = data.numero1 + 1;
	data.numero2 = data.numero2 * 3
	console.log(data);
	done(data);
};

exports.Log01Done = function(data, done) {
	/*
	Llamado después que el proceso ha sido notificado que la tarea ha finalizado
	 por la invocación de myProcess.taskDone("Log01").
	 Nota: <task name> + "Done" es el evento controlador 
	 que sólo se requieren para tareas de usuario, tareas manuales y tareas no especificadas
	*/
	console.log("[SCRIPT TASK][Log01]: Finalizado: [OK]");
	done(data);
};

// Script Task: Log02
exports.Log02 = function(data, done) {
	// Llamado al comienzo de la tarea "Log02"
	console.log("[SCRIPT TASK][Log02]: Iniciado ...");
	console.log("Data:");
	data.numero1 = data.numero1 + 1;
	data.numero2 = data.numero2 * 3
	console.log(data);
	done(data);
};

exports.Log02Done = function(data, done) {
	/*
	Llamado después que el proceso ha sido notificado que la tarea ha finalizado
	 por la invocación de myProcess.taskDone("Log02").
	 Nota: <task name> + "Done" es el evento controlador 
	 que sólo se requieren para tareas de usuario, tareas manuales y tareas no especificadas
	*/
	console.log("[SCRIPT TASK][Log02]: Finalizado: [OK]");
	done(data);
};

// Script Task: Log03
exports.Log03 = function(data, done) {
	// Llamado al comienzo de la tarea "Log03"
	console.log("[SCRIPT TASK][Log03]: Iniciado ...");
	console.log("Data:");
	data.numero1 = data.numero1 + 1;
	data.numero2 = data.numero2 * 3
	console.log(data);
	done(data);
};

exports.Log03Done = function(data, done) {
	/*
	Llamado después que el proceso ha sido notificado que la tarea ha finalizado
	 por la invocación de myProcess.taskDone("Log03").
	 Nota: <task name> + "Done" es el evento controlador 
	 que sólo se requieren para tareas de usuario, tareas manuales y tareas no especificadas
	*/
	console.log("[SCRIPT TASK][Log03]: Finalizado: [OK]");
	done(data);
};

exports.Fin = function(data, done) {
	// Invocado después de que se haya alcanzado la tarea "Fin"
	console.log("[EVENT][END]: Evento de Término alcanzado ...");
	done(data);
};

//------------------------------------------------------
// DEFAULT HANDLERS

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

exports.defaultErrorHandler = function(error, done) {
	// Called if errors are thrown in the event handlers
	console.log("[ERROR]: " + error)
	done();
};