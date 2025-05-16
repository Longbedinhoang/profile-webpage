var currentSlide = 0;

function openSlideshow(folder) {
    // Reset current slide
    currentSlide = 0;
    
    // Get the container for the slideshow
    var slideshowContainer = document.getElementById('slideshow-container');
    var imageContainer = document.getElementById('image-container');
    
    // Reset containers
    imageContainer.innerHTML = '';
    slideshowContainer.style.display = 'flex'; // Đổi thành flex để căn giữa dễ dàng
    
    // Make sure close button is visible
    document.getElementById('popup-close').style.display = 'block';

    // Dynamically check and load available images 
    loadImagesForFolder(folder, imageContainer);
}

function closeSlideshow() {
    // Hide the slideshow container
    document.getElementById('slideshow-container').style.display = 'none';
}

// Hàm kiểm tra và tải ảnh động
function loadImagesForFolder(folder, container) {
    var basePath = `images/festival_page/${folder}/${folder}_`;
    var maxAttempts = 20; // Số lượng ảnh tối đa thử kiểm tra
    var loadedImages = 0;
    
    for (var i = 1; i <= maxAttempts; i++) {
        let imgPath = `${basePath}${i}.jpg`;
        let img = new Image();
        
        // Lưu index hiện tại để sử dụng trong callback
        let currentIndex = i;
        
        img.onload = function() {
            // Ảnh tồn tại, thêm vào slideshow
            var imgElement = document.createElement('img');
            imgElement.src = imgPath;
            imgElement.alt = `${folder} image ${currentIndex}`;
            
            // Hiển thị ảnh đầu tiên, ẩn các ảnh khác
            if (loadedImages === 0) {
                imgElement.style.display = 'block';
            } else {
                imgElement.style.display = 'none';
            }
            
            container.appendChild(imgElement);
            loadedImages++;
        };
        
        img.onerror = function() {
            // Không làm gì khi ảnh không tồn tại
        };
        
        img.src = imgPath;
    }
    
    // Nếu không có ảnh nào được tải sau 1 giây, hiển thị thông báo
    setTimeout(function() {
        if (loadedImages === 0) {
            var message = document.createElement('p');
            message.textContent = 'Không tìm thấy ảnh nào trong thư mục này';
            message.style.color = 'white';
            message.style.textAlign = 'center';
            container.appendChild(message);
        }
    }, 1000);
}

function changeSlide(n) {
    var slides = document.getElementById('image-container').getElementsByTagName('img');
    
    if (slides.length === 0) return;

    // Hide current slide
    slides[currentSlide].style.display = 'none';
    
    // Calculate new slide index
    currentSlide = currentSlide + n;
    
    // Loop back to first slide if past the end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    // Loop to last slide if going before the first
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Show new current slide
    slides[currentSlide].style.display = 'block';
}