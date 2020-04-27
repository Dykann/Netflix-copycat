const lastButtonsTitle = document.querySelectorAll(".last-button-title");

function toggleActive(element) {
  element.classList.toggle("active");
  console.log(element);
}

lastButtonsTitle.forEach(function (lastButton) {
  lastButton.addEventListener("click", function () {
    toggleActive(lastButton);
  });
});
