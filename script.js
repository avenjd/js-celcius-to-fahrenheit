const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celcius

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const fahrenheitToCelcius = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
	converter.value = ''
}

const celciusToFahrenheit = () => {
	celcius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F to ${celcius.toFixed(1)}°C`
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			fahrenheitToCelcius()
		} else {
			celciusToFahrenheit()
		}
	} else {
		result.textContent = 'Musisz podać jakąś wartość!'
	}
}

const reset = () => {
	converter.value = ''
	result.textContent = ''
}
changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
