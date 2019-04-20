// Ejemplos de topic
// seguridad / estancia / tipo / objeto nombre
// domo/dormitorio/luz/general
// domo/pasillo/enchufe/baño


//----------------------------------
//invocacion en init.js

// carga
load ('emparedado.js');

// ejecucion
emparedado()
//--------------------------------------


// emparedado.js

// Resolucion del ADC
const ADC_RES = 4095;

class Bobina{
  let pin;
  let max;
  let umbral;
  bool estado = false; 
  bool function inicializar (){ ADC.enable(this.pin)};
  bool function corriente() = { ADC.read(this.pin) * this.max / ADC_RES }; 
  bool function alternado() {
    if ((this.corriente() > this.umbral) != this.estado)
      this.estado = !this.estado;     
      return true
    }
    return false
};

class Rele{
  var pin;
  function inicializar() { GPIO.set_mode(this.pin, GPIO.MODE_OUTPUT)};
  function alternar() {GPIO.toggle(this.pin)};
  bool function apagar() { GPIO.write(this.pin,0)};
};

class Canal{
  let topic;
  let Bobina bobina; 
  let Rele rele;
};

function emparedado(){ 
  // inicializa los canales
  let Canal canal[];
	// carga los canales configurados
  canal = JSON.parse(File.read('emparedado-settings.json'));
  // Configura los canales
  let ok[];			
  for (var i = 0; i < canal.length; i++) { 
    if (canal[i].topic != null) {
      ok.append = i;
      canal[i].bobina.inicializar();
      canal[i].rele.inicializar();
      MQTT.sub(canal[i].topic, canal[i].rele.alternar(), null);
    };
  };
  // Comprobar cada 100ms
  Timer.set(100, true, function() {
    // todos los canales configurados
    for (var i = 0; i < ok.length; i++) {
      // si ha cambiado de estado
      if(canal[ok[i]].bobina.alternado()){
        // y publica el estado
        MQTT.pub(canal[ok[i]].topic, canal[ok[i]].bobina.estado)
  }, null);
};


/* JSON
[{
	"topic":"topic/canal1",
  "bobina": { “pin”:31, “max”:2000, “umbral”:20 },
  “rele”: { "pin":21 }
},
{
	"topic":"topic/canal1",
  "bobina": { “pin”:32, “max”:2000, “umbral”:20 },
  “rele”: { "pin":22 }
},
{
	"topic":"topic/canal1",
  "bobina": { “pin”:31, “max”:2000, “umbral”:20 },
  “rele”: { "pin":21 }
},
{
	"topic":"topic/canal1",
  "bobina": { “pin”:31, “max”:2000, “umbral”:20 },
  “rele”: { "pin":21 }
}]
*/

/*

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

*/
