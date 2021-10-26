import {getGovenors } from ""

export const govenors = () => {
    const govenors = getGovenors();
    return `<header class="header">
    <h1>
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