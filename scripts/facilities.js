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
     
        return `<select id="mineLocations" name="mineLocations" size="4" multiple>
        <option value="0">Select Facility...</option>
        ${facilities.map(facility => `
        <option value="${facility.id}" /> ${facility.name}</option>
        `)}    
    </select>`
    

    // // Join all of the strings in the array into a single string
    // html += listItemsArray.join("")

    // html += "</ul>"
    // return html
}
