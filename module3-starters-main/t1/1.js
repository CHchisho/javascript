// document.querySelector('#target')

// Получаем элемент с id="target"
let element = document.getElementById("target");

element.innerHTML = `<li>First item</li>
<li>Second item</li>
<li>Third item</li>`

// Добавляем класс "my-list" этому элементу
element.classList.add("my-list");
