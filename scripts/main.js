// import functions from guests, PA, and services modules
import { GuestList } from "./guestList.js"
import { Services } from "./services.js"
import { ParkAreas } from "./parkAreas.js"
// import { RegisteredPets } from "./RegisteredPets.js"

// Define varaible to store querySelector for main HTML class
const mainContainer = document.querySelector("#container")

//Define function to append HTML  with functions from other modules
const applicationHTML = `
<div class="header">
<img class="logo" src="/images/ciderfalls.png" alt="cider falls logo, compass like shape with apple at north, wooded waterfalls at south, and cider falls park name in middle" width="175" height="175">
<h1 class="header_text">Cider Falls Park</h1>
</div>
<div><img class="hero" src="https://www.visitluzernecounty.com/ImageRepository/Document?documentID=1407" alt="fall waterfalls"</div>
<article class="details">
    <section class="services">
        ${Services()}
    </section>
    <h2 class="area_header">Attractions</h2>
    <section class="areas">
        ${ParkAreas()}
    </section>
</article>

<aside class="aside">
    <h2 class="aside__title">Current Guests</h2>
    ${GuestList()}
</aside>

<article class="contact">
        <p class="contact__text">Cider Falls Park 123 Cider Falls Lane Anytown, State 12345</p>
        <p class="contact__text">876-543-2110</p>
        <a class="contact--email" href="mailto:info@ciderfallspark.gov"><img src="https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT"
            alt="email" height=30px></a>
        <a class="contact--social" href="https://www.facebook.com/"><img src="https://louisville.edu/mcconnellcenter/images/facebook_logos_PNG19748.png/image"
            alt="facebook" height=30px></a>
        <a class="contact--social" href="https://www.instagram.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt="instagram" height=30px></a>
</article>
`
//Set mainContainer.innerHTML variable equal to applicationHTML
mainContainer.innerHTML = applicationHTML