function rotate(){
    var lastChild = $('.slider div:last-child').clone();

    $('.slider div').removeClass('fisrtSlide')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    $(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
    rotate()
}, 4000);


// custom js
let btn = document.querySelector("#btn");

        function menu(){
            let nav = document.querySelector("#nav");

            nav.classList.toggle("mobile-menu");
        }
btn.addEventListener('click', menu)

console.log("evrything working")