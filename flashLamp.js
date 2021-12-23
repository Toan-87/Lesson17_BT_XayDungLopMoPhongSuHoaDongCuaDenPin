class FlashLamp {
    status;
    battery;
    constructor(status, battery) {
        this.battery = battery;
    }
    get Battery () {
        return this.battery;
    }
    set Battery (battery) {
        this.battery = battery;
    }
    // get Status () {
    //     return this.status;
    // }
    // set Status (status) {
    //     this.battery = status;
    // }
    get BatteryInfor() {
        return this.battery.Energy;
    }
    light () {
        if(this.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}