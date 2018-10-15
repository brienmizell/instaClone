// Instaclone!
const IMAGES = [
    {url: "http://farm5.static.flickr.com/4063/4362705129_261db3ea0c_o.gif", Alt="super amazing photo"},
    {url: "https://thumbs.gfycat.com/TemptingAngelicHoneybee-small.gif", Alt="super amazing photo 2"},
    {url: "https://static1.fjcdn.com/thumbnails/comments/Thanks+buddy+have+a+random+gif+_fc5c9c6c4c6b447f37d8f54e6c84b3b1.gif", Alt="super amazing photo 3"}
];

// Alternate version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGES = [
//     "images/oakley-1.jpg",
//     "images/milla-666.jpg",
//     "images/oakley-2.jpg"
// ];

const outputElement = document.querySelector('[data-output');

// function that generates an img element
function createImage(imageInfo) {
    const theImage = document.createElement('img');
    
    // theImage.src = imageInfo;
    theImage.setAttribute('src', imageInfo.url);
    theImage.setAttribute('alt', imageInfo.alt);
    theImage.setAttribute('title', imageInfo.title);


    // add an event listener to the image
    theImage.addEventListener('click', function (event) {
        console.log('hello!');
        // the element that got clicked is accessible
        // as `event.target`
        // And, I can read the `src` attribute!
        console.log(event.target.src);

        // I can now set the output image's src
        // to event.target.src!
    });

    
    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(imageURL){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageURL);
    theContainer.appendChild(image);

    return theContainer;
}

// just draw a thumbnail to the body
// so we can test the clicky mc clickersonability
// let firstImageURL = IMAGES[0];

// loop through IMAGES array.
// For each image, call the anonymous function.
// The anon func should expect to recieve and image URL
IMAGES.forEach(function(singleImageInfo) {
    
    // We pass that image URL to our createThumbnail func
    let testThumb = createThumbnail(singleImageInfo);

    // then append that thumnail to the page.
    document.body.appendChild(testThumb);
})
