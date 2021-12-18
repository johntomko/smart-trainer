import bleno = require("bleno");

const name: string = "hello!";
const serviceUuids: string[] = ['fffffffffffffffffffffffffffffff0'];

bleno.startAdvertising(name, serviceUuids);
