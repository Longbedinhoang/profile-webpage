var currentSlide = 0;

function openSlideshow(folder) {
    // Get the container for the slideshow
    var slideshowContainer = document.getElementById('slideshow-container');
    slideshowContainer.innerHTML = ''; //xoa anh cu
    slideshowContainer.style.display = 'block';
    //document.getElementById('popup-close').style.display = 'block';

    // Fetch the list of images in the specified folder
    fetchImages(folder)
        .then(images => {
            // Create HTML elements for each image in the slideshow
            images.forEach((image, index) => {
                var imgElement = document.createElement('img');
                imgElement.src = `images/festival_page/${folder}/${image}`;
                slideshowContainer.appendChild(imgElement);

                if (index === 0) {
                    imgElement.style.display = 'block';
                } else {
                    imgElement.style.display = 'none';
                }
            });
            
            // Show the slideshow container
            //slideshowContainer.style.display = 'block';
        })
        .catch(error => console.error('Error fetching images:', error));
}

function closeSlideshow() {
    // Hide the slideshow container
    document.getElementById('slideshow-container').style.display = 'none';
}

function fetchImages(folder) {
    var folderPath = `images/festival_page/${folder}`;

    // Fetch the list of images in the specified folder
    return fetch(folderPath)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();   
            var doc = parser.parseFromString(data, 'text/html');
            var files = Array.from(doc.querySelectorAll('a')).map(a => {
                // lay file name tu href
                var fileName = a.getAttribute('href').split('/').pop();
                return fileName.trim();
            });
            
            console.log('Files:', files);

            // Filter out files that contain additional characters
            var filteredFiles = files.filter(file => !file.includes('%'));
            filteredFiles = files.filter(file => file.includes('.jpg'))

            return filteredFiles;
        });
}

function changeSlide(n) {
    var slides = document.getElementById('slideshow-container').getElementsByTagName('img');

    if (currentSlide + n >= 0 && currentSlide + n < slides.length) {
        slides[currentSlide].style.display = 'none';
        currentSlide += n;
        slides[currentSlide].style.display = 'block';
    }
}