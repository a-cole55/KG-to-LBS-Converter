document.querySelector('#check').addEventListener('click',convert)
document.querySelector('#reset').addEventListener('click',reset)

function convert() {
    event.preventDefault()
    let lbs = document.querySelector('#kgs').value
    lbs = Math.round(lbs * 2.20462)
    // console.log(lbs)
    document.querySelector('#yell').innerText = `${lbs} lbs`
}
function reset() {
    document.querySelector('input').val = ''
}