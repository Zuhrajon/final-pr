// Функция для бургер меню
const switchContainer = document.querySelector('.switch-container');
const questionAbout = document.querySelector('.switch-question');
switchContainer.addEventListener('click', toggleContainVisible);

function toggleContainVisible(evt) {
    console.dir(evt.target);
    if (evt.target.classList.contains('switch-question')) {
        evt.target.classList.toggle('expanded');
    } else if (evt.target.classList.contains('switch-item')) {
        const questionAsChild = evt.target.querySelector('.switch-question');
        questionAsChild.classList.toggle('expanded');
    } else if (evt.target.classList.contains('switch-answer')) {
        evt.stopPropagation();
    }
}



// Функция 2-ой секции для кнопки меняющей картинки
function changeImage() {
    const animationFoto = document.getElementById("foto1").src;
    document.getElementById("foto1").src = document.getElementById("foto2").src;
    document.getElementById("foto2").src = document.getElementById("foto3").src;
    document.getElementById("foto3").src = animationFoto;
}


// Функция для открывающегося списка
const accordContainer = document.querySelector('.about-container');
const question = document.querySelector('.about-question');
accordContainer.addEventListener('click', toggleVisible);

function toggleVisible(evt) {
    console.dir(evt.target);
    if (evt.target.classList.contains('about-question')) {
        evt.target.classList.toggle('circle');
    } else if (evt.target.classList.contains('about-item')) {
        const questionAsChild = evt.target.querySelector('.about-question');
        questionAsChild.classList.toggle('circle');
    } else if (evt.target.classList.contains('about-answer')) {
        evt.stopPropagation();
    }
}

// const inputText = document.getElementById('inputId').value;
// const errorText = document.getElementById('errorText');
// console.log(inputText);
// if (inputText === '') {
//     console.log('error');
//     // errorText.style.display = 'block';
//     } else {
//     // поле заполнено
//     }
   