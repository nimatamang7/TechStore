// const prevButton = document.getElementById("prevButton");
// const nextButton = document.getElementById("nextButton");
// const carouselImages = document.getElementById("carousel-images");
// const totalSlides = carouselImages.children.length;
// let currentIndex = 0;
// let autoSlideInterval;

// // Move to specific index
// function updateCarousel() {
//   carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Move to next slide
// function moveNext() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   updateCarousel();
// }

// // Move to previous slide
// function movePrev() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   updateCarousel();
// }

// // Reset the auto slide timer
// function resetTimer() {
//   clearInterval(autoSlideInterval);
//   autoSlideInterval = setInterval(moveNext, 5000);
// }

// // Button events
// nextButton.addEventListener("click", () => {
//   moveNext();
//   resetTimer();
// });

// prevButton.addEventListener("click", () => {
//   movePrev();
//   resetTimer();
// });

// // Start auto slide
// autoSlideInterval = setInterval(moveNext, 5000);
