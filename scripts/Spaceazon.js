//Generating HTML represenetation of order state

// Importing functions from database module
import { getOrders, getFacilityMinerals, getMinerals } from "./database.js"

//Declaring variables and assigning value of return value from invoking these functions
const minerals = getMinerals()
const facilityMinerals = getFacilityMinerals()

//calling items for build order
const buildOrderListItem = (order) => {
    const foundFacilityMineral = facilityMinerals.find(
        (facilityMineral) => {
            return facilityMineral.id === order.facilityMineralId
        }
    )
    const foundMineral = minerals.find(
        (mineral) => {
            return mineral.id === order.mineralId
        }
    )
//generating display of mineral with available amount

    return `<li>
    Order #${order.id} ${foundMineral.mineral} ordered in the amount of ${foundFacilityMineral.amount}
    </li>`
}
//generating order module as an HTML representation
export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}