// Ejemplos de topic
// seguridad / estancia / tipo / objeto nombre
// domo/dormitorio/luz/general
// domo/pasillo/enchufe/baño



invocacion en init.js

load ('emparedado.js');

emparedado( domo/invitados/pantalla/taller, , domo/invitados/luz/taller, )



// estado 
// medir cada 100ms
// actuar


// Resolucion del ADC
const ADC_RES = 4095;
  

class Bobina{
  var pin;
  var max;
  var umbral;
  let inicializar = ADC.enable(this.pin);
  let corriente = ADC.read(this.pin)*this.max/ADC_RES;
  let alternado = comprobar_conmutacion(this.pin,this.umbral,this.estado); //(bool) estado entra y sale
  var estado;  //bool
};
  
class Rele{
  var pin;
  let inicializar = GPIO.set_mode(this.pin, GPIO.MODE_OUTPUT);
  function alternar(this.pin);
  function apagar(this.pin);
};

class Canal{
	var topic;
	var bobina;
	var rele;
  var habilitado;
};

  

// Activo
canalAC[0].habilitado = HABILITADO1;
canalAC[1].habilitado = HABILITADO2;
canalAC[2].habilitado = HABILITADO3;
canalAC[3].habilitado = HABILITADO4;

// Topics
canalAC[0].topic = domo/invitados/pantalla/taller;
canalAC[1].topic = domo/invitados/rpi/taller;
canalAC[2].topic = domo/invitados/luz/taller;
canalAC[3].topic = domo/invitados/regleta/taller;

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



// Configura los canales activos 
for (canal = 0; canal < 4; canal++) { 
  if (canalAC[canal].habilitado) {
    canalAC[canal].bobina.inicializar();
    canalAC[canal].rele.inicializar();



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


