import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
};

const listItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(items) {
    return items.map(item => `
    <li>
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>`
    ).join('');
}

refs.gallery.innerHTML = listItemsMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});