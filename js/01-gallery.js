import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
};

const listItemsMarkup = createListItemsMarkup(galleryItems);

refs.gallery.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
    return items.map(item => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img 
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="Image description"
            />
        </a>
    </div>
    `).join('');
}

