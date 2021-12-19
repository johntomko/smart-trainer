import * as bleManager from "ble-manager";

bleManager.startBLEConnection();

// When the iOS app tells us "start collecting data"
    // then spawn data collection services
// All the while, be waiting for other BLE transmissions
// When we're done with a ride, tell the child process via signal/pipe
    // To package the data received and send
// Packaging data is calculating averages, etc.
    // And generating some minimized form for plotting
// Send that stuff to the iOS app and have it save
