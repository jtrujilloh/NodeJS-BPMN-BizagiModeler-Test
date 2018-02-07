[By: José Alfredo Trujillo Hidalgo]
[Mail: jtrujillo@2tec.cl]

# NodeJs BPMN BizagiModeler Test (06-02-2018)

-------------------------------------------

* ### Índice de Contenidos:

  * Contexto del Desarrollo e Introducción.
  * Tiempo de Implementación / Despliegue.
  * Tecnologías Utilizadas.
  * Paquetes npm utilizados.
  * Requisitos de Software.
  * Composición del Proyecto.
  * Estructura de Directorios y Descripción de Componentes.
  * Ejecución de Procesos y Resultados de Ejecución.
  
-------------------------------------------

* ### Contexto del Desarrollo e Introducción:

  Pequeño desarrollo que expone algunos ejemplos con diversos conceptos básicos sobre la implementación de diseños modelados para distintos procesos de negocio, implementando el estándar BPMN 2.0.
  
  Con la implementación de BPMN en tus proyectos, no necesitas codificar flujos directamente en el código, basta con modelar tu proceso o lógica de negocio de forma gráfica utilizando cualquier modelador BPM que soporte el estándar actual BPMN 2.0, solamente nos enfocamos a escribir el código de cada actividad o condición de forma independiente, de esa forma, modelas los distintos procesos de negocio, los cuales, serán entendibles tanto para el usuario como para los desarrolladores. 
  
  La herramienta de modelado que se utilizó, en este caso Bizagi Modeler v3, permite exportar cada diseño a archivos con formato *.bpmn, los cuales son importados por la aplicación al momento de arrancar.
  
  Actualmente existen muchas aplicaciones capaces de modelar procesos utilizando el estándar BPMN 2.0, gratuitas y Open-Source, pues todas ellas sirven para el mismo fin, modelar nuestra lógica de negocio en diagramas entendibles por humanos y máquinas.
  
  Básicamente podemos implementar en NodeJS el motor de ejecución de procesos de negocio, donde sus diagramas son diseñados por cualquier herramienta que soporte el estándar BPMN 2.0.
  
  A cada proceso único o colaborativo se le pueden enviar y entregar datos en en objetos de formato JSON, una vez arrancado el proceso, la información viajará por cada proceso, secuencia, actividad o condición según la definición de tu flujo de negocio a resolver, además de poder realizar todo lo que necesites por cada actividad como invocar servicios web, realizar operaciones de bases de datos o transformaciones de datos, hasta obtener el resultado con los datos deseados.
  
  El resultado entregado por un proceso puede ser el que estimes conveniente (todo viaja en formato de objeto), y puede ser interpretado ya sea en una salida web, o bien, una respuesta de una api rest, todo dependerá de lo que requiera tu implementación y desarrollo...
  
  También es posible desarrollar integraciones de sistemas.
  
  Al mismo tiempo que documentas tu desarrollo en los diferentes procesos de negocio que tienes en mente, construyes el proyecto... Sin hacer nada más que comenzar a trabajar con lo que nos aporta este tipo de implementaciones.
  
  En el próximo repositorio se desarrollará una aplicación CRUD mediante API REST y MongoDB, donde cada operación de servicio, se expresa y construye mediante el Modelado de un Proceso de Negocio.
  
-------------------------------------------

* ### Tiempo de Implementación / Despliegue:

  * 5 minutos aproximadamente, según instalación de la librería npm.
  
-------------------------------------------

* ### Tecnologías Utilizadas:

  * NodeJS
  * Estándar BPMN 2.0

-------------------------------------------

* ### Paquetes npm utilizados:

  * bpmn v0.2.2

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/001-InstalacionBPMN.JPG">
</p>
  
-------------------------------------------

* ### Requisitos de Software:

  * Sistema Operativo:
    * Desarrollado sobre: Windows 7 Ultimate SP1
  * NodeJS v6.9.1 x86 (o Superior)
  * npm v5.4.1 x86 (o Superior)
  
  * Bizagi Modeler v3.1.0.011

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/002-BizagiModelerVersion.JPG">
</p>
  
 -------------------------------------------

* ### Composición del Proyecto: 

* El proyecto está compuesto por lo siguiente:

  * Ejecutables independientes para cada ejemplo. 
  * Procesos de Negocio.
  * Modelo diseñado con Bizagi Modeler.
    

