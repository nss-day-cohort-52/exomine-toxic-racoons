import { getColonies, getMinerals, getGovernors, getColonyMinerals, setGovernor } from "./database.js" 
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
const buildColonyListItem = (colony) => {
    const foundGovernor = governors.find(
        (governor) => {
            return governor.id === setGovernor()
        }
    )
//setting a variable with the value of the function that makes a copy of the colonies
}
//const foundColony = 




export const Colony = () => {
    let html = ""
    
    const listItems = colonies.map(colony => {
        if (colonies.colonyid === governorChosen.colonyid) {
            return `<li>
                ${colony.name}
                ${colonyMineral.name}
                </li>`
                
            }
            
        })
        html += ""
        return html

}
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
//     }
