const imagebox = [
  "images/image1.jpg",
  "images/image2.png",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
];

let currentIndex = 0;

function updateGallery() {
  galleryImages.forEach((image, index) => {
    image.classList.remove("active");

    if (index === currentIndex) {
      image.classList.add("active");
    }
  });
}

// select DOM elements
const galleryImages = document.querySelectorAll(".gallery-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// function to update the main image
function updateMainImage() {
  mainImage.src = images[currentIndex];
}

// click event for next button
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateGallery();
});

// click event for previous button
prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateGallery();
});

updateGallery();