const bpmn = require("bpmn");

// Suponemos que hay un jobTestBPMN.js además de jobTestBPMN.bpmn que contiene el controlador y lógica del proceso


bpmn.createUnmanagedProcess(__dirname + "/Test.Bpm.Process/exampleBPM1.bpmn", function(err, jobTest){
	
	if (err) {
		console.log("[ERROR]: " + err);
	} else {
		console.log("[BPM-PROCESS]: Iniciando Proceso ...");
		console.log();
		// Iniciamos el Proceso, disparando el evento de "Inicio" definido en el Modelo del Proceso
		jobTest.triggerEvent("Inicio");
	}
    

});

/*
bpmn.addBpmnFilePath(__dirname + "/Test.Bpm.Process/exampleBPM1.bpmn");

bpmn.createProcess("exampleBPM1", function(err, myProcess){

    // we start the process
	let dataInput = {
		numero1: 1,
		numero2: 1
	};
	
    myProcess.triggerEvent("Inicio", dataInput);

});
*/