let btn = document.querySelector('.btn-pop-up');
btn.addEventListener("click", function(){
    console.log(btn.classList.contains('btn'));
});


var slider = document.querySelector('.range-line')
            var output = document.querySelector('#range-value')
            output.innerHTML = slider.value
            slider.oninput = function () {
                output.innerHTML = this.value
            }

