// Ejemplos de topic
// domo/dormitorio/luz/general
// domo/pasillo/enchufe/baño

//invocacion en init.js

let topic = domo

let canalAC1 = $topic invitados/pantalla/mesa;
let canalAC2 = $topic invitados/rpi/mesa;
let canalAC3 = $topic invitados/luz/mesa;
let canalAC4 = $topic invitados/regleta/mesa;

let canalACs[] = [ canalAC1, canalAC2, canalAC3, canalAC4 ];
4chAC(canalACs)


// 4chAC.js

// Configuracion
corrientes = [ 5, 20,0,0]
bobinas = [12,30,] 
reles = [1 2 3 4]

// main()
configurarcanales()
timer 100 chk-chg()
timer 5000 pwr-pub()
mqttACswitch()


//configurarcanales()
for (i 4){
  if bobinas(i) != 0 {
    ADC.enable(bobinas(i));
  }
  if reles(i) !=0 {
    GPIO.set_mode(reles(i), GPIO.MODE_OUTPUT);
  }
  estados(i) = 0
}


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
