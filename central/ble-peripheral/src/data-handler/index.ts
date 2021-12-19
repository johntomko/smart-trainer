var cb: Function | null = null;

export function getDataCb(): Function | null {
    return cb;
}

export function setDataCb(dataCb: Function) {
    cb = dataCb;
}

export function processData(data: Buffer) {
    const strData = data.toString("utf8");
    switch (strData) {
        // TODO what are the different transmissions we can get?
        // Handle them here
        case "ok": {
            break;
        }
        default: {
            break;
        }
    }
}

export function sendData(data: Buffer) {
    if (cb != null) {
        cb(data);
    }
}
