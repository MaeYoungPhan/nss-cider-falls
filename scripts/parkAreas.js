//import guests, services, PAS, and park area arrays
import { getServices } from "./database.js"
import { getParkAreaServices } from "./database.js"
import { getParkAreas } from "./database.js"
import { getGuests } from "./database.js"

const services = getServices()
const parkAreas = getParkAreas()
const pas = getParkAreaServices()
const guests = getGuests()

// The function needs the parkArea information, so define a parameter
const filterAreasByServices = (parkArea) => {
    // Define an empty array to store all of the areas objects
    const filteredServices = []

    // Iterate the array value of parkAreaServices
    for (const service of pas) {

        // Check if the primary key of the service equals the foreign key on the PAS
        if (service.parkAreaId === parkArea.id) {
            // If it does, add the current object to the array of areas
            filteredServices.push(service)
        }
    }

    // After the loop is done, return the areas array
    return filteredServices
}

// Define a function that builds a string of Park Area Names. Needs a paramter for assignments array.
const serviceNames = (filteredServices) => {
    // Define an empty string that will get appended with matching areas
    let serviceNames = `<ul class="area--list">Services Include:`

    // Iterate the array of service objects
    for (const filtered of filteredServices) {

        // For each area, iterate the Park Area array to find the matching name
        for (const service of services) {
            if (service.id === filtered.serviceId) {
                // Add the name of the matching park area to the string of park area names
                serviceNames += `<li>${service.name}</li>`
            }
        }
    }

    serviceNames+= `</ul>`
    // After the loop is done, return the string
    return serviceNames
}

export const ParkAreas = () => {
    let parkAreaHTML = ""

    for (const parkArea of parkAreas) {
        const areaService = filterAreasByServices(parkArea)
        const activity = serviceNames(areaService)
        parkAreaHTML += `<div class="grid_item"><p class="area--title" id="parkArea--${parkArea.id}">${parkArea.name}</p> \n ${activity}</div>`
    }

    return parkAreaHTML
}

//Function to filter guests by park area
const filteredGuests = (parkArea) => {
    //Define empty area to take in filtered area
    let areaGuests = []
    //filter guests arary using .filter method based on Park Area Id
    areaGuests = guests.filter(guest => parkArea.id === guest.parkAreaId)
    //Define variable to store total number of guets in PA after invoking .length method   
    const totalGuests = areaGuests.length
    //Return total number of guests in park area
        return totalGuests
    }

//Event listener to display total number of guests in park area
    document.addEventListener("click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target
        /* only run if specified item was clicked */
        if (itemClicked.id.startsWith("parkArea")) {
            //split park area id
            const [,parkAreaPK] = itemClicked.id.split("--")
            //iterate park areas array
            for (const parkArea of parkAreas) {
                //match parkArea.id to clicked PK
                if (parkArea.id === parseInt(parkAreaPK)) {
                    //invoke filtered guests function
                    const currentGuests = filteredGuests(parkArea)
                    //window alert appends string with totalGuests variable and displays when area is clicked
                    window.alert(`There are ${currentGuests} guests in this area.`)

                }
            }
        }
        
    })