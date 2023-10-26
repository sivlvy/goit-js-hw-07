import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

function createMarkup(arr) {
	return arr
		.map(
			({ preview, original, description }) => `
	<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
   />
</a>
</li>
	`
		)
		.join("");
}
list.innerHTML = createMarkup(galleryItems);
createMarkup(galleryItems);

function handleClick(event) {
	event.preventDefault();
	const currentTarget = event.target;
	const currentTargetAlt = currentTarget.getAttribute("alt");
	if (!currentTarget.classList.contains("gallery__image")) {
		return;
	}
	const source = currentTarget.getAttribute("data-source");
	const instance = basicLightbox.create(`<img src="${source}" alt="${currentTargetAlt}">`);
	instance.show();
}

let instance;

//*Не знаю в чому саме проблема. Надіюсь ви мені підскажете :)

function Esc(event) {
	if (event.code === "Escape") {
		instance.close();
	}
}

list.addEventListener("click", handleClick);
list.addEventListener("keydown", Esc);
