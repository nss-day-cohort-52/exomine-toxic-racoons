import { getFacilities, setFacility } from "./database.js"

const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))
        }
    }    
    )

export const miningFacilities = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = facilities.map(facility => {
        return `<li>
        <input type="radio" name="facility" value="${facility.id}" /> ${facility.name}
    </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
