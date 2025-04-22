// Simple JavaScript to handle Add to Cart button clicks
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn-primary');
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const productName = this.closest('.card').querySelector('.card-title').textContent;
      alert(productName + ' has been added to your cart!');
    });
  });
});
let dd= document.getElementById('dd');
h1.innerHTML = "<h2>Welcome to our Online Store</h2>";

function fs() {
  document.getElementById('hello').innerHTML="hello mf";  bg
    
  
}