-------------------------------------------

* ### Estructura de Directorios y Descripción de Componentes:
  
  lo siguiente, explica cómo se compone la estructura de directorios del proyecto, y para qué sirve cada componente.

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-Directory-Root.JPG">
</p>
        
  * #### ./Bizagi Models/: 
   
   Contiene el archivo creado con el modelador de procesos Bizagi.
   
  * **Procesos de Negocio - Ejemplos - v1.0.0.bpm:** Archivo creado con Bizagi Modeler.

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/002-BizagiModel-01.JPG">
</p>

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/002-BizagiModel-02.JPG">
</p>

-------------------------------------------

  * #### ./BPM.Test/: 
  
  Contiene el proyecto, ejecutables, modelos de procesos y controladores de cada modelo.
  
  * **Start.ExampleBPM1.js:** Ejecutable para el proceso del ejemplo 1.
  * **Start.ExampleBPM2.js:** Ejecutable para el proceso del ejemplo 2.
  * **Start.ExampleBPM3.js:** Ejecutable para el proceso del ejemplo 3.

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-Directory-BPM.Test.JPG">
</p>

-------------------------------------------

  * #### /BPM.Test/Test.Bpm.Process/: 
  
  Contiene los modelos de los distintos procesos de negocio y su controlador correspondiente a cada modelo.

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-Directory-BPM.Test-Test.Bpm.Process.JPG">
</p>
    
  * **exampleBPM1.bpmn:** Corresponde al Modelo del Proceso de Negocio del Ejemplo 1
  * **exampleBPM1.js:** Corresponde al Controlador del Modelo, el cual contiene cada método relacionado a cada Actividad o Condición definida en el modelo para el ejemplo 1.

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-BizagiModeler-Ejemplo1.JPG">
</p>
    
  * **exampleBPM2.bpmn:** Corresponde al Modelo del Proceso de Negocio del Ejemplo 2
  * **exampleBPM2.js:** Corresponde al Controlador del Modelo, el cual contiene cada método relacionado a cada Actividad o Condición definida en el modelo para el ejemplo 2.

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-BizagiModeler-Ejemplo2.JPG">
</p>
    
  * **exampleBPM3.bpmn:** Corresponde al Modelo del Proceso de Negocio del Ejemplo 3
  * **exampleBPM3.js:** Corresponde al Controlador del Modelo, el cual contiene cada método relacionado a cada Actividad o Condición definida en el modelo para el ejemplo 3.

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-BizagiModeler-Ejemplo3.JPG">
</p>
    
  * #### ./Imagenes/: 
    * Almacena los archivos de imágenes del proyecto, los cuales se visualizan a lo largo de esta documentación.

-------------------------------------------

* ### Ejecución de Procesos y Resultados de Ejecución:
  
  Para ejecutar cada ejemplo se hace de la siguiente manera:
  
  
  * #### Ejecución de Ejemplo 1:

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-BizagiModeler-Ejemplo1.JPG">
</p>
  
  * #### Comando:
  ```bash
  node Start.ExampleBPM1.js
  ```
  
  * #### Resultado de la Ejecución Proceso 1:

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/004-Execute-Example-Process1.JPG">
</p>
    
    
  * #### Ejecución de Ejemplo 2:

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-BizagiModeler-Ejemplo2.JPG">
</p>
  
  * #### Comando:
  ```bash
  node Start.ExampleBPM2.js
  ```
  
  * #### Resultado de la Ejecución Proceso 2 - Flujo 1 [NO]:

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/004-Execute-Example-Process2-Flow1.JPG">
</p>
    
    
  * #### Ejecución de Ejemplo 3:

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/003-BizagiModeler-Ejemplo3.JPG">
</p>
  
  * #### Comando:
  ```bash
    node Start.ExampleBPM3.js
  ```
    
  * #### Resultado de la Ejecución Proceso 3 - Flujo 1 [SI]:

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/004-Execute-Example-Process3-Flow1.JPG">
</p>
    
  * #### Resultado de la Ejecución Proceso 3 - Flujo 2 [NO]:

<p align="center">
  <img src="https://github.com/jtrujilloh/NodeJS-BPMN-BizagiModeler-Test/blob/master/Imagenes/004-Execute-Example-Process3-Flow2.JPG">
</p>
    
-------------------------------------------
    
