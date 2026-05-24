
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${likes}</span></p>
          <p class="info-item"><b>Views</b><span>${views}</span></p>
          <p class="info-item"><b>Comments</b><span>${comments}</span></p>
          <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
        </div>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}
const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}