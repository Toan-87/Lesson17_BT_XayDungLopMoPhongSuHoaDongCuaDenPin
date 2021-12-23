class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }
    get Energy () {
        return this.energy;
    }
    set Energy (energy) {
        this.energy = energy;
    }
    decreaseEnergy () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}
