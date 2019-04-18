// Ejemplos de topic
// seguridad / estancia / tipo / objeto nombre
// domo/dormitorio/luz/general
// domo/pasillo/enchufe/baño



// estado 
// medir cada 100ms
// actuar

//invocacion en init.js
4chAC() ;

// 4chAC.conf.js 

// Topics
var canalAC[0] = domo/invitados/pantalla/taller;
var canalAC[1] = domo/invitados/rpi/taller;
var canalAC[2] = domo/invitados/luz/taller;
var canalAC[3] = domo/invitados/regleta/taller;
// Pin bobina
var bobina[0] = ;
var bobina[1] = ;
var bobina[2] = ;
var bobina[3] = ;
// Pin rele
var rele[0] = ;
var rele[1] = ;
var rele[2] = ;
var rele[3] = ;
// Corriente MAX
var corrienteMax[0] = ;
var corrienteMax[1] = ;
var corrienteMax[2] = ;
var corrienteMax[3] = ;



// 4chAC.js


// main()
configurarcanales()
Timer.set(100, true, chk-chg(), null);
mqttACswitch()


//configurarcanales()
var len = bobina.length;
for (i = 0; i < len; i++) { 
  ADC.enable(bobina[i]);
}
var len = rele.length;
for (i = 0; i < len; i++) { 
  GPIO.set_mode(rele[i], GPIO.MODE_OUTPUT);
}


//chk-chg()
var len = bobina.length;
for (i = 0; i < len; i++) { 
  let corriente = (ADC.read(bobina[i])*corrienteMax[0])/4095);
  if (corriente > 0.01){
    let estadoactual = OFF;
  }
  else {
    let estadoactual = ON;
  }
  if (estadoactual != estado[i] ){
    let estado[i] = estadoactual;
    let ok = MQTT.pub(canalAC[i], estado[i], 1);
  }
}

// mqttACswitch
var len = rele.length;
for (i = 0; i < len; i++) { 
  MQTT.sub(canalAC[i], function(conn, topic, msg) {
    print('Topic:', topic, 'message:', msg);
    let value = GPIO.toggle(rele[i]);
    print(value ? 'Tick' : 'Tock', 'uptime:', Sys.uptime(), getInfo());
}, null);





              
GPIO.write(pin1, 1);

// state y command



//  1 second
Timer.set(1000, true, function() {
    let battery_voltage = (ADC.read(battery)/4095)*bobina[i];
    let ok = MQTT.pub(topic, message, 1);
    print("DEBUG: Battery Voltage is", battery_voltage, "V");
}, null);


