import { getGovernors } from "./database.js"
const governors = getGovernors()
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            getGovernors()
        }
    }    
    )
    export const coloniesGovernor = () => {
      let html = "<ul>"
      // Use .map() for converting objects to <li> elements
          return `<select id="governorLocations" name="governorLocations" size="4" multiple>
          <option value="0">Select Gov...</option>
          ${governors.map(governor => `
          <option value="${governor.id}" /> ${governor.name}</option>
          `)} 
      </select>`
 }  
//export const getGovernors = () => {
    //let html = "<ul>"
    // Use .map() for converting objects to <li> elements
     //    `<select id="mineLocations" name="fullName" multiple>
     //   <option>  </option>
    //    ${governors.map(governor => `
    //    <option value="${governor.id}" /> ${governor.name}</option>
   //     `)}    
 //  </select>` 
