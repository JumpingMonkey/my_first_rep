let btn = document.querySelector('.btn-pop-up');
let calculatorPopUp = document.querySelector('.calculator-popap');
btn.addEventListener("click", function(){
    calculatorPopUp.classList.add('calculator-popap-show');
});

let calcPopUpClose = document.querySelector('.calculator-popap img');

calcPopUpClose.addEventListener("click", function(){
    calculatorPopUp.classList.remove('calculator-popap-show');
});

var slider = document.querySelector('.range-line')
            var output = document.querySelector('#range-value')
            output.innerHTML = slider.value
            slider.oninput = function () {
                output.innerHTML = this.value
            }

