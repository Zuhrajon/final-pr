// Функция 2-ой секции для кнопки меняющей картинки
function changeImage() {
    const animationFoto = document.getElementById("foto1").src;
    document.getElementById("foto1").src = document.getElementById("foto2").src;
    document.getElementById("foto2").src = document.getElementById("foto3").src;
    document.getElementById("foto3").src = animationFoto;
}


// Функция для открывающегося списка
const accordContainer = document.querySelector('.accordeon-container');
const question = document.querySelector('.accordeon-question');
accordContainer.addEventListener('click', toggleVisible);

function toggleVisible(evt) {
    console.dir(evt.target);
    // В зависимости от того на какой элемент мы нажали (можем узнать по содержанию в нём возможных классов) будет зависеть как мы найдём вопрос и удалим/добавим класс отображения
    if (evt.target.classList.contains('accordeon-question')) {
        evt.target.classList.toggle('expanded');
    } else if (evt.target.classList.contains('accordeon-item')) {
        const questionAsChild = evt.target.querySelector('.accordeon-question');
        questionAsChild.classList.toggle('expanded');
    } else if (evt.target.classList.contains('accordeon-answer')) {
        evt.stopPropagation();
    }
}
