const database = {
    orderBuilder: {
        id: 1,
        facilityId: 2,
        governorId: 1
    },
    governors: [
    {   id: 1,
        name: "Darth Vader",
        status: true,
        colonyId: 1
    },
    {   id: 2,
        name: "Spider Man",
        status: true,
        colonyId: 2
    },
    {   id: 3,
        name: "Dr. Strange",
        status: false,
        colonyId: 3
    },
    {   id: 4,
        name: "Wonder Woman",
        status: true,
        colonyId: 4
    }
    ],
    facilities: [
    {
        id: 1,
        name: "Trillan",
        status: false
    },
    {
        id: 2,
        name: "Hoth",
        status: true
    },
    {
        id: 3,
        name: "Dilso",
        status: true
    },
    {
        id: 4,
        name: "Kraner",
        status: true
    }
    ],
    minerals: [
    {
        id: 1,
        mineral: "Iron"
    },
    {
        id: 2,
        mineral: "Magnesium"
    },
    {
        id: 3,
        mineral: "Zinc"
        },
        {
        id: 4,
        mineral: "Chromium"
    },
    {
        id: 5,
        mineral: "Molybdbenum"
    }
    ],
    colonies: [
    {
        id: 1,
        name: "Zento"
    },
    {
        id: 2,
        name: "Alpha Centauri"
    },
    {
        id: 3,
        name: "Titan Base"
    },
    {
        id: 4,
        name: "BatCave"
    }
    ],
    colonyMinerals: [
    {
        id: 1,
        colonyId: 1,
        mineralId: 2,
        amount: 5
    },
    {
        id: 2,
        colonyId: 3,
        mineralId: 4,
        amount: 20
    },
    {
        id: 3,
        colonyId: 2,
        mineralId: 1,
        amount: 15
    },
    {
        id:4,
        colonyId: 4,
        mineralId: 3,
        amount: 17
    }
    ],
    facilityMinerals: [
    {
        id: 1,
        facilityId: 1,
        mineralId: 3,
        amount: 10    
    },
    {
        id: 2,
        facilityId: 2,
        mineralId: 2,
        amount: 11    
    },
    {
        id: 3,
        facilityId: 3,
        mineralId: 3,
        amount: 100    
    },
    {
        id: 4,
        facilityId: 4,
        mineralId: 2,
        amount: 110    
    },
    {
        id: 5,
        facilityId: 1,
        mineralId: 2,
        amount: 250    
    },
    {
        id: 6,
        facilityId: 1,
        mineralId: 1,
        amount: 70    
    },
    {
        id: 7,
        facilityId: 2,
        mineralId: 4,
        amount: 376   
    },
    {
        id: 8,
        facilityId: 3,
        mineralId: 1,
        amount: 99    
    },
    {
        id: 9,
        facilityId: 3,
        mineralId: 2,
        amount: 543    
    },
    {
        id: 10,
        facilityId: 4,
        mineralId: 1,
        amount: 365    
    },
    ],
    customOrders: [
        {
            id: 1,
            mineralId: 2
        }
    ]
}

export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

export const getSelectedFacility = () => {
    return database.orderBuilder.facilityId
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

export const setGovernor = (id) => {
    database.orderBuilder.governorId = id
    //document.dispatchEvent( new CustomEvent("stateChanged"))
}

export const setFacility = (id) => {
    database.orderBuilder.facilityId = id
    document.dispatchEvent( new CustomEvent("stateChanged"))
}

export const setMineral = (id) => {
    database.orderBuilder.mineralId = id
    document.dispatchEvent( new CustomEvent("stateChanged"))    
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setColony = (id) => {
    database.orderBuilder.colonyId = id
}

export const setColonyMineral = (id) => {
    database.orderBuilder.colonyMineralId = id
}

export const setFacilityMineral = (id) => {
    database.orderBuilder.facilityMineralId = id
    document.dispatchEvent( new CustomEvent("stateChanged")) 
}

export const addCustomOrder = () => {
    const newOrder = {...databseOrderbuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id +1

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const getSelectedGovernor = () => {
    return database.orderBuilder.governorId
}


// export const setFacility = (facilityId) => {
//     database.transientState.selectedFacility = facilityId
//     document.dispatchEvent( new CustomEvent("stateChanged") )
// }



// export const purchaseMineral = () => {

 // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        // document.dispatchEvent( new CustomEvent("stateChanged") )
   




//         // Broadcast custom event to entire documement so that the
//         // application can re-render and update state
//         document.dispatchEvent( new CustomEvent("stateChanged") )
//     }
// }
 
