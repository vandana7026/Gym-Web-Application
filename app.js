let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-item');
let imageSliderInterval = setInterval(showNextImage, 2000);

function showNextImage() {
    galleryImages[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    galleryImages[currentImageIndex].style.display = 'block';
}

function showPreviousImage() {
    galleryImages[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    galleryImages[currentImageIndex].style.display = 'block';
}
const gallerySection = document.getElementById('gallery');
gallerySection.addEventListener('mouseover', () => clearInterval(imageSliderInterval));
gallerySection.addEventListener('mouseout', () => {
    imageSliderInterval = setInterval(showNextImage, 3000);
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    alert('Form submitted successfully!');
});
