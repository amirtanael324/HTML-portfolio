const priceInput      = document.getElementById('price-per-litre');
const litresInput     = document.getElementById('litres');
const calculateBtn    = document.getElementById('calculate-btn');
const resultSection   = document.getElementById('result-section');
const totalCostOutput = document.getElementById('total-cost');

function calculateTotal() {
  const price = parseFloat(priceInput.value);
  const litres = parseFloat(litresInput.value);

  if (isNaN(price) || isNaN(litres) || price < 0 || litres < 0) {
    totalCostOutput.textContent = 'Invalid input';
  } else {
    totalCostOutput.textContent = 'SAR ' + (price * litres).toFixed(2);
  }

  resultSection.classList.add('result--visible');
}

calculateBtn.addEventListener('click', calculateTotal);
priceInput.addEventListener('keydown', e => e.key === 'Enter' && calculateTotal());
litresInput.addEventListener('keydown', e => e.key === 'Enter' && calculateTotal());