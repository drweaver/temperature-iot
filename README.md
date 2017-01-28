# temperature-iot

Simple script to publish a temperature reading to an AWS IoT topic

## Installation

Get the package:
```bash
git clone https://github.com/drweaver/temperature-iot.git
```

Install the dependencies:
```bash
cd temperature-iot
npm install
```

Create certs on AWS IoT, then place them in the `etc` folder, with following names:
```bash
$ ls etc
iot.cert.pem
iot.private.key
iot.root-CA.crt
```

Edit the `etc/config.json` file and modify the [uuid](https://www.uuidgenerator.net/) and aws region values. 
Set the `sensorname` to something meaningful e.g. `lounge`.

## Run

Each time you want to publish a temperature reading to the AWS IoT topic, run:

```bash
npm start 10
```

...or...

```bash
node index.js 10
```


