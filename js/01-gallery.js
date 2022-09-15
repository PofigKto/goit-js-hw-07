import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// получаем ссылку на элемент Div
const refs = {
    list: document.querySelector('.gallery'),
};
console.log(refs.list)
// создаю разметку по шаблонной строке
const listImageElements = createListImageElements(galleryItems);
function createListImageElements(galleryItems) {
    return galleryItems.map(galleryItem => `<div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}" /> </a> </div>`).join("");
}
console.log(listImageElements)
// рендеринг разметки
refs.list.insertAdjacentHTML("beforeend", listImageElements)
// установка слушателя на див с созданными элементами
refs.list.addEventListener('click', onGalleryItemsClick)

function onGalleryItemsClick(event) {
    // запрет для браузера чтобы не открвал картинку сам
    event.preventDefault();
    // проверка куда попадает клик, если не в картинку то выход и ничего не делать
    if (event.target.nodeName != 'IMG') {
      return
    } //иначе, используя библиотеку бейсиклайтбокс, открываем оригинальное изображение в модальном окне
    else {
      const instance = basicLightbox.create(`<img width="1400" height="900" src= "${event.target.dataset.source}">`, {
        // опции при открытом модальном окне
        onShow: (instance) => {       
          //колбек-функция на обработку события
          this.onInstanceclick = function (e) {
            //закрытие окноа по кнопке Escape
            if (e.code === "Escape") { instance.close() }
          }
        // слушатель на кнопку Escape при открытой модалке
           document.addEventListener("keydown", this.onInstanceclick)
        },
        // удаление слушателя после закрытия модалки
        onClose: (instance) => {
        document.removeEventListener("keydown", this.onInstanceclick)
      }
      }).show()
    }
}