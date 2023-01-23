import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
};

const listItemsMarkup = createListItemsMarkup(galleryItems);

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

refs.gallery.innerHTML = listItemsMarkup;
refs.gallery.addEventListener('click', openModal);

function openModal(e) {
    e.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`,
    window.addEventListener('keydown', closeModal),
);

function closeModal(e) {
    if(e.code === 'Escape') {
        instance.close();
    }
}

instance.show();
}