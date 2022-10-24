//import services, PAS, and park area arrays
import { getServices } from "./database.js"
import { getParkAreaServices } from "./database.js"
import { getParkAreas } from "./database.js"

const services = getServices()
const parkAreas = getParkAreas()
const pas = getParkAreaServices()

// The function need the service information, so define a parameter
const filterServicesByArea = (service) => {
    // Define an empty array to store all of the areas objects
    const areas = []

    // Iterate the array value of parkAreaServices
    for (const area of pas) {

        // Check if the primary key of the service equals the foreign key on the PAS
        if (area.serviceId === service.id) {
            // If it does, add the current object to the array of areas
            areas.push(area)
        }
    }

    // After the loop is done, return the areas array
    return areas
}

// Define a function that builds a string of Park Area Names. Needs a paramter for assignments array.
const parkAreaNames = (areas) => {
    // Define an empty string that will get appended with matching areas
    let areaNames = ""

    // Iterate the array of area objects
    for (const area of areas) {

        // For each area, iterate the Park Area array to find the matching name
        for (const parkArea of parkAreas) {
            if (parkArea.id === area.parkAreaId) {
                // Add the name of the matching park area to the string of park area names
                areaNames += `-- ${parkArea.name} `
            }
        }
    }

    // After the loop is done, return the string
    return areaNames
}

document.addEventListener("click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target
        /* only run if specified item was clicked - services */
        if (itemClicked.id.startsWith("service")) {
            //split service id
            const [,servicePK] = itemClicked.id.split("--")
            //iterate services array
            for (const service of services) {
                //match service ID to service PK
                if (service.id === parseInt(servicePK)) {
                    //invoke filter and string fuctions to retrieve park area names
                    const areas = filterServicesByArea(service)
                    const parkAreas = parkAreaNames(areas)
                    //window alert returns string of service availble in areas
                    window.alert(`${service.name} is available in ${parkAreas}.`)

                }
            }
        }
        
    })

//Export function that returns an HTML string of services to be displayed below header section
//no parameters, define let HTML variable, iterate services array and append HTML string, return HTML string
export const Services = () => {
    let servicesHTML = ""

    for (const service of services) {
    servicesHTML += `<p class="service_list" id="service--${service.id}">${service.name}</p>`}

    return servicesHTML 
}