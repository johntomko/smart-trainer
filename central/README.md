# Overview
This is where Raspberry Pi modules live. On the Pi, there are 2 primary operational units: the BLE peripheral and the data collector.

## Data Collector
This project samples data from peripheral hardware sensors, gathering data to be saved as a time series.

## BLE Peripheral
This project is built to advertise a service, connect to an iOS app, and transmit data/communication back and forth.

## Important Data
### Distance
* Total number of wheel revolutions multiplied by size of wheel
* A/B Encoded sensors to know whether you're rotating forward or backward, only count forward revolution

### Speed
* How many rotations we've seen over the last N samples

### Power
* How much strain we're applying to the pedals at a given point, sampled over time, right and left?

### Altitude
* Is there an altitude sensor?
* We could do a calculation based on angle and speed to determine altitude relative to starting point?
