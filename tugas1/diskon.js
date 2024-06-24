const originalPriceInput = document.getElementById('original-price');
const discountPercentInput = document.getElementById('discount-percent');
const calculateBtn = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

calculateBtn.addEventListener('click', calculateDiscount);

function calculateDiscount() {
    const originalPrice = parseFloat(originalPriceInput.value);
    const discountPercent = parseFloat(discountPercentInput.value);
    const discountAmount = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - discountAmount;
    resultElement.textContent = `You will pay: ${finalPrice.toFixed(2)}`;
}