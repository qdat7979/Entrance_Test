var getFirstNumber = document.querySelector('.first-number');
var getSecondNumber = document.querySelector('.second-number');
var getNumberPlace = document.querySelector('.number-place');
var getBtn = document.querySelector('.btn');


var check = function(number){
    if(number < 2){
        return false;
    }
    for (i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}
var numbers = '';
getBtn.onclick = function(){
    if(!getFirstNumber.value || !getSecondNumber.value){
        alert('Nhập số');
    }
    else if(getFirstNumber.value < 0 || getSecondNumber.value < 0){
        alert('Nhập số tự nhiên');
    } else if (getFirstNumber.value > getSecondNumber.value){
        alert('Số đầu lớn hơn số sau');
    } else {
        for(var i = getFirstNumber.value; i <= getSecondNumber.value; i++){
            if(check(i)){
                numbers = numbers + ' ' + i;
            }
        }
    }
    getNumberPlace.innerHTML = numbers;
}


// Bài 2
var getStars = document.querySelector('.star');
var getBtnStars = document.querySelector('.btn-star');
var getStarsPlace = document.querySelector('.stars-place');

getBtnStars.onclick = function(){
    for(var i = 1; i <= getStars.value; i++){
        // html += i;
        for(var j = 1; j <= i; j++){
            getStarsPlace.innerHTML += '*' ;
        }
    getStarsPlace.innerHTML += '</br>';
}}