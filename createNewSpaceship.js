let createNewSpaceship = (name) => {
    let newSpaceship = {
        name,
        crew: [],
        loadCrew(array) {
            array.forEach((crewMember) => {
                this.crew.push(crewMember)
                console.log(`${crewMember} has boarded the ${this.name}.`)
            })
        },
        captain() {
            let randomNum = Math.floor(Math.random() * this.crew.length)
            this.captain = this.crew[randomNum]
        },
        propulsion: null,
        mountPropulsion(rocket) {
            this.propulsion = rocket
            console.log('Propulsion mounted.')
        },
        takeoff() {
            if (this.propulsion.fire()) {
                console.log('BOOM') 
            } else {
                console.log('Takeoff failed')
            }
        },
        countdown(num) {
                let delay = (num) => {
                    console.log(num)
                    num = num - 1
                    this.countdown(num)
                }
                setTimeout(() => { 
                    if (num === 0) {
                        console.log('Blast off!')
                        this.takeoff()
                        return;
                    } else {
                        delay(num)
                    }
                }, 1000)

            }
        
    }
    return newSpaceship
}

export default createNewSpaceship