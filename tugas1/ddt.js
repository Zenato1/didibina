document.getElementById('priceForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const price = parseFloat(document.getElementById('price').value);
	const quantity = parseInt(document.getElementById('quantity').value);

	let discount = 0;
	if (quantity >= 3) {
		discount = price * 0.10;
	}

	const total = (price * quantity) - discount;

	document.getElementById('result').innerText = `Name: ${name}, Total Price: ${total}`;
});