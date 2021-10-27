import { miningFacilities } from "./facilities.js"
import { AvailableMinerals } from "./minerals.js"
// import { JewelryStyles } from "./JewelryStyles.js"
// import { Orders } from "./Orders.js"
// import { Metals } from "./Metals.js"
// import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const Exomine = () => {
    return `
        <h1>Exomine</h1>
        <article class="choices">
            <section class="choices__governors options">
                <h2>Governors</h2>
                
            </section>
            <section class="choices__facilities options">
                <h2>Facilities</h2>
                ${miningFacilities()}
            </section>
            <section class="choices__minerals options">
                <h2>Minerals</h2>
                ${AvailableMinerals()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Mineral Orders</h2>
            
        </article>
    `
}