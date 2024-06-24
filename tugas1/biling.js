
const form = document.querySelector('form');
const secondsInput = document.querySelector('#seconds');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const seconds = parseInt(secondsInput.value);
    if (seconds <= 0) {
        alert('Masukan nominal yang benar');
        return;
    }
    const pulsa = Math.ceil(seconds / 45);
    const cost = pulsa * 30;
    const resultText = `Kamu Menggunakan ${seconds} Detik, Jadi Biaya ${cost} rupiah (${pulsa} pulsa)`;
    const tableHtml = `
      <table>
        <tr>
          <th>Detik</th>
          <th>Pulsa</th>
          <th>Biaya</th>
        </tr>
        <tr>
          <td>${seconds}</td>
          <td>${pulsa}</td>
          <td>${cost} rupiah</td>
        </tr>
      </table>
    `;
    resultDiv.innerHTML = resultText + tableHtml;
});