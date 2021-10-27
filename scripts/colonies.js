import { getColonies, getcolonyMinerals, setColony } from "./database.js" 
//importing copies of the array of colonies to be used and referenced 
//to generate and display in HTML
const colonies = getColonies()
const colonyMinerals = getcolonyMinerals()
//setting a variable with the value of the function that makes a copy of the colonies

document.addEventListener(//needs to display colonies that chosen governor governs
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            const chosenOption = changeEvent.target.value
            const setColony = parseInt(chosenOption.id)
            return setColony
        }
    }
)
export const ColonyMinerals = () => { //created a variable whose value is a function
    let html = "<ul>" //unordered list

    // This is how you have been converting objects to <li> elements
    for (const colonyMineral of colonyMinerals) { //this function will iterate through the  colonies array
        //and display a list of colonies in the html
        html += `<li>
            <input type="radio" name="colony" value="${colony.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}
return `<li>
    ${colony.name}
    ${colonyMineral.name}
</li>`