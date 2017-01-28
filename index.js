var awsIot = require('aws-iot-device-sdk');
var config = require('./etc/config.json');
 
 
if( process.argv.length < 3 ) {
    console.error("Please supply a temperature value");
    return;
}
 
var device = awsIot.device({
   keyPath: __dirname+'/etc/iot.private.key',
  certPath: __dirname+'/etc/iot.cert.pem',
    caPath: __dirname+'/etc/iot.root-CA.crt',
  clientId: config.clientId,
    region: config.region 
});

device.on('connect', function() {
    console.log('connected');
    device.publish(config.topic, JSON.stringify({ test_data: 1}));
});