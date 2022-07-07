function calc() {
    let price = document.getElementById('price').value.replace(/\s/g, '')
    let initial = document.getElementById('initial_contribution').value.replace(/\s/g, '')
    let term = document.getElementById('term').value.replace(/\s/g, '')
    let percent = document.getElementById('percent').value.replace(/\s/g, '')/100
    let cont, monthPercent, credit

    monthPercent = percent / 12
    credit = price - initial

    cont = credit * (monthPercent * Math.pow( 1 + monthPercent , term * 12 ))/(Math.pow( 1 + monthPercent , term * 12 ) - 1)

    let output = document.querySelector('span')
    output.innerHTML = cont.toFixed(2)
}

let calc_inp = document.getElementsByClassName('calc-input')

Array.from(calc_inp).forEach(el => {
    console.log(el)
    el.addEventListener('input', addSpaces)
})

function addSpaces(e){
    console.log(e)
    e.target.value = e.target.value.replace(/\s/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

