// Ejemplos de topic
// seguridad / estancia / tipo / objeto nombre
// domo/dormitorio/luz/general
// domo/pasillo/enchufe/baño


//----------------------------------
//invocacion en init.js

// carga
load ('emparedado.js');

// ejecucion
emparedado( canal1:domo/invitados/pantalla/taller, canal3:domo/invitados/luz/taller )
//--------------------------------------


// emparedado.js

  
// El ADC de mongoose-os no tiene interrupción por ADC
// Comprobar que no ha variado desde la ultima vez que se midio
function comprobar_conmutacion(var corriente,var umbral,let bool estado){
  var actual = false;
  if ((corriente - umbral) > 0){
    actual = true;
  }
  if (estado != actual){
    estado = actual;      //debe salir de la función y actualizar estado del objeto
    return true;
  };
  else {
		return false;
	};
};

// Resolucion del ADC
const ADC_RES = 4095;

class Bobina{
  var pin;
  var max;
  var umbral;
  let inicializar = ADC.enable(this.pin);
  let corriente = ADC.read(this.pin)*this.max/ADC_RES;
  bool alternado = comprobar_conmutacion(this.corriente,this.umbral,this.estado); // .estado entra y sale estado
  bool estado = 0;
};
  
class Rele{
  var pin;
  let inicializar = GPIO.set_mode(this.pin, GPIO.MODE_OUTPUT);
  bool alternar = GPIO.toggle(this.pin);
  bool apagar = GPIO.write(this.pin,0);
};

class Canal{
  let topic;
  let Bobina bobina; 
  let Rele rele;
  let habilitado;
};

function emparedado( topic[0]:, topic[1], topic[2], topic[3] ){ //????????
  // inicializa los 4 objetos canales
  Canal canalAC[4]; //????????
 	load ( canalAC[]='emparedado-config.json' );  //????????
  let canalAC = JSON.parse(File.read('emparedado-settings.json')); 

  // Configura los canales activos = con topic
  for (canal = 0; canal < 4; canal++) { 
    canalAC[canal].topic = topic[canal];
    if (canalAC[canal].topic != null) {
	    canalAC[canal].habilitado = true
      canalAC[canal].bobina.inicializar();
      canalAC[canal].rele.inicializar();
      MQTT.sub(canalAC[canal].topic,canalAC[canal].rele.alternar(),null);
    };
  };

  Timer.set(1000, true, function() {
    
    let battery_voltage = (ADC.read(battery)/4095)*bobina[i];
    let ok = MQTT.pub(topic, message, 1);
    print("DEBUG: Battery Voltage is", battery_voltage, "V");
  }, null);
};



// Topics
canalAC[0].topic = topic1;
canalAC[1].topic = topic2;
canalAC[2].topic = topic3;
canalAC[3].topic = topic4;

// Pin bobina
canalAC[0].bobina.pin = 21;
canalAC[1].bobina.pin = 22;
canalAC[2].bobina.pin = 23;
canalAC[3].bobina.pin = 24;

// Pin rele
canalAC[0].rele.pin = 31;
canalAC[1].rele.pin = 32;
canalAC[2].rele.pin = 33;
canalAC[3].rele.pin = 34;

// Corriente MAX en miliamperios
canalAC[0].bobina.max = 20000;
canalAC[1].bobina.max = 20000;
canalAC[2].bobina.max = 20000;
canalAC[3].bobina.max = 20000;

// Corriente umbral de deteccion
canalAC[0].bobina.umbral = 20;
canalAC[1].bobina.umbral = 20;
canalAC[2].bobina.umbral = 20;
canalAC[3].bobina.umbral = 20;

// Corriente umbral de deteccion
canalAC[0].bobina.umbral = 20;
canalAC[1].bobina.umbral = 20;
canalAC[2].bobina.umbral = 20;
canalAC[3].bobina.umbral = 20;








// descartado
// Configura los canales activos 
for (canal = 0; canal < 4; canal++) { 
  if (canalAC[canal].habilitado) {
    // Activar el ADC en los pines de las bobina
    ADC.enable(canalAC[canal].bobina.pin);
    // Configurar el pin del rele como salida
    GPIO.set_mode(canalAC[canal].rele.pin, GPIO.MODE_OUTPUT);
    // Suscribe al topic mqtt
    // MQTT.sub(canalAC[canal].topic, GPIO.toggle(canalAC[canal].rele.pin))
    MQTT.sub(canalAC[canal].topic, function(conn, topic, msg) {
      // Si hay actividad en el topic alterna el estado del rele
      GPIO.toggle(canalAC[canal].rele.pin);
    }, null);
  };
};

// Cada 100ms
Timer.set(100, true, function() {
  // Recorre los canales
  for (canal = 0; canal < 4; canal++) { 
    if (canalAC[canal].habilitado) {
    
  for (canal = 0; canal < canales; canal++) { 
    let corriente = (ADC.read(bobina[canal])*corrienteMax[canal])/4095);
    if (corriente > 0.01){
      let estadoactual = OFF;
    }
    else {
      let estadoactual = ON;
    }
    if (estadoactual != estado[i] ){
      let estado[i] = estadoactual;
      let ok = MQTT.pub(canalAC[canal].topic, canalAC[canal].estado, 1);
    }
  }
}, null);


              
GPIO.write(pin1, 1);

// state y command



//  1 second
Timer.set(1000, true, function() {
    let battery_voltage = (ADC.read(battery)/4095)*bobina[i];
    let ok = MQTT.pub(topic, message, 1);
    print("DEBUG: Battery Voltage is", battery_voltage, "V");
}, null);

	items  
Switch mqttsw1 "Switch 1" (all) {mqtt=">[mysensor:/testsw/1:command:on:default],>[mysensor:/testsw/1:command:off:default]"}
Switch mqttsw2 "Switch 2" (all) {mqtt=">[mysensor:/testsw/2:command:off:default],>[mysensor:/testsw/2:command:on:default]"}

Item itemName { mqtt="<direction>[<broker>:<topic>:<type>:<trigger>:<transformation>]" }
	  
Switch mySwitch {mqtt=">[mybroker:myhouse/office/light:command:ON:1],>[mybroker:myhouse/office/light:command:OFF:0]"}
Switch mySwitch {mqtt=">[mybroker:myhouse/office/light:command:ON:1],>[mybroker:myhouse/office/light:command:*:Switch ${itemName} was turned ${command}]"}
	  
	  sitemap
Frame label="MQTT" {
	Switch item=mqttsw1 label="MQTT Switch 1"	
	Switch item=mqttsw2 label="MQTT Switch 2"
}

