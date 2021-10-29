import { getColonies, getMinerals, getGovernors, getColonyMinerals, setGovernor, getSelectedGovernor } from "./database.js" 
//import { coloniesGovernor } from "./govenors.js"
//importing copies of the array of colonies to be used and referenced 
//to generate and display in HTML
// const colonies = getColonies()
// const colonyMinerals = getcolonyMinerals()
// const governors = getGovernors()
const colonies = getColonies()
const minerals = getMinerals()
const colonyMinerals = getColonyMinerals()
//const governorChosen = coloniesGovernor()
//setting a variable with the value of the function that makes a copy of the colonies
//const foundColony = 




export const ColonyHTML = () => {    
    const chosenOption = getSelectedGovernor() 
    // variable catches the transient state of the orderbuilder object
    if (chosenOption.governorId !== 0) { 
        //if the governorId  of the chosen governor is not zero then execute the following code
        const governors = getGovernors() //variable whose value is a function that
        //returns a copy of the governors array

        const foundGovernor = governors.find(
            (governor) => {
                return chosenOption.governorId === governor.id
            }
            //the above function uses the chosenOption/transient state/ orderbuilder's governorId 
            //to use the find method through the array of governors to compare with primary key
            // the value found is the  found governor value which is an object
        )
            const foundColony = colonies.find((colony) => {
                return colony.id === foundGovernor.colonyId
            }
            )
            //the above function uses the foundgovernor object to grab the colonyId and compare it
            //to the colony array to get the value of the corresponding colony to the governor 

            const foundcolonyMineral = colonyMinerals.find((colonyMineral) => {
                return colonyMineral.colonyId === foundColony.id
            })
            //the above function uses the found colony primary key and compares it to the colonyMinerals array
            //this returns the corresponding colonyMineral object

            const foundMineral = minerals.find((mineral) => {
                return mineral.id === foundcolonyMineral.mineralId
            })
            //the above mentioned function uses the found colonyMineral object and compares the mineralId from it
            //to the mineral primary key in the minerals array. This returns the corresponding mineral object

            let html = `${foundColony.name} needs ${foundcolonyMineral.amount} tons of
            ${foundMineral.mineral}`
            return html
            //the above mentioned code returns the html which interpolates the value of the found 
            //colony name and mineral name after all above code is executed properly
    } else {
        return `Colonies and Needed Minerals`
        //this code happens if a governor is not selected
    }   
}
