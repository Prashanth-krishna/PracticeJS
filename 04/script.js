const curOne = document.getElementById('cur-one');
const curNameOne = document.getElementById('currency-one');
const curTwo = document.getElementById('cur-two');
const curNameTwo = document.getElementById('currency-two');
const rate = document.getElementById('rate');
const btn=document.getElementById('swap');

//functions
function calculate(){
    const first = curNameOne.value;
    const second = curNameTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${first}`)
    .then(res => res.json())
        .then(
            data => {
               rates = data.rates[second];
               rate.innerText = `1 ${first} : ${rates} ${second}`;
               curTwo.value = curOne.value * rates;
            }
        );
    
    // console.log(`${first}, ${second}`);
}

//event listeners
curOne.addEventListener('input',calculate);
curNameOne.addEventListener('change',calculate);
curTwo.addEventListener('input',calculate);
curNameTwo.addEventListener('change',calculate);
btn.addEventListener('click',() =>{
    let temp = curNameOne.value;
    curNameOne.value = curNameTwo.value;
    curNameTwo.value = temp;
    calculate();
})
calculate();