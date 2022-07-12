const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillBtn = document.getElementById('show-mill');
const sortBtn = document.getElementById('sort');
const EntireBtn = document.getElementById('entire');

let data = []

async function addUser(){
    const result = await fetch('https://randomuser.me/api');
    const data = await result.json();
    const user = data.results[0];
    const money = Math.floor(Math.random()*1000000);

    const newUser = {
        "name" : `${user.name.first} ${user.name.last}`,
        "amount" : money
    }

    AddToData(newUser);
}

function doubleMoney(){
    data = data.map(user =>{
        return {...user, amount : user.amount *2 }
    })
    updateDom();
}

function sortByRichest(){
    data.sort((a, b) => { return b.amount - a.amount});
    updateDom();
}

function ShowMillionaires(){
    data = data.filter(item =>  {return item.amount > 1000000});
    updateDom();
}

function CalculateWealth(){
    const wealth = data.reduce((accm, item) => (accm += item.amount), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h4><strong>Total Wealth :</strong> $ ${wealth} `;
    main.appendChild(wealthEl);
}





addUser();

function AddToData(obj){
    data.push(obj);
    updateDom();
}

function updateDom(providedData = data){
    main.innerHTML = '<h4><strong>Person</strong> Money</h4>';
    providedData.forEach(item =>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> $ ${item.amount}`;
        main.appendChild(element);
    })
}

addUserBtn.addEventListener('click',addUser);
double.addEventListener('click',doubleMoney);
sort.addEventListener('click',sortByRichest);
showMillBtn.addEventListener('click',ShowMillionaires);
EntireBtn.addEventListener('click',CalculateWealth);