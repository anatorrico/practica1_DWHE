const myCarouselElement = document.querySelector('#carouselAutoplaying')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1000,
  touch: false
})