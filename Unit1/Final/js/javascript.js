const button = document.getElementById('searchButton');
const input = document.getElementById('userInput');
button.addEventListener('click', function () {
  const q = (input.value || '').trim();
  const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
  window.open(url, '_blank');
});
document.getElementById('clearButton').addEventListener('click', () => {
  document.getElementById('userInput').value = '';
  document.getElementById('userInput').focus();
});

// FAQs page JS
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}