const vowel = document.getElementById('vowel');
const consonant = document.getElementById('consonant');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const dict = document.getElementById('oxfbutton');

const vowels = ['A','E','I','O','U']
const consonants = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']
const nums = [one,two,three,four,five,six,seven,eight,nine]
let count = 0;

vowel.addEventListener('click',() => {
    if(count <= 8){
        nums[count].innerText = vowels[Math.floor((Math.random(0,4)*5))];
        count += 1;
        //console.log(Math.floor((Math.random(0,4)*5)));
    }
    
    
    
})
consonant.addEventListener('click',() => {
    if(count <= 8){
        nums[count].innerText = consonants[Math.floor((Math.random(0,4)*21))];
        count += 1;
    }
    
    
})
