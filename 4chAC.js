// Ejemplos de topic
// domo/dormitorio/luz/general
// domo/pasillo/enchufe/baño

let topic = domo

//invocacion


4chAC(invitados/pantalla/mesa, invitados/rpi/mesa, invitados/luz/mesa, invitados/regleta/mesa)


// 4chAC

// Configuracion
corrientes = [ 5, 20,0,0]
bobinas = [12,30,] 
reles = []

// main()
configurar()
timer 100 chk-chg()
timer 5000 pwr-pub()
mqttACswitch()


//configurar()
for (pin pines){
ADC.enable(pin);
}
estados =0 0 0 0

//chk-chg()
for bobina bobinas
if ADC.read(bobina) * estadizador (bobina) =! estado (bobina)
  MQTT.pub(topic(toma),estado(bobina)!
  
//pwr-pub()
for bobina bobinas
  MQTT.pub*topic(toma),powr
  
// mqttACswitch
for toma 
  MQTT.sub(){
  if swtich
  GPIO.toggle(bobina
  }



MQTT.sub('my/topic', function(conn, topic, msg) {
  print('Topic:', topic, 'message:', msg);
  let value = GPIO.toggle(led);
  print(value ? 'Tick' : 'Tock', 'uptime:', Sys.uptime(), getInfo());
}, null);


//  1 second
Timer.set(1000, true, function() {
    let battery_voltage = (ADC.read(battery)/4095)*bobina[i];
    let ok = MQTT.pub(topic, message, 1);
    print("DEBUG: Battery Voltage is", battery_voltage, "V");
}, null);

//for (let i =o; i<=5; i++) { 
//  let sensor = sensores(i);
//  ADC.enable(sensor);
//}
//  print('aa.' + JSON.stringify(i) + '.bb');
