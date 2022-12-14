import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);



const divGallery = document.querySelector(".gallery");

function  makeGallery(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
        <div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    data-source="${original}"
    />
</a>
</div>
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
    
    const instance = basicLightbox.create(`
    <img src = "${e.target.dataset.source}" width="800" height="600">
`)
    instance.show();


    window.addEventListener('keydown', onPressEscClose);
    
    function onPressEscClose(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    }
}


    
  


