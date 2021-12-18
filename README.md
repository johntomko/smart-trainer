# smart-trainer
Smart bike trainer

## System Design
* Raspberry Pi central module
* Microcontroller connects to sensors for speed, distance, force applied (power), etc.
* Pi communicates with microcontroller to gather workout data
* iOS app to connect to Pi, start workout, pause, etc.
* At end of workout, Pi sends everything to iOS app
* iOS app saves workout data to database

## Components
* Pi BLE communication with iOS app
* Pi communication with microcontroller (SPI/I2C?)
* iOS app
* Backend microservices
* Microcontroller embedded hardware
