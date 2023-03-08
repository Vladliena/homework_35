const form = document.getElementById('my_form');
const input = form.querySelector('#numbers')
const radioBtn = form.querySelectorAll('.btn');
form.addEventListener('submit', sort)

function sort(event) {
    event.preventDefault()
    let numbersArray = input.value.split(',')
    const operator = radioBtn[0].checked ? 'subject_plus' : 'subject_minus';
    numbersArray.sort((a, b) => operator === 'subject_plus' ? a - b : b - a);
    const paragraph = document.getElementById('paragraph');
    paragraph.innerHTML = numbersArray
}


