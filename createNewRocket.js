let createRocket = () => {
    let newRocket = {
        fuel: 0,
        addFuel(num) {
            this.fuel += num
            console.log(`Fuel level is ${num}`)
        },
        fire() {
            if (this.fuel > 0) {
                this.fuel--
                console.log('Engines have fired\n' + `Fuel level is now ${this.fuel}`)
                return true
            } else {
                console.log('Engines failed to fire.\nCheck fuel level.')
            }
        }
    }
    return newRocket
}

export default createRocket