// Instaclone!
const IMAGES = [
    "https://thumbs.gfycat.com/TemptingAngelicHoneybee-small.gif",
    "http://farm5.static.flickr.com/4063/4362705129_261db3ea0c_o.gif",
    "https://static1.fjcdn.com/thumbnails/comments/Thanks+buddy+have+a+random+gif+_fc5c9c6c4c6b447f37d8f54e6c84b3b1.gif"
];

// Alternate version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGES = [
//     "images/oakley-1.jpg",
//     "images/milla-666.jpg",
//     "images/oakley-2.jpg"
// ];

//  function that generates the thumbnail div
// funcation that generates an img element

function createImage(imageURL){
    const theImage = document.createElement('img');

    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add an even listener to the image
    theImage.addEventListener('click', function() {
        console.log('Hello!')
        // the element that got clicked is accessaible 
        // as `event.target`
        // And, I can read the `src` attribute!
        console.log(event.target.src);

        // I can now set the output image's src
        to EventTarget.target.src!
    })

    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(url) {
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageURL);
    theContainer.appendChild(createImage(url));

}

// just draw a thumbnail to the body
// so we can test the clicky mc clickersonability
let firstImageURL = IMAGES[0];
let testThumb = createThumbnail(firstImageURL);
document.body.appendChild(testThumb);
// 