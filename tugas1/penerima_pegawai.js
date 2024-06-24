const form = document.getElementById('candidate-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const jk = document.getElementById('jk').value;
    const tinggiBadan = parseInt(document.getElementById('tinggi-badan').value);
    const bb = parseInt(document.getElementById('bb').value);
    const ipk = parseFloat(document.getElementById('ipk').value);
    const pendidikan = document.getElementById('pendidikan').value;

    let eligible = true;

    if (jk === 'laki-laki') {
        if (tinggiBadan < 170 || tinggiBadan > 179) {
            eligible = false;
        }
        if (bb !== Math.round(tinggiBadan - 110)) {
            eligible = false;
        }
    } else if (jk === 'perempuan') {
        if (tinggiBadan < 160 || tinggiBadan > 170) {
            eligible = false;
        }
        if (bb !== Math.round(tinggiBadan - 110)) {
            eligible = false;
        }
    }

    if (ipk < 3 || ipk > 4) {
        eligible = false;
    }

    if (pendidikan !== 'D3' && pendidikan !== 'S1') {
        eligible = false;
    }

    if (eligible) {
        resultDiv.innerHTML = 'Anda memenuhi syarat penerimaan pegawai!';
        resultDiv.style.color = 'green';
    } else{
        resultDiv.innerHTML = 'Anda tidak memenuhi syarat penerimaan pegawai.';
        resultDiv.style.color = 'ed';
    }
});