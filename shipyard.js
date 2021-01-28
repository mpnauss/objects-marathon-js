// YOUR CODE GOES HERE

import createNewSpaceship from './createNewSpaceship.js'
import createNewCrewMember from './createNewCrewMember.js'
import createNewRocket from './createNewRocket.js'
import createRocket from './createNewRocket.js'

let launchpad = (ship, crewArray, rocket) => {
    console.log(`Initiating preflight procedures.\nWelcome aboard the ${ship.name}!`)
    ship.loadCrew(crewArray)
    ship.captain()
    console.log(`${ship.captain} is the captain of the ${ship.name}`)
    ship.mountPropulsion(rocket)
    ship.propulsion.addFuel(10)
    ship.countdown(10)
}

let trainCrew = (array) => {
    let crewList = []
    for (let i = 0; i < array.length ; i++) {
        crewList.push(createNewCrewMember(array[i]))
        crewList[i].trained = true
    }
    return crewList
}

let crewNames = ['Zaphod Beeblebrox', 'Arthur Dent', 'Ford Prefect', 'Marvin the Robot', 'Trillian']
let ourShip = createNewSpaceship('Heart of Gold')
let ourFirstRocket = createRocket()

launchpad(ourShip, crewNames, ourFirstRocket)