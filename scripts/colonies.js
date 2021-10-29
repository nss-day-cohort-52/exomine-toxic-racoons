import { getColonies, getMinerals, getGovernors, getColonyMinerals, setGovernor, getSelectedGovernor } from "./database.js" 
import { coloniesGovernor } from "./govenors.js"
//importing copies of the array of colonies to be used and referenced 
//to generate and display in HTML
// const colonies = getColonies()
// const colonyMinerals = getcolonyMinerals()
const governors = getGovernors()
const colonies = getColonies()
const minerals = getMinerals()
const colonyMineral = getColonyMinerals()
const governorChosen = coloniesGovernor()
//setting a variable with the value of the function that makes a copy of the colonies
//const foundColony = 




export const ColonyHTML = () => {    
    const chosenOption = getSelectedGovernor()
    
    if (chosenOption.governorId !== 0) {
        const governors = getGovernors()

        const foundGovernor = governors.find(
            (governor) => {
                return chosenOption.governorId === governor.id
            }
        )
            const foundColony = colonies.find((colony) => {
                return colony.id === foundGovernor.colonyId
            }
            )
            let html = `${foundColony.name}`
            return html
    } else {
        return `Colonies and Needed Minerals`

    }
    
    
    
//     colonies.map(colony => {
//         if (colonies.colonyid === governorChosen.colonyid) {
//             return `<li>
//                 ${colony.name}
//                 ${colonyMineral.name}
//                 </li>`
                
//             }
            
//         })
//         html += ""
//         return html

// }
// document.addEventListener(//needs to display colonies that chosen governor governs
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "governor") {
//             const chosenOption = changeEvent.target.value
//             const setColony = parseInt(chosenOption.id)
//             return setColony
//         }
//     }
// )
// export const ColonyMinerals = () => { //created a variable whose value is a function
//     let html = "<ul>" //unordered list

//     // This is how you have been converting objects to <li> elements
//     for (const colonyMineral of colonyMinerals) { //this function will iterate through the  colonies array
//         //and display a list of colonies in the html
//         html += `<li>
//             <input type="radio" name="colony" value="${colonyMineral.id}" /> ${colony.name}
//         </li>`
//     
}
