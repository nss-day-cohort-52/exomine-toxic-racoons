import { getFacilities, setFacility, getFacilityMinerals, setFacilityMineral } from "./database.js"
import { miningFacilities } from "./facilities.js"

const facilitiesMinerals = getFacilityMinerals()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "facilityMineral") {
            setFacilityMineral(parseInt(event.target.value))
        }
    }    
    )

    export const facilitiesMinerals = () => {  //Iterate over the copy of the metal object array
        let html = "<ul>"
    
        // This is how you have been converting objects to <li> elements
        for (const facitilyMineral of facilityMinerals) {
            html += `<li>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
        }
    
        html += "</ul>"
        return html
    }
