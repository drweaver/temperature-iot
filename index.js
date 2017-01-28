var awsIot = require('aws-iot-device-sdk');
var config = require('./etc/config.json');
 
 
if( process.argv.length < 3 ) {
    console.error("Please supply a temperature value");
    return;
}

var temperature = parseFloat(process.argv[2]);

if( isNaN(temperature) ) throw "Not a valid number: " + temperature;
 
var device = awsIot.device({
   keyPath: __dirname+'/etc/iot.private.key',
  certPath: __dirname+'/etc/iot.cert.pem',
    caPath: __dirname+'/etc/iot.root-CA.crt',
  clientId: config.clientId,
    region: config.region 
});

device.on('connect', function() {
    console.log('connected');
    device.publish(config.topic, JSON.stringify({ temperature: temperature, temperature_sensor: config.sensorName }), err=>{
        if(err) {
            console.error("Failed to publish message: " +err);
        } else {
            console.log('temperature '+temperature+' for '+config.sensorname+' published successfully on topic '+config.topic);
        }
        device.end();
    });
});