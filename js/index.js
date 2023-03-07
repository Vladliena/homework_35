const form = document.getElementById('my_form');
const sortBtn = form.querySelector('#sort_btn');
sortBtn.addEventListener('click', sort)

function sort(event) {
    event.preventDefault()
    let numbersArray = [];
    const input = form.querySelector('#numbers')
    const radioBtn = form.querySelectorAll('.btn');
    numbersArray = numbersArray.concat(input.value.split(','))
    for (let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            if (radioBtn[i].value === 'subject_plus') {
                numbersArray.sort((a, b) => {
                    if (a < b) {
                        return -1
                    }
                    if (a > b) {
                        return 1
                    }
                    return 0
                });
            }
            if (radioBtn[i].value === 'subject_minus') {
                numbersArray.sort((a, b) => {
                    if (a < b) {
                        return 1
                    }
                    if (a > b) {
                        return -1
                    }
                    return 0
                });
            }
        }
        const paragraph = document.getElementById('paragraph');
        paragraph.textContent = numbersArray.toString()
    }
}
