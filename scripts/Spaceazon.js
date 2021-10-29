//Generating HTML represenetation of order state

// Importing functions from database module
import { getOrders, getFacilityMinerals } from "./database.js"

const facilityMinerals = getFacilityMinerals()

const buildOrderListItem = (order) => {
    const foundFacilityMineral = facilityMinerals.find(
        (facilityMineral) => {
            return facilityMineral.id === order.facilityMineralId
        }
    )

    const totalAmount = foundFacilityMineral.amount

    const amountString = totalAmount(int)

    return `<li>
    Order #${order.id} amount ${amountString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}