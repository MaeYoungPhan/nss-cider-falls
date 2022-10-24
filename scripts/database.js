// Create arrays of objects for guests, servces, parkAreas, sericeTypes and parkAreaServices
// Export arrays using .map methods
const database = {
    guests: [{
        id: 1,
        firstName: "Ron",
        lastName: "Swanson",
        parkAreaId: 4
    }, {
        id: 2,
        firstName: "Leslie",
        lastName: "Knope",
        parkAreaId: 2
    }, {
        id: 3,
        firstName: "April",
        lastName: "Ludgate",
        parkAreaId: 3
    }, {
        id: 4,
        firstName: "Andy",
        lastName: "Dwyer",
        parkAreaId: 3
    }, {
        id: 5,
        firstName: "Ben",
        lastName: "Wyatt",
        parkAreaId: 2
    }, {
        id: 6,
        firstName: "Ann",
        lastName: "Perkins",
        parkAreaId: 6
    }, {
        id: 7,
        firstName: "Chris",
        lastName: "Traeger",
        parkAreaId: 6
    }, {
        id: 8,
        firstName: "Tom",
        lastName: "Haverford",
        parkAreaId: 5
    }, {
        id: 9,
        firstName: "Jerry",
        lastName: "Gergich",
        parkAreaId: 5
    }, {
        id: 10,
        firstName: "Mona-Lisa",
        lastName: "Saperstein",
        parkAreaId: 5
    }, {
        id: 11,
        firstName: "Jean-Ralphio",
        lastName: "Saperstein",
        parkAreaId: 5
    }, {
        id: 12,
        firstName: "John",
        lastName: "Fisher",
        parkAreaId: 4
    }, {
        id: 13,
        firstName: "Mike",
        lastName: "Hikes",
        parkAreaId: 1
    }, {
        id: 14,
        firstName: "Maple",
        lastName: "Woods",
        parkAreaId: 6
    }, {
        id: 15,
        firstName: "River",
        lastName: "Meadows",
        parkAreaId: 3
    }, {
        id: 16,
        firstName: "Fern",
        lastName: "Glenn",
        parkAreaId: 2
    }, {
        id: 17,
        firstName: "Autumn",
        lastName: "Brown",
        parkAreaId: 6
    }, {
        id: 18,
        firstName: "Leif",
        lastName: "Forrester",
        parkAreaId: 3
    }, {
        id: 19,
        firstName: "Forrest",
        lastName: "Gump",
        parkAreaId: 4
    }, {
        id: 20,
        firstName: "Oak",
        lastName: "Mudd",
        parkAreaId: 2
    }],
    parkAreas: [{
        id: 1,
        name: "Chamfort River",
        cardinalPt: "NE"
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        cardinalPt: "N"
    }, {
        id: 3,
        name: "Lodge",
        cardinalPt: "NW"
    }, {
        id: 4,
        name: "Gander River",
        cardinalPt: "SW"
    }, {
        id: 5,
        name: "Campgrounds",
        cardinalPt: "S"

    }, {
        id: 6,
        name: "Pine Bluffs Trails",
        cardinalPt: "SE"
    }],
    services: [{
        id: 1,
        name: "Rafting",
        serviceTypeId: 5
    }, {
        id: 2,
        name: "Canoeing",
        serviceTypeId: 5
    }, {
        id: 3,
        name: "Fishing",
        serviceTypeId: 5
    }, {
        id: 4,
        name: "Hiking",
        serviceTypeId: 5
    }, {
        id: 5,
        name: "Picnicking",
        serviceTypeId: 1
    }, {
        id: 6,
        name: "Rock Climbing",
        serviceTypeId: 5
    }, {
        id: 7,
        name: "Hotel",
        serviceTypeId: 2
    }, {
        id: 8,
        name: "Restaurant",
        serviceTypeId: 1
    }, {
        id: 9,
        name: "Lodging",
        serviceTypeId: 2
    }, {
        id: 10,
        name: "Parking",
        serviceTypeId: 3
    }, {
        id: 11,
        name: "Information",
        serviceTypeId: 4
    }, {
        id: 12,
        name: "Park Office",
        serviceTypeId: 4
    }, {
        id: 13,
        name: "Playground",
        serviceTypeId: 5
    }, {
        id: 14,
        name: "Food Vendors",
        serviceTypeId: 1
    }, {
        id: 15,
        name: "Zip Lines",
        serviceTypeId: 5
    }],
    parkAreaServices: [
        {id: 1, parkAreaId: 1, serviceId: 1},
        {id: 2, parkAreaId: 1, serviceId: 2},
        {id: 3, parkAreaId: 1, serviceId: 3},
        {id: 4, parkAreaId: 2, serviceId: 4},
        {id: 5, parkAreaId: 2, serviceId: 5},
        {id: 6, parkAreaId: 2, serviceId: 6},
        {id: 7, parkAreaId: 3, serviceId: 7},
        {id: 8, parkAreaId: 3, serviceId: 8},
        {id: 9, parkAreaId: 3, serviceId: 9},
        {id: 10, parkAreaId: 3, serviceId: 10},
        {id: 11, parkAreaId: 3, serviceId: 11},
        {id: 12, parkAreaId: 3, serviceId: 5},
        {id: 13, parkAreaId: 4, serviceId: 3},
        {id: 14, parkAreaId: 4, serviceId: 4},
        {id: 15, parkAreaId: 5, serviceId: 9},
        {id: 16, parkAreaId: 5, serviceId: 10},
        {id: 17, parkAreaId: 5, serviceId: 11},
        {id: 18, parkAreaId: 5, serviceId: 12},
        {id: 19, parkAreaId: 5, serviceId: 13},
        {id: 20, parkAreaId: 6, serviceId: 4},
        {id: 21, parkAreaId: 6, serviceId: 5},
        {id: 22, parkAreaId: 6, serviceId: 14},
        {id: 23, parkAreaId: 6, serviceId: 15},
    ],
    serviceTypes: [
        {id: 1, category: "Dining"},
        {id: 2, category: "Lodging"},
        {id: 3, category: "Parking"},
        {id: 4, category: "Information"},
        {id: 5, category: "Activities"}
    ]
}



export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkAreaService => ({...parkAreaService}))
}
