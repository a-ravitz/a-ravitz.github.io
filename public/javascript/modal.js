//get modal element

var modal = document.getElementById('simpleModal');

//get open modal button

var modalBtn = document.getElementById('submitBtn');

//get close button;

var closeBtn = document.getElementById('closeBtn');

// listen for open click

modalBtn.addEventListener('click', openModal);

// listen for close click 
closeBtn.addEventListener('click', closeModal);

//outside click
window.addEventListener('click', clickOutside)

function openModal() {

    modal.style.display = 'block';

};

function closeModal() {

    modal.style.display = 'none';

};

function clickOutside(e) { //function to close modal if outside click 
    
    if (e.target === modal) {
        // console.log(e)
    modal.style.display = 'none';
    }
};
$("#submitBtn").on("click", openModal);
$("#closeBtn").on("click", closeModal);
$(window).on("click", clickOutside);