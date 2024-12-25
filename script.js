let inputBox = document.querySelector('input[name="display"]')
let buttons = document.querySelectorAll('input[type="button"]')
let buttonArray = Array.from(buttons)
let string = ''

buttonArray.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (btn.value == 'DE') {
      string = string.slice(0, -1)
      inputBox.value = string
    } else if (btn.value == 'AC') {
      string = ''
      inputBox.value = string
    } else if (btn.value == '=') {
      string = eval(string)
      inputBox.value = string
    } else {
      string += e.target.value
      inputBox.value = string
    }
  })
})
