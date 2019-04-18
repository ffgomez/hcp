// Ejemplos de topic
// seguridad / estancia / tipo / objeto nombre
// domo/dormitorio/luz/general
// domo/pasillo/enchufe/baño



// estado 
// medir cada 100ms
// actuar



// Constantes para dispositivo (domo.conf ?)
var topic = domo;

var canalAC(0) = invitados/pantalla/taller;
var canalAC(1) = invitados/rpi/taller;
var canalAC(2) = invitados/luz/taller;
var canalAC4 = invitados/regleta/taller;

//invocacion en init.js

// añadir topic root
let canalACs[] = [ topic canalAC1, canalAC2, canalAC3, canalAC4 ];
4chAC(canalACs)


// 4chAC.js

// Configuracion
corrientes = [ 5, 20,0,0]
bobinas = [12,30,] 
reles = [1 2 3 4]

// main()
configurarcanales()
timer 100 chk-chg()
//timer 5000 pwr-pub()
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
    
// mqttACswitch
for toma 
  MQTT.sub(){
  if swtich
  GPIO.toggle(bobina(i))
  }
              
GPIO.write(pin1, 1);

// state y command

if (x > y){
  alert("Hello World");
}

text += cars[0] + "<br>";

var carName1 = "Volvo XC60";

var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) { 
  text += cars[i] + "<br>";
}

//pwr-pub()
for bobina bobinas
  MQTT.pub*topic(toma),powr

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
