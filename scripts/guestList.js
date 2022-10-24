//import guests and park area arrays
import { getGuests } from "./database.js"
import { getParkAreas } from "./database.js"

const guests = getGuests()
const parkAreas = getParkAreas()

//Export function that returns an HTML string of guests to be displayed in right aside

//no parameters, define let HTML variable and let empty array variable, sort guests array into empty array variable using .sort method, iterate new sorted guests array and append HTML string, return HTML string
export const GuestList = () => {
    let sortedGuests = []
    let guestHTML = "<ul>"

    sortedGuests = guests.sort((a,b) => {const nameA = a.firstName;
    const nameB = b.firstName; if (nameA < nameB){ return -1;} if (nameA > nameB) {return 1;} return 0})

    for (const guest of sortedGuests) {
    guestHTML += `<li id="guest--${guest.id}" class="aside--list">${guest.firstName} ${guest.lastName}</li>`}

    guestHTML += "</ul>"

    return guestHTML
}

const filterGuestsByArea = (guest) => {
    // Define an empty array to store all of the areas objects
    let areaName = ""

    // Iterate the array value of parkAreaServices
    for (const area of parkAreas) {

        // Check if the primary key of the service equals the foreign key on the PAS
        if (area.id === guest.parkAreaId) {
            // If it does, add the current object to the array of areas
            areaName = area.name
        }
    }

    // After the loop is done, return the areas array
    return areaName
}

document.addEventListener("click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target
        /* only run if specified item was clicked - services */
        if (itemClicked.id.startsWith("guest")) {
            //split service id
            const [,guestPK] = itemClicked.id.split("--")
            //iterate services array
            for (const guest of guests) {
                //match service ID to service PK
                if (guest.id === parseInt(guestPK)) {
                    //invoke filter and string fuctions to retrieve park area names
                    const guestArea = filterGuestsByArea(guest)
                    // const parkAreas = parkAreaNames(guestArea)
                    //window alert returns string of service availble in areas
                    window.alert(`${guest.firstName} ${guest.lastName} is at the ${guestArea}.`)

                }
            }
        }
        
    })