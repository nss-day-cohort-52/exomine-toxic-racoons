import {getGovenors } from "database.js"

export const govenors = () => {
    const govenors = getGovenors();
    return `<header class="header">
    <h1>
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
