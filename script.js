// Get the gallery section
const gallery = document.querySelector('.gallery');

// Number of images
const totalImages = 58;

// Dynamically add images to the gallery
for (let i = 1; i <= totalImages; i++) {
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('gallery-item');
  imgDiv.innerHTML = `<img src="Nitin-Portfolio_${i}.jpg" alt="Portfolio Image ${i}">`;
  gallery.appendChild(imgDiv);
}

