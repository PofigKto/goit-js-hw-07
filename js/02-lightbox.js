import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryListElem = document.querySelector('.gallery');
console.log(galleryListElem);
// создание разметки по шаблонной строке
const listImageElement = createListImageElement(galleryItems);
function createListImageElement(galleryItems) {

     return galleryItems.map(galleryItem => ` <a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a> `).join("");
}
console.log(listImageElement);

// рендер разметки 
galleryListElem.insertAdjacentHTML("beforeend", listImageElement)

// используется библиотека симпллайтбокс как обработчик событий по клику на изображения
 let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    })