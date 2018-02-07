const bpmn = require("bpmn");

// Suponemos que hay un jobTestBPMN.js además de jobTestBPMN.bpmn que contiene el controlador y lógica del proceso

// create collaborating processes
bpmn.createUnmanagedCollaboratingProcesses(__dirname + "/Test.Bpm.Process/exampleBPM3.bpmn", function(err, collaboratingProcesses){

	if (err) {
		console.log("[ERROR]: " + err);
	} else {
		console.log("[BPM-PROCESS]: Iniciando Proceso ...");
		console.log();
		// Iniciamos el Proceso, disparando el evento de "Inicio" definido en el Modelo del Proceso
		// iniciamos el primer proceso
			
		let dataInput = {
			numero1: 3,
			numero2: 6
		};
		
		var firstProcess = collaboratingProcesses[1];
		firstProcess.triggerEvent("Inicio", dataInput);
	}

});
