// Функция 2-ой секции для кнопки меняющей картинки
function changeImage() {
    const animationFoto = document.getElementById("foto1").src;
    document.getElementById("foto1").src = document.getElementById("foto2").src;
    document.getElementById("foto2").src = document.getElementById("foto3").src;
    document.getElementById("foto3").src = animationFoto;
}