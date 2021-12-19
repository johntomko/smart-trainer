declare module "data-handler" {
    export function getDataCb();
    export function setDataCb(dataCb: Function);
    export function processData(data: Buffer);
    export function sendData(data: Buffer);
};

declare module "ble-manager" {
    export function startBLEConnection();
};

declare module "bleno";
declare module "child_process";
