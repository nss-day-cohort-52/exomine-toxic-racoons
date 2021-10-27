<<<<<<< HEAD
import {getGovenors } from "database.js"
=======
import {getGovenors } from ""
>>>>>>> rs

export const govenors = () => {
    const govenors = getGovenors();
    return `<header class="header">
    <h1>
<<<<<<< HEAD
    Govenors 
    </h1>
    <select>
    <option>
    Darth Vader
    </option>
    <option>
    Spider Man
    </option>
    <option>
    Dr. Strange 
    </option>
    <option>
    Wonder Woman
    </option>
    </select> 

    <h2>
    choose a govenor
    </h2>
    <select>
  <option>
  Choose govenor 
  </option>
  ${govenors.map((govenor) => {
    return `
    <option>
    ${govenor.fullName}
    </option>
    `;})}
    </select>
    `;
  };
=======
    choose a govenor
    </h1>
    <select>
  <option>
  Darth Vader
  </option>
  <option>
  Spider Man
  </option>
  <option>
  Dr. Strange
  </option>
  <option>
  Wonder Woman
  </option>
  </select>
  `
>>>>>>> rs
