const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const mobile_links = document.querySelectorAll('.mobile-link')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', insisible)

mobile_links.forEach(link_el => link_el.addEventListener('click', insisible))

function insisible() {
  nav.forEach(nav_el => nav_el.classList.remove('visible'))
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}