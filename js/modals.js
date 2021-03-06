// getting modal opening buttons
const modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    const modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

const closeBtns = document.querySelectorAll(".modal__close");

closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    const modal = (btn.closest(".modal").style.display = "none");
  };
});

window.onclick = function(e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};
