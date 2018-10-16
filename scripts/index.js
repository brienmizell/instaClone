// Instaclone!
// ========================================
// variables
// ========================================

const IMAGES = [
    "http://farm5.static.flickr.com/4063/4362705129_261db3ea0c_o.gif",
    "https://thumbs.gfycat.com/TemptingAngelicHoneybee-small.gif",
    "https://static1.fjcdn.com/thumbnails/comments/Thanks+buddy+have+a+random+gif+_fc5c9c6c4c6b447f37d8f54e6c84b3b1.gif"
];
const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');
const getModal = document.querySelector('[data-modal]')

// ======================================================================
// Function to loop through images and create thumbnails for each photo.
// ======================================================================

IMAGES.forEach(function (anImageUrl) {

    // We pass that image URL to our createThumbnail func
    let aThumbnail = createThumbnail(anImageUrl);

    // then append that thumbnail to the page.
    thumbnailContainer.appendChild(aThumbnail);
});

// function that generates the thumbnail div
function createThumbnail(imageURL){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageURL);
    theContainer.appendChild(image);

    return theContainer;
}

// function that generates an img element
function createImage(imageURL) {
    const theImage = document.createElement('img');
    
    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function (event) {
        console.log('hello!');
        // the element that got clicked is accessible
        // as `event.target`
        // And, I can read the `src` attribute!
        console.log(event.target.src);

        // I can now set the output image's src
        // to event.target.src!
        outputElement.setAttribute('src', event.target.src);
        // modalElement.classList.toggle('modal-hidden');
        // "remove" is more specific, so we'll use that. yeah!
        modalElement.classList.remove('modal-hidden');
    });

    
    return theImage;
}


// ===================================
// Array "navigation" functions
// ===================================

function getCurrentIndex(currentURL) {
    let index = IMAGES.map(function (i) {
        return i.url;
    }).indexOf(currentURL);
    let index = IMAGES.map(i => i.url).indexOf
}


function getNextImage(currentURL) {
    // find the currentURL's index in the IMAGES array
    let index = IMAGES.indexOf(currentURL);
    // TODO: chewck if index is -1 at this point
    // show an error or do something nice.
    
    // increment the index
    index++;
    // check if it's witin bounds, reset if necessary
    if (index === IMAGES.length) {
        index = 0;
    }
    // then return the image URL at the new index

    return IMAGES[index];
}
function getPrevImage(currentURL) {
    // find the currentURL's index in the IMAGES array
    let index = IMAGES.indexOf(currentURL);
    // TODO: chewck if index is -1 at this point
    // show an error or do something nice.
    
    // increment the index
    index--;
    // check if it's witin bounds, reset if necessary
    if (index < 0) {
        index = IMAGES.length - 1;
    }
    // then return the image URL at the new index

    return IMAGES[index];
}


// Alternate version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGES = [
//     "images/oakley-1.jpg",
//     "images/milla-666.jpg",
//     "images/oakley-2.jpg"
// ];

// console.log(modalElement);







// just draw a thumbnail to the body
// so we can test the clicky mc clickersonability
// let firstImageURL = IMAGES[0];

// Loop through the IMAGES array.
// For each image, call the anonymous function.
// The anon func should expect to receive an image URL


window.addEventListener('keydown', function (event) {
    // console.log('you pressed a key');
    // console.log(event);
    // key: "Escape"
    // keyCode: 27

    if (event.keyCode === 27) {
        console.log('I want to hide the modal!');
        modalElement.classList.add('modal-hidden');
    // } else if (event.keyCode !== getModal) {
    //     getModal.classList.remove('modal-hidden');
    } 
});

// window.addEventListener('target', function (event){
//     if (event.target === getModal) {
//         getModal.style.display = "none";
//     } 
// });

// add global previous/next keyboard listeners
window.addEventListener('keydown', function () {
    console.log(event.keyCode);
    if(event.keyCode === 37) {
        console.log('go to previous image');
        let curr = outputElement.getAttribute('src');
        let prev = getPrevImage(curr);
        outputElement.setAttribute('src', prev);
    } else if (event.keyCode === 39) {
        console.log('go to the next image');
        let curr = outputElement.getAttribute('src');
        let next = getNextImage(curr);
        outputElement.setAttribute('src', next);
    }
});

// main();