const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
var ticketPrice = +movieSelect.value;

populateUI();


function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) != -1){
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex != null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
    if(selectedMoviePrice!= null){
        ticketPrice = +selectedMoviePrice;
    }
}

function setMovieData(selectedSeatIndex,SelectedMovie){
    localStorage.setItem('selectedMovieIndex',selectedSeatIndex);
    localStorage.setItem('selectedMoviePrice',SelectedMovie);
}

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map( (seat) => {
        return [...seats].indexOf(seat);
    });
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    const selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
}

movieSelect.addEventListener('change',(e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
    setMovieData(e.target.selectedIndex,e.target.value);
   
});

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});
updateSelectedCount();