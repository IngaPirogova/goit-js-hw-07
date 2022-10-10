import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const divGallery = document.querySelector(".gallery");

function  makeGallery(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
        <li>
<a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    data-source="${original}"
    />
</a>
</li>
`;
		})
		.join("");
}

const markup =  makeGallery(galleryItems);
divGallery.insertAdjacentHTML("afterbegin", markup);

divGallery.addEventListener('click', onItemsClick);
function onItemsClick(e) {
    e.preventDefault();
    const imageEl = e.target.classList.contains("gallery__image")
    console.log(imageEl)
    if (!imageEl) {
        return;
    }
    const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });

};

 