import { getMinerals, setMineral } from "./database.js"

//calling value of minerals
const minerals = getMinerals()

//event listener to track change in state
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
        }
    }
)

// exporting list of available minerals per facility selected
export const AvailableMinerals = () => {
    let html = "<ul>"

    //use .map() for converting objects to list elements
    const listItems = minerals.map(mineral => {
        return `<li>
            <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.mineral}
        </li>` 
    })

    //joining list elements to list
    html += listItems.join("")
    html += "</ul>"

    return html
}