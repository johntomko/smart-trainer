import bleno = require("bleno");
import childProcess = require("child_process")
import { getDataCb, setDataCb, processData, sendData } from "data-handler";

var bleVal: Buffer = new Buffer("", "utf8");

// Continuously send heartbeats to let the app know we're here
// And if we can't just try again 5s later
function sendHeartbeat() {
    if (getDataCb != null) {
        sendData(new Buffer("<3", "utf8"));
    }
    setTimeout(sendHeartbeat, 5000);
}

function readHandler(offset: number, callback: Function) {
    callback(bleno.Characteristic.RESULT_SUCCESS, Buffer.from(''));
}

function writeHandler(data: Buffer, offset: number, withoutResponse: boolean, callback: Function) {
    processData(data);
    callback(bleno.Characteristic.RESULT_SUCCESS);
}

function subscribeHandler(maxValueSize: number, updateValueCallback: Function) {
    setDataCb(updateValueCallback);
}

function unsubscribeHandler() {

}

bleno.on('stateChange', function (state: string) {
    if (state === 'poweredOn') {
        console.log("BT powered on");
        bleno.startAdvertising('smart-trainer', ['F954BD82-824E-4F0F-9F96-122A27F373A5']);
    } else if (state === 'poweredOff') {
        console.log("BT powered off");
        var hci = childProcess.spawn('hciconfig', ['hci0', 'up']);
    } else {
        bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', function (error: Error) {
    if (!error) {
        bleno.setServices([
            new bleno.PrimaryService({
                uuid: 'F954BD82-824E-4F0F-9F96-122A27F373A5',
                characteristics: [new bleno.Characteristic({
                    uuid: 'AFDA41CA-15A6-4A67-B47E-AA5A95534EFF',
                    properties: ['read', 'write', 'notify'],
                    value: null,
                    onReadRequest: readHandler,
                    onWriteRequest: writeHandler,
                    onSubscribe: subscribeHandler,
                    onUnsubscribe: unsubscribeHandler
                })]
            })
        ]);
    }
});

export default function startBLEConnection() {
    sendHeartbeat();
}
