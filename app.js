function generatepin() {
    const inputpin = Math.round(Math.random() * 10000);
    const pin = inputpin + '';

    if (pin.length == 4) {
        document.getElementById('generate-input').value = pin;
    } else {
        return generatepin();
    }
}

document.getElementById("calc-number").addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcinput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcinput.value = '';
        }
    } else {
        const newnumber = calcinput.value + number;
        calcinput.value = newnumber;
    }
});

function verifypin() {
    const pin = document.getElementById('generate-input').value;
    const typednumber = document.getElementById('calc-input').value;
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');

    if (pin == typednumber) {
        success.style.display = 'block';
        fail.style.display = 'none';
    } else {
        success.style.display = 'none';
        fail.style.display = 'block';
    }
}