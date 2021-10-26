import { getColonies, getcolonyMinerals, setColony } from "./database.js" 
//importing copies of the array of colonies to be used and referenced 
//to generate and display in HTML
const colonies = getColonies()
const colonyMinerals = getcolonyMinerals()
//setting a variable with the value of the function that makes a copy of the colonies

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colony") {
            setColony(parseInt(event.target.value))
    }
}
)
export const Colonies = () => { //created a variable whose value is a function
    let html = "<ul>" //unordered list

    // This is how you have been converting objects to <li> elements
    for (const colony of colonies) { //this function will iterate through the  colonies array
        //and display a list of colonies in the html
        html += `<li>
            <input type="radio" name="colony" value="${colony.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}
