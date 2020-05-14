const images = document.querySelectorAll('.lazy-loading');

const options = {
  // If the image gets within 50px in the Y axis, start the download.
  root: null, // Page as root
  rootMargin: '0px',
  threshold: 1
};

const fetchImage = (url) => {
  console.log(url)
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;

  });
}

const loadImage = (image) => {
  const src = image.dataset.src;
  fetchImage(src).then(() => {
    image.src = src;
    image.classList.remove('blurred');
  })
}

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      console.log(entry.intersectionRatio);
      loadImage(entry.target)
    }
  })
}

// The observer for the images on the page
const observer = new IntersectionObserver(handleIntersection, options);

images.forEach(img => {
  observer.observe(img);
})
