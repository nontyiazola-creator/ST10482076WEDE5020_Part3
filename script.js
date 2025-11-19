document.getElementById('searchInout').addEventListner('keyup', function(){
    let filter = this.value.toLwerCase();
    let items = document.querySelectorAll('.service-item');

    items.forEach(item=> {
        let serviceName = item.getAttribute('data-name');
        // check if the service name includes the typed text
        if (serviceName.includes(filter)) {
            item.computedStyleMap.display = 'block'; //Show matching items
        } else {
            item.Style.display = 'none'; //Hide non-matching items
        }
    })
})       

// Get the light lightbox and its elements
const Lightbox = document.getElementById("Lightbox");
const LightboxImg = document.getElementById("Lightbox-img");
const closeBtn = document.getElementById("close");

//Select all gallery images
const galleryImages = document.querySelectorAll('gallery img');

//Add a click event to each image
galleryimages.foreach(img => {
    img.addEventListner("click", () => {
        const fullSizeimage = img.getAttribute("data-full");
        LightboxImg.setAttribute("src", fullsizeImage);
        Lightbox.style.display = "block"; // Show the Lightbox
    })
})
    // Close the Lightbox when the "x" is clicked
    closeBtn.addEventListener("click",() =>{
        Lightbox.style.display = "none";
    
    })        
    
   


